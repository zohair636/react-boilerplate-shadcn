import React, { type LabelHTMLAttributes } from "react";

export interface CommonLabelProps extends Omit<
  LabelHTMLAttributes<HTMLLabelElement>,
  "id" | "required"
> {
  id?: string;
  label: React.ReactNode;
  required?: boolean;
  helper?: React.ReactNode;
}
