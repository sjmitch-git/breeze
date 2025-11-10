# Breeze UI

[![npm version](https://img.shields.io/npm/v/@smitch/breeze?color=cb0000&logo=npm)](https://www.npmjs.com/package/@smitch/breeze)
[![npm downloads](https://img.shields.io/npm/dm/@smitch/breeze?color=success)](https://www.npmjs.com/package/@smitch/breeze)

A Next.js/React UI component library built with React 19, Next.js 15, and Tailwind CSS 3.

Live demo: [https://breezeui.site](https://breezeui.site)

- [Breeze UI](#breeze-ui)
  - [Overview](#overview)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [1. Installation](#1-installation)
    - [2. Configure Tailwind 3](#2-configure-tailwind-3)
      - [1. Generate Tailwind Config Files](#1-generate-tailwind-config-files)
      - [2. Configure `tailwind.config.js`](#2-configure-tailwindconfigjs)
      - [3. Add Tailwind Directives to CSS](#3-add-tailwind-directives-to-css)
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
    - [DateTime](#datetime)
    - [Maps](#maps)
    - [Social Media](#social-media)
  - [Author](#author)

## Overview

Breeze UI is a comprehensive library of reusable UI components for Next.js/React applications. This
library is designed to streamline the development process and ensure consistency across projects.

## Features

- Reusable UI components
- Charts (Bar, Line, Pie, etc.)
- Maps (Markers, Polygons, etc.)
- Built with React 19, Next.js 15, and Tailwind CSS 3
- Dark mode support via Tailwind's `selector` strategy

## Getting Started

To use Breeze UI in your Next.js/React project, follow these steps. Note: Tailwind CSS 3 is a peer
dependency—install it if not already present (`npm install -D tailwindcss postcss autoprefixer`).

### 1. Installation

```bash
npm install @smitch/breeze
```

### 2. Configure Tailwind 3

To ensure Breeze UI works correctly, configure Tailwind CSS v3. All releases use v3.x.

### 1. Generate Tailwind Config Files

```js
npx tailwindcss init -p
```

This creates `tailwind.config.js` and `postcss.config.js` (pre-filled with Tailwind + Autoprefixer).

### 2. Configure `tailwind.config.js`

Update your `tailwind.config.js` to include Breeze's content path and theme.

```js
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  /* The selector strategy replaced the class strategy in Tailwind CSS v3.4.1.*/
  darkMode: "selector",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    /* IMPORTANT: Add this line: */
    "./node_modules/@smitch/breeze/**/*.js",
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
  ],
};
export default config;
```

### 3. Add Tailwind Directives to CSS

Add to your global CSS file (e.g., `globals.css` in App Router):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Basic Usage

Import and use [components](#components):

```jsx
import { Button } from "@smitch/breeze";

const App = () => <Button>Click me</Button>;

export default App;
```

For charts/maps, see below.

## Charts Usage

Charts include: BarChart, BubbleChart, LineChart, PieChart, DoughnutChart, ScatterChart, RadarChart,
PolarAreaChart, MixedChart.

Install deps:

```bash
npm install chart.js react-chartjs-2
```

### Chart Usage Example

```jsx
import { BarChart } from "@smitch/breeze/charts";

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
                }
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

Map components: MapMarker, MapCircle, MapPolygon, MapLine, MapRectangle.

Install deps:

```bash
npm install leaflet react-leaflet leaflet.fullscreen
```

```bash
npm install -D @types/leaflet @types/leaflet.fullscreen
```

### Map Usage Examples

#### Static Map

```jsx
import { Map } from "@smitch/breeze/map";

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
import { Map, MapMarker } from "@smitch/breeze/map";

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
- <a href='https://breezeui.site/?path=/docs/inputs-radio-group--docs'>Radio Group</a>
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
- <a href='https://breezeui.site/?path=/docs/media-image-placeholder--docs'>Image PlaceHolder</a>
- <a href='https://breezeui.site/?path=/docs/media-x-embed--docs'>X Embed</a>
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

### DateTime

- <a href='https://breezeui.site/?path=/docs/datetime-clock--docs'>Clock</a>

### Maps

- <a href='https://breezeui.site/?path=/docs/maps-map--docs'>Map</a>

### Social Media

- <a href='https://breezeui.site/?path=/docs/social-socialshare--docs'>Social Media Share</a>

## Author

Breeze UI is developed and maintained by
[Stephen Mitchell](https://www.linkedin.com/in/stephen-m-52a3a4192).
