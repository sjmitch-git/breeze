"use client";

import React from "react";

import ChartWrap from "./ChartWrap";
import { RadarChartProps } from "./types";

const RadarChart = ({
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
}: RadarChartProps) => {
  return (
    <ChartWrap
      data={data}
      options={{
        ...options,
        scales: {
          r: {
            ...(options?.scales?.r ?? {}),
            pointLabels: {
              ...(options?.scales?.r?.pointLabels ?? {}),
              color: gridColor,
              font: {
                size: legendFontSize,
              },
            },
            ticks: {
              ...(options?.scales?.r?.ticks ?? {}),
              color: gridColor,
            },
            grid: {
              ...(options?.scales?.r?.grid ?? {}),
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
      chartType="radar"
      aspect={aspect}
      className={className}
      style={style}
    />
  );
};

export default RadarChart;
