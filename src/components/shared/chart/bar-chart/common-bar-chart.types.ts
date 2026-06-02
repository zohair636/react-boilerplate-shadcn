import type { LabelListProps } from "recharts";

export interface CommonBarChartProps {
  title?: string;
  description?: string;
  data: { month: string; desktop: number }[];
  accessibilityLayer?: boolean;
  vertical?: boolean;
  cursor?: boolean;
  hideLabel?: boolean;
  tickLine?: boolean;
  axisLine?: boolean;
  tickMargin?: number;
  xAxisDataKey?: string;
  yAxisDataKey?: string;
  barDataKey?: string;
  tickFormatter?: (value: string) => string;
  radius?: number;
  className?: string;
  fill?: string;
  type?: "auto" | "category" | "number";
  layout?: "horizontal" | "vertical";
  indicator?: "dashed" | "dot" | "line";
  showBarLabel?: boolean;
  position?: LabelListProps["position"];
  offset?: LabelListProps["offset"];
  fontSize?: LabelListProps["fontSize"];
  barLabelClassName?: string;
}
