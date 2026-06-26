import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CommonCarouselProps } from "./common-carousel.types";
import Autoplay from "embla-carousel-autoplay";
import { useMemo } from "react";

const CommonCarousel = <T,>({
  options,
  renderItem,
  getItemKey,
  align = "start",
  loop = false,
  orientation = "horizontal",
  autoPlay = false,
  autoPlayDelay,
  setApi,
  showControls = true,
  className,
  contentClassName,
  itemClassName,
}: CommonCarouselProps<T>) => {
  const autoplayPlugin = useMemo(
    () =>
      autoPlay
        ? Autoplay({ delay: autoPlayDelay ?? 2000, stopOnInteraction: true })
        : null,
    [autoPlay, autoPlayDelay],
  );

  const plugins = useMemo(
    () => (autoplayPlugin ? [autoplayPlugin] : []),
    [autoplayPlugin],
  );

  if (!options?.length) return null;

  return (
    <Carousel
      opts={{ align: align, loop: loop }}
      orientation={orientation}
      plugins={plugins}
      onMouseEnter={autoplayPlugin?.stop}
      onMouseLeave={autoplayPlugin?.reset}
      setApi={setApi}
      className={className}
    >
      <CarouselContent className={contentClassName}>
        {options.map((item, index) => (
          <CarouselItem
            key={getItemKey ? getItemKey(item, index) : index}
            className={itemClassName}
          >
            {renderItem(item, index)}
          </CarouselItem>
        ))}
      </CarouselContent>
      {showControls && <CarouselPrevious />}
      {showControls && <CarouselNext />}
    </Carousel>
  );
};

export default CommonCarousel;
