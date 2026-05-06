import { Switch } from "@/components/ui/switch";
import CommonLabel from "../label";
import type { CommonSwitchProps } from "./types";
import { useId } from "react";

const CommonSwitch = ({
  id,
  label,
  disabled,
  checked,
  onCheckedChange,
  className,
  labelClassName,
}: CommonSwitchProps) => {
  const generatedId = useId();
  const switchId = id || generatedId;
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id={switchId}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={className}
        disabled={disabled}
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
