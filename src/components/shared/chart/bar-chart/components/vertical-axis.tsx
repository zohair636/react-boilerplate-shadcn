import { XAxis, YAxis } from "recharts";
import type { BarChartVerticalAxisProps } from "../common-bar-chart.types";

export const BarChartVerticalAxis = <TData extends Record<string, unknown>>({
  xAxisDataKey,
  yAxisDataKey,
  tickLine,
  tickMargin,
  axisLine,
  tickFormatter,
}: BarChartVerticalAxisProps<TData>) => {
  return (
    <>
      <XAxis dataKey={xAxisDataKey as string} type="number" hide />
      <YAxis
        dataKey={yAxisDataKey as string}
        type="category"
        tickLine={tickLine}
        tickMargin={tickMargin}
        axisLine={axisLine}
        tickFormatter={tickFormatter}
      />
    </>
  );
};
