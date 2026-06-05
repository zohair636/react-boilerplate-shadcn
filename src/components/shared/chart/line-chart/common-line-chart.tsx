import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";
import type { CommonLineChartProps } from "./common-line-chart.types";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const CommonLineChart = <TData extends Record<string, unknown>>({
  data,
  config,
  line,
  axisLine = false,
  cursor = false,
  showVerticalGridLines = false,
  tickFormatter,
  tickLine = false,
  tickMargin = 8,
  xAxisDataKey,
  hideLabel = true,
  indicator = "line",
  className,
}: CommonLineChartProps<TData>) => {
  if (!data?.length || !line?.length) return null;
  return (
    <ChartContainer config={config} className={className}>
      <LineChart accessibilityLayer data={data}>
        <CartesianGrid vertical={showVerticalGridLines} />
        <XAxis
          dataKey={xAxisDataKey as string}
          tickLine={tickLine}
          axisLine={axisLine}
          tickMargin={tickMargin}
          tickFormatter={tickFormatter}
        />
        <ChartTooltip
          cursor={cursor}
          content={
            <ChartTooltipContent indicator={indicator} hideLabel={hideLabel} />
          }
        />
        {line.map((l) => (
          <Line
            key={l.dataKey}
            dataKey={l.dataKey}
            type={l.type ?? "natural"}
            stroke={l.stroke}
            strokeWidth={l.strokeWidth}
            dot={l.dot}
            activeDot={l.activeDot}
          >
            {l.label?.show && (
              <LabelList
                dataKey={l.dataKey}
                position={l.label.position}
                offset={l.label.offset}
                fontSize={l.label.fontSize}
                className={l.label.className}
              />
            )}
          </Line>
        ))}
      </LineChart>
    </ChartContainer>
  );
};

export default CommonLineChart;
