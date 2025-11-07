import { ChartData, ChartOptions } from "chart.js";

interface ChartComponentProps {
  title?: string;
  titleColor?: string;
  titleFontSize?: number;
  legendposition?: "top" | "bottom" | "left" | "right";
  legendColor?: string;
  legendFontSize?: number;
  aspect?: "landscape" | "portrait" | "square" | "auto";
  className?: string;
  style?: React.CSSProperties;
}

export interface LineChartProps extends ChartComponentProps {
  data: ChartData<"line", number[], string>;
  options?: ChartOptions<"line">;
  gridColor?: string;
}

export interface PieChartProps extends ChartComponentProps {
  data: ChartData<"pie", number[], string>;
  options?: ChartOptions<"pie">;
  border?: boolean;
}

export interface DoughnutChartProps extends ChartComponentProps {
  data: ChartData<"doughnut", number[], string>;
  options?: ChartOptions<"doughnut">;
  border?: boolean;
}

export interface BarChartProps extends ChartComponentProps {
  data: ChartData<"bar", number[], string>;
  options?: ChartOptions<"bar">;
  layout?: "vertical" | "horizontal";
  gridColor?: string;
}

export interface MixedChartProps extends ChartComponentProps {
  data: ChartData<"bar", number[], string>;
  options?: ChartOptions<"bar">;
  gridColor?: string;
}

export interface RadarChartProps extends ChartComponentProps {
  data: ChartData<"radar", number[], string>;
  options?: ChartOptions<"radar">;
  gridColor?: string;
}

export interface PolarAreaChartProps extends ChartComponentProps {
  data: ChartData<"polarArea", number[], string>;
  options?: ChartOptions<"polarArea">;
  gridColor?: string;
}

export interface BubbleChartProps extends ChartComponentProps {
  data: ChartData<"bubble", { x: number; y: number; r: number }[], string>;
  options?: ChartOptions<"bubble">;
  gridColor?: string;
}

export interface ScatterChartProps extends ChartComponentProps {
  data: ChartData<"scatter", { x: number; y: number }[], string>;
  options?: ChartOptions<"scatter">;
  gridColor?: string;
}

export type ChartTypes =
  | "bar"
  | "bubble"
  | "pie"
  | "doughnut"
  | "radar"
  | "polarArea"
  | "scatter"
  | "line"
  | "mixed";

export interface ChartDataMap {
  line: ChartData<"line">;
  pie: ChartData<"pie">;
  doughnut: ChartData<"doughnut">;
  bar: ChartData<"bar">;
  mixed: ChartData<"bar">;
  radar: ChartData<"radar">;
  polarArea: ChartData<"polarArea">;
  bubble: ChartData<"bubble">;
  scatter: ChartData<"scatter">;
}

export interface ChartOptionsMap {
  line: ChartOptions<"line">;
  pie: ChartOptions<"pie">;
  doughnut: ChartOptions<"doughnut">;
  bar: ChartOptions<"bar">;
  mixed: ChartOptions<"bar">;
  radar: ChartOptions<"radar">;
  polarArea: ChartOptions<"polarArea">;
  bubble: ChartOptions<"bubble">;
  scatter: ChartOptions<"scatter">;
}
