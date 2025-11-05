"use client";

import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Map as LMap, Layer, LeafletMouseEvent, Control } from "leaflet";
import { MapContainer, TileLayer, LayersControl, useMap, GeoJSON } from "react-leaflet";
import "leaflet.fullscreen/Control.FullScreen.css";
import "leaflet.fullscreen";
import { tileOptions as defaultTileOptions } from "./tileOptions";
import { MapProps } from "./types";

interface ClickHandlerProps {
  onDblClick?: (position: { lat: number; lng: number }) => void;
  dragging?: boolean;
}

const { BaseLayer } = LayersControl;

const ClickHandler = ({ onDblClick, dragging }: ClickHandlerProps) => {
  const map = useMap();

  useEffect(() => {
    if (!dragging) return;
    const handleDoubleClick = (e: LeafletMouseEvent) => {
      setTimeout(() => {
        map.setView(e.latlng, map.getZoom());
      }, 500);

      if (onDblClick) {
        onDblClick(e.latlng);
      }
    };

    map.on("dblclick", handleDoubleClick);

    return () => {
      map.off("dblclick", handleDoubleClick);
    };
  }, [map, onDblClick, dragging]);

  return null;
};

const FullscreenControlHandler = ({
  fullscreenControl,
  fullscreenControlPosition,
}: {
  fullscreenControl?: boolean | Control.FullscreenOptions;
  fullscreenControlPosition?: "topleft" | "topright" | "bottomleft" | "bottomright";
}) => {
  const map = useMap();
  const controlRef = useRef<L.Control | null>(null);

  useEffect(() => {
    if (!fullscreenControl) {
      if (controlRef.current) {
        controlRef.current.remove();
        controlRef.current = null;
      }
      return;
    }

    if (!controlRef.current) {
      const controlOptions = typeof fullscreenControl === "object" ? fullscreenControl : {};

      const fullscreen = L.control.fullscreen({
        position: fullscreenControlPosition || "topleft",
        forceSeparateButton: true,
        forcePseudoFullscreen: false,
        ...controlOptions,
      });
      fullscreen.addTo(map);
      controlRef.current = fullscreen;
    }

    const handleFullscreenChange = () => {
      const isFullscreen =
        (map as L.Map & { isFullscreen?: () => boolean }).isFullscreen?.() ?? false;
      if (controlRef.current) {
        (controlRef.current as any).togglePseudoFullscreen?.(isFullscreen);
      }
    };

    map.on("fullscreenchange", handleFullscreenChange);

    return () => {
      if (controlRef.current) {
        controlRef.current.remove();
        controlRef.current = null;
      }
    };
  }, [map, fullscreenControl]);

  return null;
};

const AutoFitBounds = () => {
  const map = useMap();

  useEffect(() => {
    const fit = () => {
      const bounds = map.getBounds();
      if (
        bounds.isValid() &&
        !bounds.equals([
          [0, 0],
          [0, 0],
        ])
      ) {
        map.fitBounds(bounds, { maxZoom: 17 });
      }
    };

    const timer = setTimeout(fit, 100);
    map.on("layeradd", fit);

    return () => {
      clearTimeout(timer);
      map.off("layeradd", fit);
    };
  }, [map]);

  return null;
};

const LazyMap = ({
  center,
  bounds,
  zoom,
  zoomControl = true,
  autoFit = false,
  fullscreenControl = true,
  fullscreenControlPosition = "topleft",
  tilesControl = true,
  attributionControl = true,
  dragging = true,
  scrollWheelZoom = true,
  doubleClickZoom = true,
  geojson,
  layerColor = "white",
  layerFillColor = "blue",
  onDblClick,
  className,
  style,
  tileIndex = 0,
  customTiles = [],
  children,
}: MapProps) => {
  const mapRef = useRef<LMap | null>(null);
  const tileOptions = [...defaultTileOptions, ...customTiles];

  const zoomToFeature = (e: LeafletMouseEvent) => {
    const layer = e.target as Layer;
    if (mapRef.current) {
      if ("getBounds" in layer && typeof layer.getBounds === "function") {
        const bounds = layer.getBounds();
        mapRef.current.fitBounds(bounds);
      } else if ("getLatLng" in layer && typeof layer.getLatLng === "function") {
        const latLng = layer.getLatLng();
        mapRef.current.setView(latLng, mapRef.current.getZoom());
      }
    }
  };

  const handleEachFeature = (feature: any, layer: any) => {
    if (feature.properties) {
      const popupContent = Object.entries(feature.properties)
        .map(([key, value]) => {
          return key === "name" ? `<strong>${value}</strong>` : `<em>${key}:</em> ${value}`;
        })
        .join("<br>");

      layer.bindPopup(popupContent);
    }

    const defaultStyle = {
      color: feature.properties.color || layerColor,
      weight: 1,
      opacity: 1,
      fillOpacity: 0.3,
      fillColor: feature.properties.fillColor || layerFillColor,
      dashArray: "3",
    };

    const hoverStyle = {
      fillOpacity: 0.7,
    };

    layer.setStyle(defaultStyle);

    layer.on({
      click: zoomToFeature,
      mouseover: (e: L.LeafletMouseEvent) => {
        layer.setStyle(hoverStyle);
      },
      mouseout: () => {
        layer.setStyle(defaultStyle);
      },
    });
  };

  return (
    <MapContainer
      center={center}
      bounds={bounds}
      zoom={zoom}
      zoomControl={zoomControl}
      minZoom={3}
      maxZoom={19}
      attributionControl={attributionControl}
      dragging={dragging}
      scrollWheelZoom={scrollWheelZoom}
      doubleClickZoom={doubleClickZoom}
      className={className}
      style={{ width: "100%", height: "100%", ...style }}
      ref={(ref) => {
        if (ref) {
          mapRef.current = ref;
          requestAnimationFrame(() => {
            ref.invalidateSize();
            setTimeout(() => ref.invalidateSize(), 150);
          });
        }
      }}
    >
      <>
        {tilesControl ? (
          <LayersControl position="topright">
            {tileOptions &&
              tileOptions.map((tile, index) => (
                <BaseLayer key={index} name={tile.name} checked={index === tileIndex}>
                  <TileLayer
                    url={tile.url}
                    attribution={tile.attribution}
                    {...(tile.subdomains && { subdomains: tile.subdomains })}
                  />
                </BaseLayer>
              ))}
          </LayersControl>
        ) : (
          <TileLayer
            url={tileOptions[tileIndex].url}
            attribution={tileOptions[tileIndex].attribution}
            {...(tileOptions[tileIndex].subdomains && {
              subdomains: tileOptions[tileIndex].subdomains,
            })}
          />
        )}
        <FullscreenControlHandler
          fullscreenControl={fullscreenControl}
          fullscreenControlPosition={fullscreenControlPosition}
        />
        <ClickHandler onDblClick={onDblClick} dragging={dragging} />
        {geojson && <GeoJSON data={geojson} onEachFeature={handleEachFeature} />}
        {children}
        {autoFit !== false && <AutoFitBounds />}
      </>
    </MapContainer>
  );
};

export default LazyMap;
