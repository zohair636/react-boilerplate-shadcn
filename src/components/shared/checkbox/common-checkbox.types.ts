export interface CommonCheckboxProps {
  id?: string;
  label: string;
  description?: string;
  required?: boolean;
  className?: string;
  orientation?: "horizontal" | "vertical" | "responsive";
  variant?: "default" | "group";
  checked?: boolean | string[];
  onCheckedChange?: (checked: boolean | string[]) => void;
  disabled?: boolean;
  options?: { label: string; value: string }[];
}
