import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LabelList, PolarGrid, RadialBar, RadialBarChart } from "recharts";
import type { CommonRadialChartProps } from "./common-radial-chart.types";
import { cn } from "@/lib/utils";

const CommonRadialChart = <TData extends Record<string, unknown>>({
  data,
  config,
  innerRadius = 30,
  outerRadius = 110,
  cursor = false,
  hideLabel = true,
  nameKey,
  indicator = "dot",
  grid = false,
  radialBar,
  className,
}: CommonRadialChartProps<TData>) => {
  if (!data?.length || !radialBar?.length) return null;
  return (
    <ChartContainer config={config} className={className}>
      <RadialBarChart
        data={data}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
      >
        <ChartTooltip
          cursor={cursor}
          content={
            <ChartTooltipContent
              hideLabel={hideLabel}
              nameKey={nameKey}
              indicator={indicator}
            />
          }
        />
        {grid && <PolarGrid />}
        {radialBar.map((radial) => (
          <RadialBar
            key={radial.dataKey}
            dataKey={radial.dataKey as string}
            background
          >
            {radial.label && (
              <LabelList
                dataKey={radial.label.dataKey as string}
                position={radial.label.position ?? "insideStart"}
                fontSize={radial.label.fontSize ?? 12}
                className={cn(
                  "fill-white capitalize mix-blend-luminosity",
                  radial.label.className,
                )}
              />
            )}
          </RadialBar>
        ))}
      </RadialBarChart>
    </ChartContainer>
  );
};

export default CommonRadialChart;
