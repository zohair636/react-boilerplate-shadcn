import type { ChartConfig } from "@/components/ui/chart";
import type { ChartIndicator } from "../types";
import type { DotProps } from "recharts";

export interface RadarConfig<TData extends Record<string, unknown>> {
  dataKey: keyof TData & string;
  fill?: string;
  fillOpacity?: number;
  stroke?: string;
  strokeWidth?: number;
  dot?: DotProps;
}

export interface CommonRadarChartProps<TData extends Record<string, unknown>> {
  data: TData[];
  config: ChartConfig;
  cursor?: boolean;
  hideLabel?: boolean;
  indicator?: ChartIndicator;
  hideIndicator?: boolean;
  angleAxisDataKey?: keyof TData & string;
  grid?: boolean;
  radialLines?: boolean;
  polarRadius?: number[];
  strokeWidth?: number;
  gridType?: "polygon" | "circle";
  radar: RadarConfig<TData>[];
  legend?: boolean;
  legendClassName?: string;
  className?: string;
}
