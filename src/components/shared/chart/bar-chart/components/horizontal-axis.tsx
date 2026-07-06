import { XAxis } from "recharts";
import type { BarChartHorizontalAxisProps } from "../common-bar-chart.types";

export const BarChartHorizontalAxis = <TData extends Record<string, unknown>>({
  xAxisDataKey,
  tickLine,
  tickMargin,
  axisLine,
  tickFormatter,
  type,
}: BarChartHorizontalAxisProps<TData>) => {
  return (
    <XAxis
      dataKey={xAxisDataKey as string}
      tickLine={tickLine}
      tickMargin={tickMargin}
      axisLine={axisLine}
      tickFormatter={tickFormatter}
      type={type}
    />
  );
};