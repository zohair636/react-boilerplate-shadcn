type CommonCheckboxBaseProps = {
  id?: string;
  label: string;
  description?: string;
  required?: boolean;
  className?: string;
  orientation?: "horizontal" | "vertical" | "responsive";
  disabled?: boolean;
};

export type DefaultCheckboxProps = CommonCheckboxBaseProps & {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

export type GroupCheckboxProps = CommonCheckboxBaseProps & {
  options?: { label: string; value: string }[];
  checked?: string[];
  onCheckedChange?: (checked: string[]) => void;
};

export type CommonCheckboxProps =
  | ({ variant?: "default" } & DefaultCheckboxProps)
  | ({ variant: "group" } & GroupCheckboxProps);
