import type { ChartConfig } from "@/components/ui/chart";
import type { ChartIndicator } from "../types";

type AreaTypes =
  | "basis"
  | "basisClosed"
  | "basisOpen"
  | "bump"
  | "bumpX"
  | "bumpY"
  | "linear"
  | "linearClosed"
  | "monotone"
  | "monotoneX"
  | "monotoneY"
  | "natural"
  | "step"
  | "stepAfter"
  | "stepBefore";

export interface AreaConfig<TData extends Record<string, unknown>> {
  dataKey: keyof TData & string;
  type?: AreaTypes;
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
