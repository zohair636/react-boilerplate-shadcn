import type { TextareaHTMLAttributes } from "react";

export interface CommonTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string;
  label: string;
  description?: string;
  error?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  errorClassName?: string;
}
