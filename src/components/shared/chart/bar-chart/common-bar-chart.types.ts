import type { ChartConfig } from "@/components/ui/chart";
import type { LabelListProps } from "recharts";
import type { ChartIndicator } from "../types";

export interface BarConfig<TData extends Record<string, unknown>> {
  dataKey: keyof TData & string;
  fill?: string;
  label?: {
    show?: boolean;
    position?: LabelListProps["position"];
    offset?: LabelListProps["offset"];
    fontSize?: LabelListProps["fontSize"];
    className?: string;
  };
  radius?: number;
}

export interface CommonBarChartProps<TData extends Record<string, unknown>> {
  data: TData[];
  config: ChartConfig;
  bars: BarConfig<TData>[];
  accessibilityLayer?: boolean;
  showVerticalGridLines?: boolean;
  cursor?: boolean;
  hideLabel?: boolean;
  tickLine?: boolean;
  axisLine?: boolean;
  tickMargin?: number;
  xAxisDataKey?: keyof TData & string;
  yAxisDataKey?: keyof TData & string;
  tickFormatter?: (value: unknown) => string;
  className?: string;
  type?: "auto" | "category" | "number";
  layout?: "horizontal" | "vertical";
  indicator?: ChartIndicator;
  chartLegend?: boolean;
}

export type BarChartHorizontalAxisProps<
  TData extends Record<string, unknown> = Record<string, unknown>,
> = Pick<
  CommonBarChartProps<TData>,
  | "xAxisDataKey"
  | "tickLine"
  | "tickMargin"
  | "axisLine"
  | "tickFormatter"
  | "type"
>;

export type BarChartVerticalAxisProps<
  TData extends Record<string, unknown> = Record<string, unknown>,
> = Pick<
  CommonBarChartProps<TData>,
  | "xAxisDataKey"
  | "yAxisDataKey"
  | "tickLine"
  | "tickMargin"
  | "axisLine"
  | "tickFormatter"
>;
