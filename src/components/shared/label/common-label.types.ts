import React, { type LabelHTMLAttributes, type Ref } from "react";

export interface CommonLabelProps extends Omit<
  LabelHTMLAttributes<HTMLLabelElement>,
  "id" | "required"
> {
  id?: string;
  label: React.ReactNode;
  required?: boolean;
  helper?: React.ReactNode;
  ref?: Ref<HTMLLabelElement>;
}

export type CommonFieldLabelProps = Omit<CommonLabelProps, "helper">;
