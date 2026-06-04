import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { CommonAreaChartProps } from "./common-area-chart.types";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const CommonAreaChart = <TData extends Record<string, unknown>>({
  data,
  config,
  showVerticalGridLines = false,
  area,
  indicator = "line",
  tickLine = false,
  axisLine = false,
  tickMargin = 8,
  tickCount = 3,
  xAxisTickFormatter,
  yAxisTickFormatter,
  xAxisDataKey,
  hideLabel = false,
  chartLegend = true,
}: CommonAreaChartProps<TData>) => {
  if (!data?.length || !area?.length) return null;
  return (
    <ChartContainer config={config}>
      <AreaChart accessibilityLayer data={data}>
        <CartesianGrid vertical={showVerticalGridLines} />
        <XAxis
          dataKey={xAxisDataKey as string}
          tickLine={tickLine}
          axisLine={axisLine}
          tickMargin={tickMargin}
          tickFormatter={xAxisTickFormatter}
        />
        <YAxis
          tickLine={tickLine}
          axisLine={axisLine}
          tickMargin={tickMargin}
          tickCount={tickCount}
          tickFormatter={yAxisTickFormatter}
        />
        <ChartTooltip
          cursor
          content={
            <ChartTooltipContent indicator={indicator} hideLabel={hideLabel} />
          }
        />
        {area.map((a) => (
          <Area
            key={a.dataKey}
            dataKey={a.dataKey as string}
            name={a.dataKey as string}
            type={a.type ?? "natural"}
            fill={a.fill}
            fillOpacity={a.fillOpacity}
            stroke={a.stroke}
            stackId={a.stackId}
          />
        ))}
        {chartLegend && <ChartLegend content={<ChartLegendContent />} />}
      </AreaChart>
    </ChartContainer>
  );
};

export default CommonAreaChart;
