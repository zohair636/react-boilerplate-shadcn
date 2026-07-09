import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { CommonCarouselProps } from "./common-carousel.types";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CommonButton } from "../button";
import { cn } from "@/lib/utils";

const CommonCarousel = <T,>({
  options,
  renderItem,
  getItemKey,
  align = "start",
  loop = false,
  orientation = "horizontal",
  autoPlay = false,
  autoPlayDelay,
  setApi: setAPIExternal,
  showControls = true,
  showDots = false,
  className,
  contentClassName,
  itemClassName,
}: CommonCarouselProps<T>) => {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [api, setAPIState] = useState<CarouselApi>();
  const apiInternal = useRef<CarouselApi>(null);

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

  const handleSetApi = useCallback(
    (nextApi: CarouselApi) => {
      apiInternal.current = nextApi;
      setAPIExternal?.(nextApi);
      setAPIState(nextApi);
    },
    [setAPIExternal],
  );

  useEffect(() => {
    if (!api) return;

    const onInit = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };
    const onSelect = () => setCurrent(api.selectedScrollSnap());

    onInit();
    api.on("init", onInit);
    api.on("select", onSelect);

    return () => {
      api.off("init", onInit);
      api.off("select", onSelect);
    };
  }, [api]);

  if (!options?.length) return null;

  return (
    <div className="flex flex-col items-center gap-2">
      <Carousel
        opts={{ align: align, loop: loop }}
        orientation={orientation}
        plugins={plugins}
        onMouseEnter={autoplayPlugin?.stop}
        onMouseLeave={autoplayPlugin?.reset}
        setApi={handleSetApi}
        className={className}
      >
        <CarouselContent className={contentClassName}>
          {options.map((item, index) => (
            <CarouselItem
              key={getItemKey(item, index)}
              className={itemClassName}
            >
              {renderItem(item, index)}
            </CarouselItem>
          ))}
        </CarouselContent>
        {showControls && <CarouselPrevious />}
        {showControls && <CarouselNext />}
      </Carousel>
      {showDots && count > 0 && (
        <div className="flex items-center gap-1.5">
          {[...Array(count)].map((_, index) => (
            <CommonButton
              key={`dot-${index}`}
              onClick={() => apiInternal.current?.scrollTo(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                current === index
                  ? "w-4 bg-primary"
                  : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommonCarousel;
