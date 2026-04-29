import React, { type LabelHTMLAttributes } from "react";

export interface CommonLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  id?: string;
  label?: React.ReactNode;
  required?: boolean;
  helper?: React.ReactNode;
  className?: string;
}
