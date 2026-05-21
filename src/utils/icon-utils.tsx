import { CommonImage } from "@/components/shared/image";
import type { ReactNode } from "react";

export const renderIcon = (icon: string | ReactNode) => {
  if (!icon) return null;
  if (typeof icon === "string") {
    return <CommonImage src={icon} alt={icon} width={24} height={24} />;
  } else {
    return icon;
  }
};
