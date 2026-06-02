import { CommonCard } from "../../card";
import {
  ChartContainer,
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
import { chartConfig } from "./common-bar-chart.config";
import type { CommonBarChartProps } from "./common-bar-chart.types";

const CommonBarChart = ({
  title,
  description,
  data,
  accessibilityLayer = true,
  vertical = false,
  cursor = false,
  hideLabel = true,
  tickLine = false,
  axisLine = false,
  tickMargin = 10,
  xAxisDataKey = "month",
  yAxisDataKey = "month",
  barDataKey = "desktop",
  tickFormatter,
  radius = 8,
  className,
  fill = "var(--color-desktop)",
  type = "category",
  layout = "horizontal",
  indicator = "dashed",
  showBarLabel,
  position = "top",
  offset,
  fontSize = 12,
  barLabelClassName,
}: CommonBarChartProps) => {
  if (!data?.length) return null;

  const renderAxis = () => {
    if (layout === "horizontal") {
      return (
        <XAxis
          dataKey={xAxisDataKey}
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
          <XAxis dataKey="desktop" type="number" hide />
          <YAxis
            dataKey={yAxisDataKey}
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
    <CommonCard title={title ?? ""} description={description}>
      <ChartContainer config={chartConfig} className={className}>
        <BarChart
          accessibilityLayer={accessibilityLayer}
          data={data}
          layout={layout}
        >
          <CartesianGrid vertical={vertical} />
          {renderAxis()}
          <ChartTooltip
            cursor={cursor}
            content={
              <ChartTooltipContent
                indicator={indicator}
                hideLabel={hideLabel}
              />
            }
          />
          <Bar dataKey={barDataKey} fill={fill} radius={radius}>
            {showBarLabel && (
              <LabelList
                position={position}
                offset={offset}
                fontSize={fontSize}
                className={barLabelClassName}
              />
            )}
          </Bar>
        </BarChart>
      </ChartContainer>
    </CommonCard>
  );
};

export default CommonBarChart;
