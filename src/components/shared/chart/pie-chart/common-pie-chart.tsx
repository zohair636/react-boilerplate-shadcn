import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { CommonPieChartProps } from "./common-pie-chart.types";
import { LabelList, Pie, PieChart } from "recharts";

const CommonPieChart = <TData extends Record<string, unknown>>({
  data,
  config,
  indicator = "dot",
  hideLabel = true,
  cursor = false,
  dataKey,
  label = true,
  labelLine = false,
  nameKey,
  innerRadius,
  stroke,
  strokeWidth = 5,
  labelList,
  chartLegend = false,
  chartLegendNameKey,
  chartLegendClassName,
  className,
}: CommonPieChartProps<TData>) => {
  if (!data?.length) return null;
  return (
    <ChartContainer config={config} className={className}>
      <PieChart>
        <ChartTooltip
          cursor={cursor}
          content={
            <ChartTooltipContent hideLabel={hideLabel} indicator={indicator} />
          }
        />
        <Pie
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          label={label}
          labelLine={labelLine}
          innerRadius={innerRadius}
          stroke={stroke}
          strokeWidth={strokeWidth}
        >
          {labelList?.show && (
            <LabelList
              dataKey={labelList.dataKey}
              position={labelList.position}
              stroke={labelList.stroke ?? "white"}
              fontSize={labelList.fontSize ?? 12}
              formatter={labelList.formatter}
              className={labelList.className}
            />
          )}
        </Pie>
        {chartLegend && (
          <ChartLegend
            content={
              <ChartLegendContent
                nameKey={chartLegendNameKey}
                className={chartLegendClassName}
              />
            }
          />
        )}
      </PieChart>
    </ChartContainer>
  );
};

export default CommonPieChart;
