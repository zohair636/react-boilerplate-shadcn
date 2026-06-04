import type { ChartConfig } from "@/components/ui/chart";
import type { LabelListProps } from "recharts";

export interface BarConfig<TData extends Record<string, unknown>> {
  dataKey: keyof TData & string;
  fill?: string;
  label?: string;
  radius?: number;
  showLabel?: boolean;
}

export interface CommonBarChartProps<TData extends Record<string, unknown>> {
  options: TData[];
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
  indicator?: "dashed" | "dot" | "line";
  position?: LabelListProps["position"];
  offset?: LabelListProps["offset"];
  fontSize?: LabelListProps["fontSize"];
  barLabelClassName?: string;
  chartLegend?: boolean;
}
