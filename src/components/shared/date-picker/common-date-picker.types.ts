import type { DateRange } from "react-day-picker";

interface DatePickerBaseProps {
  id?: string;
  label?: string;
  placeholder?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  required?: boolean;
  className?: string;
  triggerClassName?: string;
  labelClassName?: string;
}

export type SingleDatePickerProps = DatePickerBaseProps & {
  mode: "single";
  value: Date | undefined;
  onChange: (select: Date | undefined) => void;
  showWeekNumber?: boolean;
  disabled?: boolean;
  captionLayout?: "dropdown" | "dropdown-months" | "dropdown-years" | "label";
};

export type DateRangePickerProps = DatePickerBaseProps & {
  mode: "range";
  value: DateRange;
  onChange: (select: DateRange | undefined) => void;
  numberOfMonths?: number;
  className?: string;
};

export type InputDatePickerProps = DatePickerBaseProps & {
  mode: "input";
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
};

export type CommonDatePickerProps =
  | SingleDatePickerProps
  | DateRangePickerProps
  | InputDatePickerProps;
