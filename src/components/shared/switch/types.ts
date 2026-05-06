export interface CommonSwitchProps {
  id?: string;
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  labelClassName?: string;
}
