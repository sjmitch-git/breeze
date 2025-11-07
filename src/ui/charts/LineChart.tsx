"use client";

import React from "react";

import ChartWrap from "./ChartWrap";
import { LineChartProps } from "./types";

const LineChart = ({
  data,
  options,
  title,
  titleColor,
  titleFontSize,
  legendposition,
  legendColor,
  legendFontSize,
  gridColor,
  aspect = "square",
  style,
  className,
}: LineChartProps) => {
  return (
    <ChartWrap
      data={data}
      options={{
        ...options,
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
      chartType="line"
      aspect={aspect}
      className={className}
      style={style}
    />
  );
};

export default LineChart;
