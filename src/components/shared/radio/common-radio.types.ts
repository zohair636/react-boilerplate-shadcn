export interface CommonradioProps {
  id?: string;
  defaultValue?: string;
  options: { label: string; description?: string; value: string }[];
  className?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  onSelect?: (value: string) => void;
  orientation?: "horizontal" | "vertical" | "responsive";
}
