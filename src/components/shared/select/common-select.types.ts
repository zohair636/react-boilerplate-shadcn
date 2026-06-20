export interface CommonSelectProps {
  id?: string;
  options: { label: string; value: string | null }[];
  value?: string | null;
  onValueChange?: (value: string | null) => void;
  defaultValue?: string | null;
  selectLabel?: string;
  label?: string;
  className?: string;
  labelClassName?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  orientation?: "horizontal" | "vertical" | "responsive";
}
