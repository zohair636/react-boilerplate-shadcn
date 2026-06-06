import type { ChartConfig } from "@/components/ui/chart";
import type { ChartIndicator } from "../types";
import type { LabelListProps } from "recharts";

export interface CommonPieChartProps<TData extends Record<string, unknown>> {
  data: TData[];
  config: ChartConfig;
  indicator?: ChartIndicator;
  hideLabel?: boolean;
  cursor?: boolean;
  dataKey: keyof TData & string;
  nameKey?: keyof TData & string;
  label?: boolean;
  labelLine?: boolean;
  innerRadius?: number;
  stroke?: string;
  strokeWidth?: number;
  labelList?: {
    show: boolean;
    dataKey?: keyof TData & string;
    position?: LabelListProps["position"];
    stroke?: string;
    fontSize?: number;
    formatter?: (value: unknown) => string;
    className?: string;
  };
  chartLegend?: boolean;
  chartLegendNameKey?: keyof TData & string;
  chartLegendClassName?: string;
  className?: string;
}
