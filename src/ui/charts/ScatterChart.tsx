"use client";

import React from "react";
import ChartWrap from "./ChartWrap";
import { ScatterChartProps } from "./types";

const ScatterChart = ({
  data,
  options,
  title,
  titleColor,
  titleFontSize,
  legendposition,
  legendColor,
  legendFontSize,
  gridColor = "#a7a7a7",
  aspect = "portrait",
  style,
  className,
}: ScatterChartProps) => {
  return (
    <ChartWrap
      data={data}
      options={{
        ...options,
        scales: {
          x: {
            ...options?.scales?.x,
            title: {
              ...options?.scales?.x?.title,
              color: gridColor,
            },
            ticks: {
              ...options?.scales?.x?.ticks,
              color: gridColor,
            },
            grid: {
              ...options?.scales?.x?.grid,
              color: gridColor,
            },
          },
          y: {
            ...options?.scales?.y,
            title: {
              ...options?.scales?.y?.title,
              color: gridColor,
            },
            ticks: {
              ...options?.scales?.y?.ticks,
              color: gridColor,
            },
            grid: {
              ...options?.scales?.y?.grid,
              color: gridColor,
            },
          },
        },
      }}
      title={title}
      titleColor={titleColor}
      titleFontSize={titleFontSize}
      legendposition={legendposition}
      legendColor={legendColor}
      legendFontSize={legendFontSize}
      chartType="scatter"
      aspect={aspect}
      className={className}
      style={style}
    />
  );
};

export default ScatterChart;
