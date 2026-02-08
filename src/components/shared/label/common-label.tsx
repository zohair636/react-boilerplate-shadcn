import { forwardRef } from "react";
import type { CommonLabelProps } from "./types";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const CommonLabel = forwardRef<HTMLLabelElement, CommonLabelProps>(
  ({ label, required, helper, className, ...rest }, ref) => {
    return (
      <Label
        ref={ref}
        className={cn(
          "flex items-center gap-0.5 text-sm! font-normal leading-4",
          className
        )}
        {...rest}
      >
        <span className="text-secondary-900">{label}</span>

        {required && <span className="font-normal text-error-500">*</span>}

        {helper && <span className="text-secondary-800 ml-0.5">{helper}</span>}
      </Label>
    );
  }
);

CommonLabel.displayName = "CommonLabel";

export default CommonLabel;
