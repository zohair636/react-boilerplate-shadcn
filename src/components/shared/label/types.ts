import React from "react";

export interface CommonLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  label?: string | React.ReactNode;
  showInfoIcon?: string | React.ReactNode;
  required?: boolean;
  helper?: string;
  className?: string;
}
