import { Input } from "@/components/ui/input";
import { Activity, forwardRef, useId } from "react";
import type { CommonInputProps } from "./types";
import { cn } from "@/lib/utils";
import { CircleAlert } from "lucide-react";
import CommonFieldLabel from "../label/field-label";
import { Field } from "@/components/ui/field";

const CommonInput = forwardRef<HTMLInputElement, CommonInputProps>(
  (
    {
      label,
      labelClassName,
      value,
      onChange,
      leftIcon,
      rightIcon,
      leftIconClassName,
      rightIconClassName,
      className,
      onClick,
      error,
      required,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = rest.id ?? generatedId;
    return (
      <div className="w-full">
        <Field>
          <Activity mode={label ? "visible" : "hidden"}>
            <CommonFieldLabel
              id={inputId}
              label={label}
              required={required}
              className={labelClassName}
            />
          </Activity>
          <div className={cn("relative")}>
            <Activity mode={leftIcon ? "visible" : "hidden"}>
              <span
                onClick={onClick}
                className={cn(
                  "absolute left-3 z-10 cursor-pointer",
                  leftIconClassName,
                )}
              >
                {leftIcon}
              </span>
            </Activity>
            <Input
              id={inputId}
              ref={ref}
              value={value}
              onChange={onChange}
              onClick={onClick}
              className={cn(className)}
              {...rest}
            />
            <Activity mode={rightIcon ? "visible" : "hidden"}>
              <div className={cn("absolute right-3 z-10", rightIconClassName)}>
                {rightIcon}
              </div>
            </Activity>
          </div>
          {error && !rest.suppressErrorMessage && (
            <p className="flex items-center gap-1 error-message mt-2.5 text-sm text-destructive">
              <CircleAlert className="w-3 h-3 shrink-0" />
              {error}
            </p>
          )}
        </Field>
      </div>
    );
  },
);

CommonInput.displayName = "CommonInput";

export default CommonInput;
