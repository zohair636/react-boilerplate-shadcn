import type { DateRange } from "react-day-picker";

interface DatePickerBaseProps {
  label?: string;
  placeholder?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  triggerClassName?: string;
  labelClassName?: string;
}

export type SingleDatePickerProps = DatePickerBaseProps & {
  mode: "single";
  value?: Date;
  onChange?: (select: Date | undefined) => void;
  showWeekNumber?: boolean;
  disabled?: boolean;
  captionLayout?: "dropdown" | "dropdown-months" | "dropdown-years" | "label";
};

export type DateRangePickerProps = DatePickerBaseProps & {
  mode: "range";
  value?: DateRange;
  onChange?: (select: DateRange | undefined) => void;
  numberOfMonths?: number;
  className?: string;
};

export type CommonDatePickerProps =
  | SingleDatePickerProps
  | DateRangePickerProps;
