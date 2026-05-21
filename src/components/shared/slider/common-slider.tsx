import { Slider } from "@/components/ui/slider";
import type { CommonSliderProps } from "./common-slider.types";

const CommonSlider = ({
  min,
  max,
  step,
  value,
  onValueChange,
  orientation = "horizontal",
  disabled,
  className,
}: CommonSliderProps) => {
  return (
    <Slider
      min={min}
      max={max}
      step={step}
      className={className}
      value={value}
      onValueChange={(val) => onValueChange?.(val as number[])}
      orientation={orientation}
      disabled={disabled}
    />
  );
};

export default CommonSlider;
