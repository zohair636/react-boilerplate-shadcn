import type { InputHTMLAttributes, ReactNode } from "react";

export interface CommonInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  ""
> {
  label?: string;
  labelClassName?: string;
  leftIcon?: string | ReactNode;
  rightIcon?: string | ReactNode;
  leftIconClassName?: string;
  rightIconClassName?: string;
  error?: string;
  suppressErrorMessage?: boolean;
  required?: boolean;
  isFocused?: boolean;
}

export interface CommonInputDayPickerProps {
  label?: string;
  placeholder?: string;
  value?: Date | string;
  onChange?: (date: Date | undefined) => void;
  className?: string;
  disabled?: boolean;
  error?: string;
  required?: boolean;
  labelClassName?: string;
  suppressErrorMessage?: boolean;
  /** Earliest selectable date. Restricts calendar navigation and disables earlier days. */
  minDate?: Date;
  /** Latest selectable date. Restricts calendar navigation and disables later days. */
  maxDate?: Date;
}
