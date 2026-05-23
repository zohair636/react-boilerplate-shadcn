import type { CommonLabelProps } from "./common-label.types";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const CommonLabel = ({
  id,
  label,
  required,
  helper,
  className,
  ref,
  ...rest
}: CommonLabelProps) => {
  return (
    <Label
      ref={ref}
      htmlFor={id}
      className={cn(
        "flex items-center gap-0.5 text-sm! font-normal leading-4",
        className,
      )}
      {...rest}
    >
      <span className="text-secondary-900">{label}</span>

      {required && <span className="font-normal text-error-500">*</span>}

      {helper && (
        <span className="text-xs text-secondary-800 ml-0.5">{helper}</span>
      )}
    </Label>
  );
};

export default CommonLabel;
