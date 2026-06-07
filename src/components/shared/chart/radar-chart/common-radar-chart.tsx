import type { CommonRadarChartProps } from "./common-radar-chart.types";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

const CommonRadarChart = <TData extends Record<string, unknown>>({
  data,
  config,
  angleAxisDataKey,
  cursor = false,
  hideLabel = true,
  indicator = "dot",
  hideIndicator = false,
  grid = true,
  radialLines = true,
  polarRadius,
  strokeWidth = 1,
  gridType = "polygon",
  radar,
  legend,
  legendClassName,
  className,
}: CommonRadarChartProps<TData>) => {
  if (!data?.length || !radar?.length) return null;
  return (
    <ChartContainer config={config} className={className}>
      <RadarChart data={data}>
        <ChartTooltip
          cursor={cursor}
          content={
            <ChartTooltipContent
              hideLabel={hideLabel}
              indicator={indicator}
              hideIndicator={hideIndicator}
            />
          }
        />
        <PolarAngleAxis dataKey={angleAxisDataKey as string} />
        {grid && (
          <PolarGrid
            radialLines={radialLines}
            polarRadius={polarRadius}
            strokeWidth={strokeWidth}
            gridType={gridType}
          />
        )}
        {radar.map((r) => (
          <Radar
            key={r.dataKey}
            dataKey={r.dataKey as string}
            fill={r.fill ?? "var(--color-desktop)"}
            fillOpacity={r.fillOpacity ?? 0.6}
            stroke={r.stroke}
            strokeWidth={r.strokeWidth ?? 2}
            dot={r.dot}
          />
        ))}
        {legend && (
          <ChartLegend
            content={<ChartLegendContent />}
            className={legendClassName}
          />
        )}
      </RadarChart>
    </ChartContainer>
  );
};

export default CommonRadarChart;
