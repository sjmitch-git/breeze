import React from "react";
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LatLngExpression } from "leaflet";
import L from "leaflet";
import { Map, MapMarker, MapCircle, MapPolygon, MapLine, MapRectangle } from "..";
import { States } from "../../../data/states";

const importInstructions = `
### How to import the map components

\`\`\`tsx
// Map is required to render the map container
// Other components are optional and can be used to add features to the map
import {
  Map,
  MapMarker,
  MapCircle,
  MapPolygon,
  MapLine,
  MapRectangle,
} from "@smitch/fluid/map";
\`\`\`
`;

const meta: Meta<typeof Map> = {
  title: "Geo/Map",
  component: Map,
  decorators: [
    (Story) => (
      <div className="max-w-sm mx-auto">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
The **Map** component provides an interactive Leaflet map.

${importInstructions}

### Features
- Display interactive maps with custom center and zoom levels.
- Add markers and other map features like circles and GeoJSON layers.
- Support for draggable markers and custom popups.
- Fully customizable through props like \`style\`, \`center\`, and \`zoom\`.
- Fullscreen control with customizable position via \`fullscreenControlPosition\`.

### Example Usage
\`\`\`jsx
import { Map } from "@smitch/fluid/map";

const App = () => {
  return (
    <Map
      center={[51.505, -0.09]}
      style={{
        height: "400px",
        width: "100%",
      }}
      tileIndex={0}
      zoom={16}
    />
  );
};

export default App;
\`\`\`
        `,
      },
    },
  },
  args: {
    zoomControl: true,
    fullscreenControl: true,
    fullscreenControlPosition: "topleft",
    tilesControl: true,
    attributionControl: true,
  },
  argTypes: {
    center: {
      control: "object",
      description: "The initial center of the map, as [latitude, longitude].",
      defaultValue: undefined,
    },
    zoom: {
      control: "number",
      description: "The initial zoom level of the map.",
      defaultValue: undefined,
    },
    className: {
      table: {
        disable: true,
      },
      control: "text",
      description: "Additional CSS classes for the map container.",
    },
    style: {
      table: {
        disable: true,
      },
      description: "Inline styles for the map container.",
    },
    fullscreenControl: {
      control: "boolean",
      description: "Enables the fullscreen control. Set to `true` or a `FullscreenOptions` object.",
      defaultValue: true,
    },
    fullscreenControlPosition: {
      control: {
        type: "select",
        options: ["topleft", "topright", "bottomleft", "bottomright"],
      },
      description: "Position of the fullscreen control.",
      defaultValue: "topleft",
    },
    children: { table: { disable: true } },
    bounds: { table: { disable: true } },
    tileIndex: { table: { disable: true } },
    onDblClick: { table: { disable: true } },
    geojson: { table: { disable: true } },
    customTiles: { table: { disable: true } },
    layerColor: { table: { disable: true } },
    layerFillColor: { table: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Map>;

export const Default: Story = {
  name: "Basic Map",
  args: {
    center: [51.505, -0.09],
    zoom: 13,
    zoomControl: true,
    fullscreenControl: true,
    fullscreenControlPosition: "topleft",
    tilesControl: true,
    style: { height: "400px", width: "100%" },
  },
};

export const StaticMap: Story = {
  args: {
    center: [51.505, -0.09],
    zoom: 16,
    zoomControl: false,
    fullscreenControl: false,
    tilesControl: false,
    tileIndex: 0,
    attributionControl: false,
    dragging: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    style: { height: "400px", width: "100%" },
  },
};

export const DefaultMarkers: Story = {
  args: {
    center: [51.505, -0.09],
    zoom: 13,
    style: { height: "400px", width: "100%" },
  },
  render: (args) => (
    <Map {...args}>
      <MapMarker position={[51.505, -0.09]} popupContent="Marker 1" />
      <MapMarker position={[51.51, -0.1]} popupContent="Marker 2" />
    </Map>
  ),
};

export const Polygon: Story = {
  args: {
    tileIndex: 1,
    style: { height: "400px", width: "100%" },
  },
  render: (args) => {
    const polygonPositions: L.LatLngExpression[] = [
      [52.4668, -1.8936],
      [52.4692, -1.8844],
      [52.4656, -1.8829],
    ];

    const bounds = L.latLngBounds(polygonPositions);

    return (
      <Map {...args} bounds={bounds}>
        <MapPolygon
          positions={polygonPositions}
          popupContent="Balti Triangle, Birmingham"
          fill="#ff6600"
        />
      </Map>
    );
  },
};

export const Line: Story = {
  args: {
    tileIndex: 1,
    style: { height: "400px", width: "100%" },
  },
  render: (args) => {
    const linePositions: L.LatLngExpression[] = [
      [51.5281, -0.1336], // London Euston
      [51.6637, -0.396], // Watford Junction
      [52.0346, -0.7748], // Milton Keynes Central
      [52.3704, -1.265], // Rugby
      [52.8056, -2.1164], // Stafford
      [53.089, -2.431], // Crewe
      [53.7632, -2.7031], // Preston
      [54.89, -2.9341], // Carlisle
      [55.859, -4.2576], // Glasgow Central Station
    ];

    const bounds = L.latLngBounds(linePositions);

    return (
      <Map {...args} bounds={bounds.pad(0.5)}>
        <MapCircle
          position={[51.5281, -0.1336]}
          radius={100}
          fill="blue"
          stroke={false}
          fillOpacity={1}
          popupContent="London Euston"
        />
        <MapCircle
          position={[55.859, -4.2576]}
          radius={100}
          fill="blue"
          stroke={false}
          fillOpacity={1}
          popupContent="Glasgow Central Station"
        />
        <MapLine
          positions={linePositions}
          popupContent="London Euston to Glasgow Central"
          color="blue"
          weight={3}
          dashArray="10, 5"
        />
      </Map>
    );
  },
};

const rectangle: L.LatLngExpression[] = [
  [51.49, -0.08],
  [51.5, -0.06],
];

const rectangleBounds = L.latLngBounds(rectangle);

export const Rectangle: Story = {
  args: {
    style: { height: "400px", width: "100%" },
  },
  render: (args) => (
    <Map {...args} bounds={rectangleBounds.pad(0.5)}>
      <MapRectangle bounds={rectangleBounds} popupContent="Popup in rectangle" />
    </Map>
  ),
};

const airports = [
  {
    name: "Heathrow Airport",
    iata: "LHR",
    latlon: [51.47002, -0.454295],
  },
  {
    name: "Gatwick Airport",
    iata: "LGW",
    latlon: [51.153662, -0.182057],
  },
  {
    name: "Stansted Airport",
    iata: "STN",
    latlon: [51.884013, 0.234953],
  },
  {
    name: "Luton Airport",
    iata: "LTN",
    latlon: [51.874724, -0.36803],
  },
  {
    name: "London City Airport",
    iata: "LCY",
    latlon: [51.50361, 0.055278],
  },
  {
    name: "Southend Airport",
    iata: "SEN",
    latlon: [51.571421, 0.695183],
  },
];

export const CustomMarkers: Story = {
  args: {
    tileIndex: 1,
    style: { height: "400px", width: "100%" },
  },
  parameters: {
    docs: {
      description: {
        story: `Use icons from [Icons8](https://icons8.com/icons/) for map markers.

1. Visit [Icons8](https://icons8.com/icons/) and select an icon.
2. Obtain the \`iconId\` or \`iconName\`.
3. Pass the \`iconId\` or \`iconName\` as a prop to create a custom marker.`,
      },
    },
  },
  render: (args) => {
    const bounds = L.latLngBounds(
      airports.map((airport) => [airport.latlon[0], airport.latlon[1]])
    );

    return (
      <Map {...args} bounds={bounds}>
        {airports.map((airport, index) => (
          <MapMarker
            key={index}
            position={[airport.latlon[0], airport.latlon[1]]}
            popupContent={`${airport.name} (${airport.iata})`}
            iconId="8771"
            iconSize={30}
            iconColor="F5BA06"
          />
        ))}
      </Map>
    );
  },
};

const handleDragEnd = (position: LatLngExpression) => {
  console.log("Story handleDragEnd", position);
};

export const DraggableMarker: Story = {
  args: {
    center: [51.505, -0.09],
    zoom: 13,
    style: { height: "400px", width: "100%" },
  },
  render: (args) => (
    <Map {...args}>
      <MapMarker
        position={[51.505, -0.09]}
        iconId="8200"
        iconSize={50}
        iconColor="000000"
        draggable
        onDragEnd={handleDragEnd}
      />
    </Map>
  ),
};

const cities = [
  {
    city: "Rome",
    population: 2873000,
    latlon: [41.9028, 12.4964],
  },
  {
    city: "Milan",
    population: 1378689,
    latlon: [45.4642, 9.19],
  },
  {
    city: "Naples",
    population: 967069,
    latlon: [40.8518, 14.2681],
  },
  {
    city: "Turin",
    population: 870952,
    latlon: [45.0703, 7.6869],
  },
  {
    city: "Palermo",
    population: 657561,
    latlon: [38.1157, 13.3615],
  },
  {
    city: "Genoa",
    population: 580097,
    latlon: [44.4056, 8.9463],
  },
  {
    city: "Bologna",
    population: 394463,
    latlon: [44.4949, 11.3426],
  },
  {
    city: "Florence",
    population: 372038,
    latlon: [43.7696, 11.2558],
  },
  {
    city: "Bari",
    population: 316491,
    latlon: [41.1171, 16.8719],
  },
  {
    city: "Catania",
    population: 290927,
    latlon: [37.5079, 15.083],
  },
];

function modifyRadius(x: number) {
  return x / 10 / 2;
}

const handleDblClick = (position: LatLngExpression) => {
  console.log("Story handleDblClick", position);
};

export const BubbleMarkers: Story = {
  args: {
    tileIndex: 1,
    style: { height: "400px", width: "100%" },
  },
  render: (args) => {
    const bounds = L.latLngBounds(cities.map((city) => [city.latlon[0], city.latlon[1]]));

    return (
      <Map {...args} bounds={bounds} onDblClick={handleDblClick}>
        {cities.map((city, index) => (
          <MapCircle
            key={index}
            position={[city.latlon[0], city.latlon[1]]}
            radius={modifyRadius(city.population)}
            fill="rgba(150,0,50, 0.8)"
            fillOpacity={0.5}
            stroke={false}
            popupContent={`${city.city} (${city.population.toLocaleString()})`}
          />
        ))}
      </Map>
    );
  },
};

function getColor(d: number) {
  return d > 1000
    ? "#800026"
    : d > 500
    ? "#BD0026"
    : d > 200
    ? "#E31A1C"
    : d > 100
    ? "#FC4E2A"
    : d > 50
    ? "#FD8D3C"
    : d > 20
    ? "#FEB24C"
    : d > 10
    ? "#FED976"
    : "#FFEDA0";
}

const addFillColorToGeoJSON = (geojson: any) => {
  const updatedGeoJSON = {
    ...geojson,
    features: geojson.features.map((feature: any) => ({
      ...feature,
      properties: {
        ...feature.properties,
        fillColor: getColor(feature.properties.density),
      },
    })),
  };

  return updatedGeoJSON;
};

const StatesWithFillColor = addFillColorToGeoJSON(States);

export const WithGeojson: Story = {
  name: "GeoJSON Layers",
  args: {
    center: [37.8, -96],
    zoom: 3,
    geojson: StatesWithFillColor,
    style: { height: "400px", width: "100%" },
  },
  argTypes: {
    geojson: {
      table: {
        disable: false,
      },
    },
  },
  render: (args) => <Map {...args} />,
};

export const CustomTiles: Story = {
  args: {
    center: [51.505, -0.09],
    zoom: 8,
    style: { height: "400px", width: "100%" },
    tileIndex: 5,
    customTiles: [
      {
        name: "CyclOSM ",
        url: "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
        maxZoom: 20,
        attribution:
          '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        subdomains: undefined,
      },
    ],
  },
  argTypes: {
    customTiles: {
      table: {
        disable: false,
      },
    },
  },
};
