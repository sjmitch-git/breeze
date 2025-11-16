import React, { Suspense, useMemo } from "react";

import { twMerge } from "tailwind-merge";

const Bars = React.lazy(() => import("./spinners/Bars"));
const Clock = React.lazy(() => import("./spinners/Clock"));
const Dots = React.lazy(() => import("./spinners/Dots"));
const Pulse = React.lazy(() => import("./spinners/Pulse"));
const Spindots = React.lazy(() => import("./spinners/Spindots"));
const Wifi = React.lazy(() => import("./spinners/Wifi"));

import Spinner from "./spinners/Spinner";

const sizeToWidth = {
  sm: 20,
  md: 40,
  lg: 60,
  xl: 80,
};

const colors = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  danger: "text-error",
  primary: "text-primary",
  secondary: "text-secondary",
  current: "text-current",
};

const layouts = {
  col: "flex-col",
  col_reverse: "flex-col-reverse",
  row: "flex-row items-center",
  row_reverse: "flex-row-reverse items-center",
};

const animates = {
  spin: "animate-spin",
  bounce: "animate-bounce",
  pulse: "animate-pulse",
  ping: "animate-ping",
};

const getSpinnerComponent = (spinner: string) => {
  switch (spinner) {
    case "bars":
      return Bars;
    case "clock":
      return Clock;
    case "dots":
      return Dots;
    case "pulse":
      return Pulse;
    case "spindots":
      return Spindots;
    case "wifi":
      return Wifi;
    case "spinner":
    default:
      return Spinner;
  }
};

import { LoadingProps } from "./types";

const modalClasses = 'absolute inset-0 bg-black/50'

const Loading = ({
  className = "",
  caption = "",
  spinner = "spinner",
  customSpinner,
  customAnimate = "spin",
  size = "md",
  loadingColor = "current",
  layout = "col",
  modal = false
}: LoadingProps) => {
  const SpinnerIcon = useMemo(() => getSpinnerComponent(spinner), [spinner]);
  const width = useMemo(() => sizeToWidth[size], [size]);
  const colorClasses = useMemo(() => colors[loadingColor], [loadingColor]);
  const layoutClasses = useMemo(() => layouts[layout], [layout]);
  const animateClasses = useMemo(() => animates[customAnimate], [customAnimate]);

  return (
    <div
      className={twMerge(
        `loading flex justify-center items-center text-dark dark:text-light ${modal && modalClasses}`,
        className
      )}
    >
      <figure className={`figure flex items-center gap-4 ${colorClasses} ${layoutClasses}`}>
        {customSpinner ? (
          <div
            className="flex items-center justify-center"
            style={{
              fontSize: `${width}px`,
              width: `${width}px`,
              height: `${width}px`,
            }}
          >
            <div className={`flex items-center justify-center ${animateClasses}`}>
              {customSpinner}
            </div>
          </div>
        ) : (
          <Suspense fallback={<div className="text-center">...</div>}>
            <SpinnerIcon width={width} />
          </Suspense>
        )}
        {caption && (
          <figcaption className={`figcaption text-center ${colorClasses} text-${size}`}>
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
};

export default Loading;
