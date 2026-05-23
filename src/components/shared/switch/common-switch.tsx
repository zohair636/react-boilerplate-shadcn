import { Switch } from "@/components/ui/switch";
import { CommonLabel } from "../label";
import { useId } from "react";
import type { CommonSwitchProps } from "./common-switch.types";
import { cn } from "@/lib/utils";

const CommonSwitch = ({
  id,
  label,
  disabled,
  checked,
  onCheckedChange,
  containerClassName,
  className,
  labelClassName,
  size = "default",
  required,
  invalid,
  ...rest
}: CommonSwitchProps) => {
  const generatedId = useId();
  const switchId = id ?? generatedId;
  return (
    <div
      data-invalid={invalid}
      className={cn("flex items-center space-x-2", containerClassName)}
    >
      <Switch
        id={switchId}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={className}
        disabled={disabled}
        size={size}
        required={required}
        aria-invalid={invalid}
        {...rest}
      />
      <CommonLabel
        htmlFor={switchId}
        label={label}
        className={labelClassName}
      />
    </div>
  );
};

export default CommonSwitch;
