import type { CarouselApi } from "@/components/ui/carousel";
import type { OrientationType } from "@/types/orientation";
import type { ReactNode } from "react";

export interface CommonCarouselProps<T> {
  options: T[];
  renderItem: (item: T, index: number) => ReactNode;
  getItemKey?: (item: T, index: number) => string | number;
  align?: "center" | "end" | "start";
  loop?: boolean;
  orientation?: OrientationType;
  autoPlay?: boolean;
  autoPlayDelay?: number;
  setApi?: (api: CarouselApi) => void;
  showControls?: boolean;
  showDots?: boolean;
  className?: string;
  contentClassName?: string;
  itemClassName?: string;
}
