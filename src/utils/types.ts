import type { ReactNode } from "react";

export interface RenderIconProps {
  src: string | ReactNode;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}
