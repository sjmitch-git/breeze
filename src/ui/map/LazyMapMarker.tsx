"use client";

import React, { useState, useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { LeafletMouseEvent, Icon, DragEndEvent } from "leaflet";

import { MapMarkerProps, CustomIconProps } from "./types";

const baseUrl = "https://img.icons8.com/";

const defaultIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const LazyMapMarker = ({
  position,
  popupContent,
  iconName,
  iconId,
  iconSize,
  iconColor,
  draggable,
  onDragEnd,
}: MapMarkerProps) => {
  const [markerPosition, setMarkerPosition] = useState(position);
  const map = useMap();

  useEffect(() => {
    const handleDoubleClick = (e: LeafletMouseEvent) => {
      setMarkerPosition(e.latlng);
    };

    if (draggable) map.on("dblclick", handleDoubleClick);

    return () => {
      if (draggable) map.off("dblclick", handleDoubleClick);
    };
  }, [map, draggable]);

  const icon = iconName
    ? UseCustomIcon({ iconName, size: iconSize, color: iconColor })
    : iconId
    ? UseCustomIcon({ iconId, size: iconSize, color: iconColor })
    : defaultIcon;

  const handleDragEnd = (event: DragEndEvent) => {
    if (!draggable) return;
    const marker = event.target;
    const newPosition = marker.getLatLng();
    setMarkerPosition(newPosition);
    setTimeout(() => {
      map.setView(newPosition, map.getZoom() + 1);
    }, 500);
    if (onDragEnd) onDragEnd(newPosition);
  };

  return (
    <Marker
      position={markerPosition}
      icon={icon}
      draggable={draggable}
      eventHandlers={{
        dragend: handleDragEnd,
      }}
    >
      {popupContent ? (
        <Popup>{popupContent}</Popup>
      ) : draggable ? (
        <Popup>
          {(() => {
            if (Array.isArray(markerPosition)) {
              return `Lat: ${markerPosition[0].toFixed(5)}, Lon: ${markerPosition[1].toFixed(5)}`;
            } else if ("lat" in markerPosition && "lng" in markerPosition) {
              return `Lat: ${markerPosition.lat.toFixed(5)}, Lon: ${markerPosition.lng.toFixed(5)}`;
            }
            return "Invalid position";
          })()}
        </Popup>
      ) : null}
    </Marker>
  );
};

export default LazyMapMarker;

export const UseCustomIcon = ({ iconName, iconId, size = 40, color }: CustomIconProps): Icon => {
  const colorPath = color ? `${color}` : "";

  const queryParams = new URLSearchParams({
    size: size.toString(),
    id: iconId || "oStMNsdYhXTS",
    format: "png",
    color: color || "000000",
  });

  let iconUrl = "";

  iconName
    ? (iconUrl = `${baseUrl}${colorPath}/${size}/${iconName}.png`)
    : (iconUrl = `${baseUrl}?${queryParams.toString()}`);

  return new Icon({
    iconUrl,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size / 2],
  });
};
