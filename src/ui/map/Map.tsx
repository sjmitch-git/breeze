"use client";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./LazyMap"), {
  ssr: false,
});

import { MapProps } from "./types";

const Map = ({ children, ...rest }: MapProps) => {
  return <DynamicMap {...rest}>{children}</DynamicMap>;
};

export default Map;
