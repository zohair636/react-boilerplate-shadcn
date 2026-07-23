import type { ReactElement, ReactNode } from "react";

export interface CommonHoverCardProps {
  trigger?: ReactElement;
  delay?: number;
  closeDelay?: number;
  children: ReactNode;
  className?: string;
  side?: "bottom" | "inline-start" | "inline-end" | "left" | "top" | "right";
  align?: "center" | "end" | "start";
}
