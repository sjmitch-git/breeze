"use client";

import React from "react";

import ChartWrap from "./ChartWrap";
import { BarChartProps } from "./types";

const BarChart = ({
  data,
  options,
  title,
  titleColor,
  titleFontSize,
  legendposition,
  legendColor,
  legendFontSize,
  aspect = "portrait",
  style,
  className,
  layout,
  gridColor,
}: BarChartProps) => {
  return (
    <ChartWrap
      data={data}
      options={{
        ...options,
        indexAxis: layout === "horizontal" ? "y" : "x",
        scales: {
          x: {
            ...options?.scales?.x,
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
      chartType="bar"
      aspect={aspect}
      className={className}
      style={style}
    />
  );
};

export default BarChart;
