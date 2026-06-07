import type { ChartConfig } from "@/components/ui/chart";
import type { ChartIndicator } from "../types";
import type { LabelListProps } from "recharts";

export interface RadialBarConfig<TData extends Record<string, unknown>> {
  dataKey: keyof TData & string;
  label?: {
    dataKey?: keyof TData & string;
    position?: LabelListProps["position"];
    fontSize?: LabelListProps["fontSize"];
    className?: string;
  };
}

export interface CommonRadialChartProps<TData extends Record<string, unknown>> {
  data: TData[];
  config: ChartConfig;
  innerRadius?: number;
  outerRadius?: number;
  cursor?: boolean;
  hideLabel?: boolean;
  nameKey?: string;
  indicator?: ChartIndicator;
  grid?: boolean;
  radialBar: RadialBarConfig<TData>[];
  className?: string;
}
