import type { ReactNode } from "react";

export interface CommonTooltipProps {
  trigger: ReactNode;
  content: ReactNode;
  side?: "top" | "right" | "bottom" | "left";
}
