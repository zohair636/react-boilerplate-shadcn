import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
import type { CommonBarChartProps } from "./common-bar-chart.types";

const CommonBarChart = <TData extends Record<string, unknown>>({
  data,
  config,
  bars,
  accessibilityLayer = true,
  showVerticalGridLines = false,
  cursor = false,
  hideLabel = true,
  tickLine = false,
  axisLine = false,
  tickMargin = 10,
  xAxisDataKey = "month",
  yAxisDataKey = "month",
  tickFormatter,
  className,
  type = "category",
  layout = "horizontal",
  indicator = "dashed",
  chartLegend = false,
}: CommonBarChartProps<TData>) => {
  if (!data?.length || !bars?.length) return null;

  const renderAxis = () => {
    if (layout === "horizontal") {
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
    }
    if (layout === "vertical") {
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
    }
  };
  return (
    <ChartContainer config={config} className={className}>
      <BarChart
        accessibilityLayer={accessibilityLayer}
        data={data}
        layout={layout}
      >
        <CartesianGrid vertical={showVerticalGridLines} />
        {renderAxis()}
        <ChartTooltip
          cursor={cursor}
          content={
            <ChartTooltipContent indicator={indicator} hideLabel={hideLabel} />
          }
        />
        {bars.map((bar) => (
          <Bar
            key={bar.dataKey}
            dataKey={bar.dataKey as string}
            fill={bar.fill ?? `var(--color-${bar.dataKey})`}
            radius={bar.radius}
          >
            {bar.label?.show && (
              <LabelList
                dataKey={bar.dataKey}
                position={bar.label?.position ?? 'top'}
                offset={bar.label?.offset}
                fontSize={bar.label?.fontSize}
                className={bar.label?.className}
              />
            )}
          </Bar>
        ))}
        {chartLegend && <ChartLegend content={<ChartLegendContent />} />}
      </BarChart>
    </ChartContainer>
  );
};

export default CommonBarChart;
