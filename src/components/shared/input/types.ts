import type { InputHTMLAttributes, ReactNode } from "react";

export interface CommonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftIconClassName?: string;
  rightIconClassName?: string;
  error?: string;
  required?: boolean;
}
