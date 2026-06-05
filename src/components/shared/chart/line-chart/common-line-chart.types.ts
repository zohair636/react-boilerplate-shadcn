import type { ChartConfig } from "@/components/ui/chart";
import type { ChartIndicator, ChartTypes } from "../types";
import type { ActiveDotProps, DotProps, LabelListProps } from "recharts";

export interface LineConfig<TData extends Record<string, unknown>> {
  dataKey: keyof TData & string;
  label?: {
    show?: boolean;
    position?: LabelListProps["position"];
    offset?: LabelListProps["offset"];
    fontSize?: LabelListProps["fontSize"];
    className?: string;
  };
  type?: ChartTypes;
  stroke?: string;
  strokeWidth?: number;
  dot?: boolean | DotProps;
  activeDot?: boolean | ActiveDotProps;
}

export interface CommonLineChartProps<TData extends Record<string, unknown>> {
  data: TData[];
  config: ChartConfig;
  line: LineConfig<TData>[];
  xAxisDataKey?: keyof TData & string;
  tickLine?: boolean;
  axisLine?: boolean;
  tickMargin?: number;
  tickFormatter?: (value: unknown) => string;
  cursor?: boolean;
  showVerticalGridLines?: boolean;
  hideLabel?: boolean;
  indicator?: ChartIndicator;
  className?: string;
}
