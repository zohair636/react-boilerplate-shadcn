export interface CommonDatePickerProps {
  label?: string;
  placeholder?: string;
  select?: Date;
  onSelect?: (select: Date | undefined) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  mode?: "single" | "multiple" | "range";
  captionLayout?: "dropdown" | "dropdown-months" | "dropdown-years" | "label";
  triggerClassName?: string;
  labelClassName?: string;
  showWeekNumber?: boolean;
  disabled?: boolean;
}
