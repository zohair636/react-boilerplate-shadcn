import type { DateRange } from "react-day-picker";

interface DatePickerBaseProps {
  label?: string;
  placeholder?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  triggerClassName?: string;
  labelClassName?: string;
}

type SingleDatePickerProps = DatePickerBaseProps & {
  mode: "single";
  select?: Date;
  onSelect?: (select: Date | undefined) => void;
  showWeekNumber?: boolean;
  disabled?: boolean;
  captionLayout?: "dropdown" | "dropdown-months" | "dropdown-years" | "label";
};

type DateRangePickerProps = DatePickerBaseProps & {
  mode: "range";
  select?: DateRange;
  onSelect?: (select: DateRange | undefined) => void;
  numberOfMonths?: number;
  className?: string;
};

export type CommonDatePickerProps =
  | SingleDatePickerProps
  | DateRangePickerProps;
