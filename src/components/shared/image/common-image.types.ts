import type { ImgHTMLAttributes } from "react";

export interface CommonImageProps extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "alt" | "loading" | "fetchPriority" | "width" | "height"
> {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "auto" | "high" | "low";
  width: number;
  height: number;
}
