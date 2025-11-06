import { LatLngExpression, LatLngBoundsExpression } from "leaflet";
import { GeoJsonObject } from "geojson";

interface TileLayerOptions {
  name: string;
  url: string;
  minZoom?: number;
  maxZoom?: number;
  attribution: string;
  subdomains?: string[] | undefined;
}

export interface MapProps {
  center?: LatLngExpression;
  bounds?: LatLngBoundsExpression;
  zoom?: number;
  zoomControl?: boolean;
  fullscreenControl?: boolean;
  fullscreenControlPosition?: "topleft" | "topright" | "bottomleft" | "bottomright";
  tilesControl?: boolean;
  tileIndex?: number;
  attributionControl?: boolean;
  customTiles?: TileLayerOptions[];
  dragging?: boolean;
  scrollWheelZoom?: boolean;
  doubleClickZoom?: boolean;
  geojson?: GeoJsonObject;
  layerColor?: string;
  layerFillColor?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onDblClick?: (position: LatLngExpression) => void;
}

export interface MapMarkerProps {
  position: LatLngExpression;
  popupContent?: string;
  iconName?: string;
  iconId?: string;
  iconSize?: number;
  iconColor?: string;
  draggable?: boolean;
  onDragEnd?: (position: LatLngExpression) => void;
}

export interface CustomIconProps {
  iconName?: string;
  iconId?: string;
  size?: number;
  color?: string;
}

export interface MapCircleProps {
  position: LatLngExpression;
  radius: number;
  fill?: string;
  stroke?: boolean;
  fillOpacity?: number;
  opacity?: number;
  popupContent?: string;
}

export interface MapPolygonProps {
  positions: LatLngExpression[] | LatLngExpression[][];
  fill?: string;
  stroke?: boolean;
  popupContent?: string;
}

export interface MapLineProps {
  positions: LatLngExpression[];
  color?: string;
  weight?: number;
  dashArray?: string;
  popupContent?: string;
}

export interface MapRectangleProps {
  bounds: LatLngBoundsExpression;
  color?: string;
  fillColor?: string;
  popupContent?: string;
}
