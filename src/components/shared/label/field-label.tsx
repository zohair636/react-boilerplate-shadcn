import type { CommonFieldLabelProps } from "./common-label.types";
import { FieldLabel } from "@/components/ui/field";

const CommonFieldLabel = ({
  htmlFor,
  label,
  required,
  className,
  ref,
  ...rest
}: CommonFieldLabelProps) => {
  return (
    <div className="flex items-center gap-1">
      <FieldLabel htmlFor={htmlFor} ref={ref} className={className} {...rest}>
        {label}
      </FieldLabel>
      {required && <span className="text-destructive">*</span>}
    </div>
  );
};

export default CommonFieldLabel;
