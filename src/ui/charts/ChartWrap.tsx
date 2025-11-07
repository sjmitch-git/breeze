import React, { useMemo, Suspense, lazy } from "react";
import { merge } from "../@utils/merge";
import { Chart as ChartJS, registerables } from "chart.js";
import { Spinner } from "../";
import { twMerge } from "tailwind-merge";
import { ChartDataMap, ChartOptionsMap } from "./types";

const LazyBubble = lazy(() =>
  import("react-chartjs-2").then((module) => ({ default: module.Bubble }))
);
const LazyLine = lazy(() => import("react-chartjs-2").then((module) => ({ default: module.Line })));
const LazyBar = lazy(() => import("react-chartjs-2").then((module) => ({ default: module.Bar })));
const LazyPie = lazy(() => import("react-chartjs-2").then((module) => ({ default: module.Pie })));
const LazyDoughnut = lazy(() =>
  import("react-chartjs-2").then((module) => ({ default: module.Doughnut }))
);
const LazyRadar = lazy(() =>
  import("react-chartjs-2").then((module) => ({ default: module.Radar }))
);
const LazyPolarArea = lazy(() =>
  import("react-chartjs-2").then((module) => ({ default: module.PolarArea }))
);
const LazyScatter = lazy(() =>
  import("react-chartjs-2").then((module) => ({ default: module.Scatter }))
);

ChartJS.register(...registerables);

type ChartTypes = keyof ChartDataMap;

interface ChartWrapProps<T extends ChartTypes> {
  title?: string;
  titleColor?: string;
  titleFontSize?: number;
  legendposition?: string;
  legendColor?: string;
  legendFontSize?: number;
  data: ChartDataMap[T];
  options?: ChartOptionsMap[T];
  chartType: T;
  className?: string;
  style?: React.CSSProperties;
  aspect?: "landscape" | "portrait" | "square" | "auto";
}

const aspects = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  auto: "aspect-auto",
};

const ChartWrap = <T extends ChartTypes>({
  data,
  options,
  title,
  titleColor = "#a7a7a7",
  titleFontSize = 18,
  legendposition,
  legendColor = "#a7a7a7",
  legendFontSize = 16,
  chartType,
  aspect = "auto",
  className,
  style,
}: ChartWrapProps<T>) => {
  const aspectClasses = useMemo(() => aspects[aspect], [aspect]);

  const defaultOptions = useMemo(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: legendposition,
          labels: {
            color: legendColor,
            font: {
              size: legendFontSize,
            },
          },
        },
        title: {
          display: !!title,
          text: title,
          color: titleColor,
          font: {
            size: titleFontSize,
          },
        },
      },
    };
  }, [legendposition, legendColor, legendFontSize, title, titleColor, titleFontSize]);

  const chartComponents: Record<ChartTypes, React.ElementType> = {
    bubble: LazyBubble,
    line: LazyLine,
    bar: LazyBar,
    pie: LazyPie,
    doughnut: LazyDoughnut,
    radar: LazyRadar,
    polarArea: LazyPolarArea,
    scatter: LazyScatter,
    mixed: LazyBar,
  };

  const ChartComponent = chartComponents[chartType] as React.ElementType;

  const combinedOptions = useMemo<ChartOptionsMap[T]>(() => {
    if (options) return merge(defaultOptions, options) as ChartOptionsMap[T];
    return defaultOptions as ChartOptionsMap[T];
  }, [defaultOptions, options]);
  console.log("combinedOptions", combinedOptions, defaultOptions, options);
  return (
    <figure className={twMerge(`chart-wrap h-auto min-w-full ${aspectClasses}`, className)}>
      <Suspense
        fallback={
          <div className={`w-full flex justify-center items-center text-info ${aspectClasses}`}>
            <Spinner />
          </div>
        }
      >
        <ChartComponent
          data={data}
          options={combinedOptions as unknown as any}
          title={title}
          legendposition={legendposition}
          style={style}
        />
      </Suspense>
    </figure>
  );
};

export default ChartWrap;
