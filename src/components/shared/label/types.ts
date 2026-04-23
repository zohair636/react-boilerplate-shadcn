import React, { type LabelHTMLAttributes } from "react";

export interface CommonLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  id?: string;
  label?: string | React.ReactNode;
  required?: boolean;
  className?: string;
}
