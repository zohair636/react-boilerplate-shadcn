export interface CommonSelectProps {
  id?: string;
  options: { label: string; value: string | null }[];
  value: string | null;
  onValueChange: (value: string | null) => void;
  selectLabel?: string;
  label?: string;
  className?: string;
  labelClassName?: string;
  triggerClassName?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  orientation?: "horizontal" | "vertical" | "responsive";
  fallback?: string;
  isLoading?: boolean;
}
