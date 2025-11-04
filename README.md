# Breeze UI

A Next.js/React UI component library.

- [Breeze UI](#breeze-ui)
  - [Overview](#overview)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [1. Install Next.js and React](#1-install-nextjs-and-react)
    - [2. Configure Tailwind 3](#2-configure-tailwind-3)
      - [2. Configure `tailwind.config.js`](#2-configure-tailwindconfigjs)
  - [Installation](#installation)
  - [Compatibility](#compatibility)
    - [Supported stacks \& compatibility matrix](#supported-stacks--compatibility-matrix)
    - [Node / environment](#node--environment)
    - [Troubleshooting](#troubleshooting)
  - [Peer dependencies](#peer-dependencies)
  - [Basic Usage](#basic-usage)
  - [Charts Usage](#charts-usage)
    - [Chart Usage Example](#chart-usage-example)
  - [Map Usage](#map-usage)
    - [Map Usage Examples](#map-usage-examples)
      - [Static Map](#static-map)
      - [Map with marker](#map-with-marker)
  - [Components](#components)
    - [Buttons](#buttons)
    - [Inputs](#inputs)
    - [Forms](#forms)
    - [Menus](#menus)
    - [Feedback](#feedback)
    - [Media](#media)
    - [Typography](#typography)
    - [Data Visualization](#data-visualization)
    - [Time](#time)
    - [Maps](#maps)
    - [Social Media](#social-media)
  - [Author](#author)

## Overview

Breeze UI is a comprehensive library of reusable UI components for Next.js/React applications. This
library is designed to streamline the development process and ensure consistency across projects.

## Features

- Reusable UI components
- Charts
- Maps
- Built with React 19, Next.js 15 and TailwindCSS 3

## Getting Started

To use Breeze UI in your Next.js/React project, follow these steps:

### 1. Install Next.js and React

If you haven't set up your Next.js project yet, start by initializing it:

```bash
npx create-next-app@latest
```

When prompted:

- **Use TypeScript?**: Select **Yes** to enable TypeScript in your project.
- **Use TailwindCSS?**: Select **Yes** to install and configure TailwindCSS automatically.

Next.js will then generate the necessary configuration for both **TypeScript** and **TailwindCSS**,
including `tsconfig.json`, `tailwind.config.js`, and PostCSS setup.

### 2. Configure Tailwind 3

To ensure that **Breeze UI** works correctly, you need to configure **TailwindCSS**. Follow the
steps below:

Note: All current Breeze releases utilize TailwindCSS v3.

#### 2. Configure `tailwind.config.js`

Update your `tailwind.config.js` file to match the configuration below:

```js
import type { Config } from "tailwindcss";
/* Import colors if using Tailwind's color palette */
import colors from "tailwindcss/colors";

const config: Config = {
  /* The selector strategy replaced the class strategy in Tailwind CSS v3.4.1.*/
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    /* IMPORTANT: Add this line: */
    "./node_modules/@smitch/Breeze/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        /* Modify color values as desired to suit your theme */
        primary: {
          DEFAULT: colors.indigo[600],
          light: colors.indigo[300],
          dark: colors.indigo[900],
        },
        secondary: {
          DEFAULT: colors.gray[600],
          light: colors.gray[300],
          dark: colors.gray[900],
        },
        accent: {
          DEFAULT: colors.orange[500],
          light: colors.orange[300],
          dark: colors.orange[700],
        },
        neutral: colors.gray[400],
        dark: colors.gray[900],
        light: colors.gray[100],
        info: {
          DEFAULT: colors.sky[400],
          light: colors.sky[200],
          dark: colors.sky[600],
        },
        success: {
          DEFAULT: colors.green[600],
          light: colors.green[400],
          dark: colors.green[800],
        },
        warning: {
          DEFAULT: colors.amber[500],
          light: colors.amber[300],
          dark: colors.amber[700],
        },
        error: {
          DEFAULT: colors.red[600],
          light: colors.red[400],
          dark: colors.red[800],
        },
        danger: {
          DEFAULT: colors.red[600],
          light: colors.red[400],
          dark: colors.red[800],
        },
        current: "currentColor",
        transparent: "transparent",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/typography"),
  ],
};
export default config;
```

## Installation

```bash
npm install @smitch/breeze
```

## Compatibility

### Supported stacks & compatibility matrix

Use the table below to pick the Breeze major line that matches your app's React / Next.js and
Tailwind versions. This helps avoid peer dependency conflicts.

- Breeze v4.x (current):

  - React: 19.x
  - Next.js: 15.x
  - Tailwind: 3.x
  - Install: `npm install @smitch/breeze`

- Breeze v3.x:
  - React: 18.x
  - Next.js: 14.x (and other releases built on React 18)
  - Tailwind: 3.x
  - Install: `npm install @smitch/Breeze@^3`

### Node / environment

- Recommended Node: use an LTS release (Node 18/20+ recommended depending on your Next version).

### Troubleshooting

- If a feature (charts, maps) fails because a peer package is missing, install the optional peers
  indicated in the Peer dependencies section (e.g., `chart.js`, `react-chartjs-2`, `leaflet`).

## Peer dependencies

Breeze is a component library and expects the host app to provide framework/runtime dependencies.
Below are the packages you should have installed in your project when using `@smitch/Breeze`.

Required (framework)

```bash
npm install react react-dom next
```

Optional (feature-specific — install only if you use the feature)

Charts (optional)

If you use the chart components, install the Chart.js runtime and the React wrapper:

```bash
npm install chart.js react-chartjs-2
```

Maps (optional — Leaflet)

If you use the map components, install Leaflet and React Leaflet:

```bash
npm install leaflet react-leaflet
```

TypeScript notes:

- For some setups you may want `@types/leaflet` (install if your build complains about Leaflet
  types):

```bash
npm install -D @types/leaflet
```

## Basic Usage

Now, you can import and use any Breeze UI [component](#components) in your Next.js project:

```jsx
import { Button } from "@smitch/Breeze";

const App = () => <Button>Click me</Button>;

export default App;
```

## Charts Usage

Charts available include:

- BarChart
- BubbleChart
- LineChart
- PieChart
- DoughnutChart
- ScatterChart
- RadarChart
- PolarAreaChart
- MixedChart

Charts require Chart.js and the React wrapper:

```bash
npm install chart.js react-chartjs-2
```

### Chart Usage Example

```jsx
import { BarChart } from "@smitch/Breeze/charts";

const App = () => {
  return (
    <BarChart
        data={{
            datasets: [
                {
                    label: 'Min Temperature (°C)',
                    data: [12, 15, 10, 8, 14],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderWidth: 0,
                },
                {
                    label: 'Max Temperature (°C)',
                    data: [22, 25, 20, 18, 24],
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    borderWidth: 0,
                },
                ...
            ],
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        }}
      title = 'Weekly Temperature Ranges',
      legendposition = 'bottom',
    />
  )
};

export default App;
```

## Map Usage

Map options include:

- MapMarker
- MapCircle
- MapPolygon
- MapLine
- MapRectangle

Install Leaflet and React Leaflet (and leaflet.fullscreen if fullscreen control required):

```bash
npm install leaflet react-leaflet leaflet.fullscreen
```

```bash
npm install -D @types/leaflet @types/leaflet.fullscreen
```

### Map Usage Examples

#### Static Map

```jsx
import { Map } from "@smitch/Breeze/map";

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
```

#### Map with marker

```jsx
import { Map, MapMarker } from "@smitch/Breeze/map";

const App = () => {
  return (
    <Map
      attributionControl
      center={[51.505, -0.09]}
      fullscreenControl
      fullscreenControlPosition="topleft"
      style={{
        height: "400px",
        width: "100%",
      }}
      tilesControl
      zoom={13}
      zoomControl
    >
      <MapMarker popupContent="Marker 1" position={[51.505, -0.09]} />
      <MapMarker position={[51.51, -0.1]} />
    </Map>
  );
};

export default App;
```

## Components

### Buttons

- <a href='https://breezeui.site/?path=/docs/buttons-button--docs'>Button</a>
- <a href='https://breezeui.site/?path=/docs/buttons-button-close-button--docs'>Close Button</a>
- <a href='https://breezeui.site/?path=/docs/buttons-button-group--docs'>Button Group</a>

### Inputs

- <a href='https://breezeui.site/?path=/docs/inputs-autocomplete--docs'>
  	Autocomplete
  </a>
- <a href='https://breezeui.site/?path=/docs/inputs-checkbox--docs'>Checkbox</a>
- <a href='https://breezeui.site/?path=/docs/inputs-counter--docs'>Counter</a>
- <a href='https://breezeui.site/?path=/docs/inputs-file-upload--docs'>File Upload</a>
- <a href='https://breezeui.site/?path=/docs/inputs-input--docs'>Input</a>
- <a href='https://breezeui.site/?path=/docs/inputs-password-input--docs'>Password Input</a>
- <a href='https://breezeui.site/?path=/docs/inputs-radiog-roup--docs'>Radio Group</a>
- <a href='https://breezeui.site/?path=/docs/inputs-range-input--docs'>Range Input</a>
- <a href='https://breezeui.site/?path=/docs/inputs-search-input--docs'>Search Input</a>
- <a href='https://breezeui.site/?path=/docs/inputs-select--docs'>Select</a>
- <a href='https://breezeui.site/?path=/docs/inputs-switch--docs'>Switch</a>
- <a href='https://breezeui.site/?path=/docs/inputs-textarea--docs'>Textarea</a>
- <a href='https://breezeui.site/?path=/docs/inputs-text-input--docs'>Text Input</a>

### Forms

- <a href='https://breezeui.site/?path=/docs/forms-fieldset--docs'>Fieldset</a>
- <a href='https://breezeui.site/?path=/docs/forms-form--docs'>Form</a>
- <a href='https://breezeui.site/?path=/docs/forms-label--docs'>Label</a>

### Menus

- <a href='https://breezeui.site/?path=/docs/menus-accordion--docs'>Accordion</a>
- <a href='https://breezeui.site/?path=/docs/menus-breadcrumbs--docs'>Breadcrumbs</a>
- <a href='https://breezeui.site/?path=/docs/menus-carousel--docs'>Carousel</a>
- <a href='https://breezeui.site/?path=/docs/menus-drawer--docs'>Drawer</a>
- <a href='https://breezeui.site/?path=/docs/menus-dropdown--docs'>Dropdown</a>
- <a href='https://breezeui.site/?path=/docs/menus-navbar--docs'>NavBar</a>
- <a href='https://breezeui.site/?path=/docs/menus-pagination--docs'>Pagination</a>
- <a href='https://breezeui.site/?path=/docs/menus-sidebar--docs'>Sidebar</a>
- <a href='https://breezeui.site/?path=/docs/menus-tabs--docs'>Tabs</a>

### Feedback

- <a href='https://breezeui.site/?path=/docs/feedback-alert--docs'>Alert</a>
- <a href='https://breezeui.site/?path=/docs/feedback-badge--docs'>Badge</a>
- <a href='https://breezeui.site/?path=/docs/feedback-dialog--docs'>Dialog</a>
- <a href='https://breezeui.site/?path=/docs/feedback-loading--docs'>Loading</a>
- <a href='https://breezeui.site/?path=/docs/feedback-progress--docs'>Progress</a>
- <a href='https://breezeui.site/?path=/docs/feedback-ratings--docs'>Ratings</a>
- <a href='https://breezeui.site/?path=/docs/feedback-ticker--docs'>Ticker</a>
- <a href='https://breezeui.site/?path=/docs/feedback-toast--docs'>Toast</a>

### Media

- <a href='https://breezeui.site/?path=/docs/media-card--docs'>Card</a>
- <a href='https://breezeui.site/?path=/docs/media-figure--docs'>Figure</a>
- <a href='https://breezeui.site/?path=/docs/media-gallery--docs'>Gallery</a>
- <a href='https://breezeui.site/?path=/docs/media-hero--docs'>Hero</a>
- <a href='https://breezeui.site/?path=/docs/media-icon--docs'>Icon</a>
- <a href='https://breezeui.site/?path=/docs/media-modal--docs'>Modal</a>
- <a href='https://breezeui.site/?path=/docs/media-placeholder--docs'>PlaceHolder</a>
- <a href='https://breezeui.site/?path=/docs/media-twitter-embed--docs'>Twitter Embed</a>
- <a href='https://breezeui.site/?path=/docs/media-twitter-embed--docs'>Twitter Timeline</a>
- <a href='https://breezeui.site/?path=/docs/media-video--docs'>Video</a>
- <a href='https://breezeui.site/?path=/docs/media-video-player--docs'>Video Player</a>
- <a href='https://breezeui.site/?path=/docs/media-youtube-embed--docs'>YouTube Embed</a>

### Typography

- <a href='https://breezeui.site/?path=/docs/typography-blockquote--docs'>Blockquote</a>
- <a href='https://breezeui.site/?path=/docs/typography-codeblock--docs'>Codeblock</a>
- <a href='https://breezeui.site/?path=/docs/typography-heading--docs'>Heading</a>

### Data Visualization

- <a href='https://breezeui.site/?path=/docs/data-visualization-data-table--docs'>Data Table</a>
- <a href='https://breezeui.site/?path=/docs/data-visualization-pictogram--docs'>Pictogram</a>
- <a href='https://breezeui.site/?path=/docs/data-visualization-line-chart--docs'>Line Chart</a>
- <a href='https://breezeui.site/?path=/docs/data-visualization-bar-chart--docs'>Bar Chart</a>
- <a href='https://breezeui.site/?path=/docs/data-visualization-mixed-chart--docs'>Mixed Chart</a>
- <a href='https://breezeui.site/?path=/docs/data-visualization-pie-chart--docs'>Pie Chart</a>
- <a href='https://breezeui.site/?path=/docs/data-visualization-doughnut-chart--docs'>Doughnut
  Chart</a>
- <a href='https://breezeui.site/?path=/docs/data-visualization-radar-chart--docs'>Radar Chart</a>
- <a href='https://breezeui.site/?path=/docs/data-visualization-polar-area-chart--docs'>PolarArea
  Chart</a>
- <a href='https://breezeui.site/?path=/docs/data-visualization-scatter-chart--docs'>Scatter
  Chart</a>
- <a href='https://breezeui.site/?path=/docs/data-visualization-stat-bar--docs'>Stat Bar</a>

### Time

- <a href='https://breezeui.site/?path=/docs/time-clock--docs'>Clock</a>

### Maps

- <a href='https://breezeui.site/?path=/docs/maps-map--docs'>Map</a>

### Social Media

- <a href='https://breezeui.site/?path=/docs/social-socialshare--docs'>Social Media Share</a>

## Author

Breeze UI is developed and maintained by
[Stephen Mitchell](https://www.linkedin.com/in/stephen-m-52a3a4192).
