"use client";

import React from "react";

import ChartWrap from "./ChartWrap";
import { DoughnutChartProps } from "./types";

const DoughnutChart = ({
  data,
  options,
  title,
  titleColor,
  titleFontSize,
  legendposition,
  legendColor,
  legendFontSize,
  border = false,
  aspect = "portrait",
  style,
  className,
}: DoughnutChartProps) => {
  return (
    <ChartWrap
      data={data}
      options={{
        ...(options as any),
        borderWidth: border ? 2 : 0,
      }}
      title={title}
      titleColor={titleColor}
      titleFontSize={titleFontSize}
      legendposition={legendposition}
      legendColor={legendColor}
      legendFontSize={legendFontSize}
      chartType="doughnut"
      aspect={aspect}
      className={className}
      style={style}
    />
  );
};

export default DoughnutChart;
