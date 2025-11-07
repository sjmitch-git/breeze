"use client";

import React from "react";

import ChartWrap from "./ChartWrap";
import { PolarAreaChartProps } from "./types";

const PolarAreaChart = ({
  data,
  options,
  title,
  titleColor,
  titleFontSize,
  legendposition,
  legendColor,
  legendFontSize,
  gridColor,
  aspect = "portrait",
  style,
  className,
}: PolarAreaChartProps) => {
  return (
    <ChartWrap
      data={data}
      options={{
        ...options,
        scales: {
          r: {
            ...(options?.scales?.r ?? {}),
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
      chartType="polarArea"
      aspect={aspect}
      className={className}
      style={style}
    />
  );
};

export default PolarAreaChart;
