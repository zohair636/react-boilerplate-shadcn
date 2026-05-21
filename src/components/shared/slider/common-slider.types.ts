export interface CommonSliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number[];
  onValueChange?: (value: number[]) => void;
  orientation?: "horizontal" | "vertical";
  disabled?: boolean;
  className?: string;
}
