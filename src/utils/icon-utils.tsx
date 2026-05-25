import { CommonImage } from "@/components/shared/image";
import type { RenderIconProps } from "./types";

export const RenderIcon = ({
  src,
  alt = "",
  width = 24,
  height = 24,
}: RenderIconProps) => {
  if (!src) return null;
  if (typeof src === "string") {
    return <CommonImage src={src} alt={alt} width={width} height={height} />;
  }
  return <>{src}</>;
};
