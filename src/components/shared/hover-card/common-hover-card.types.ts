import type { ReactNode } from "react";

export interface CommonHoverCardProps {
  trigger?: ReactNode;
  delay?: number;
  closeDelay?: number;
  children: ReactNode;
  className?: string;
  side?: "bottom" | "inline-start" | "inline-end" | "left" | "top" | "right";
  align?: "center" | "end" | "start";
}
