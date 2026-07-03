import type { ImgHTMLAttributes } from "react";

export interface CommonImageProps extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "alt" | "loading" | "fetchPriority" | "decoding" | "width" | "height"
> {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "auto" | "high" | "low";
  decoding?: "sync" | "async" | "auto";
  width: number;
  height: number;
}
