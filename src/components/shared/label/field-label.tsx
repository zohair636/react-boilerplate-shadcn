import { Activity, forwardRef, useId } from "react";
import type { CommonLabelProps } from "./types";
import { FieldLabel } from "@/components/ui/field";

const CommonFieldLabel = forwardRef<HTMLLabelElement, CommonLabelProps>(
  ({ id, label, required, className, ...rest }, ref) => {
    const generatedId = useId();
    const fieldId = id ?? generatedId;
    return (
      <div className="flex items-center gap-1">
        <FieldLabel htmlFor={fieldId} ref={ref} className={className} {...rest}>
          {label}
        </FieldLabel>
        <Activity mode={required ? "visible" : "hidden"}>
          <span className="text-destructive">*</span>
        </Activity>
      </div>
    );
  },
);

CommonFieldLabel.displayName = "CommonFieldLabel";

export default CommonFieldLabel;
