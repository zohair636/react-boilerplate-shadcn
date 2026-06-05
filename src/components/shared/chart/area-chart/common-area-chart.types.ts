import type { ChartConfig } from "@/components/ui/chart";
import type { ChartIndicator, ChartTypes } from "../types";

export interface AreaConfig<TData extends Record<string, unknown>> {
  dataKey: keyof TData & string;
  type?: ChartTypes;
  fill?: string;
  fillOpacity?: number;
  stroke?: string;
  stackId?: string;
}

export interface CommonAreaChartProps<TData extends Record<string, unknown>> {
  data: TData[];
  config: ChartConfig;
  showVerticalGridLines?: boolean;
  area: AreaConfig<TData>[];
  indicator?: ChartIndicator;
  tickLine?: boolean;
  axisLine?: boolean;
  tickMargin?: number;
  tickCount?: number;
  xAxisTickFormatter?: (value: unknown) => string;
  yAxisTickFormatter?: (value: unknown) => string;
  xAxisDataKey?: keyof TData & string;
  hideLabel?: boolean;
  chartLegend?: boolean;
}
