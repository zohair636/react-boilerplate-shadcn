import { Input } from "@/components/ui/input";
import { Activity, forwardRef } from "react";
import type { CommonInputProps } from "./types";
import CommonLabel from "../label/common-label";
import { cn } from "@/lib/utils";
import { CircleAlert } from "lucide-react";

const CommonInput = forwardRef<HTMLInputElement, CommonInputProps>(
  (
    {
      label,
      labelClassName,
      placeholder,
      value,
      onChange,
      leftIcon,
      rightIcon,
      leftIconClassName,
      rightIconClassName,
      className,
      onClick,
      error,
      required = false,
      isFocused,
      ...rest
    },
    ref,
  ) => {
    return (
      <div className="w-full">
        <Activity mode={label ? "visible" : "hidden"}>
          <div className="flex justify-between items-center mb-2">
            <CommonLabel
              label={label}
              className={cn("text-base font-semibold", labelClassName)}
              required={required}
            />
          </div>
        </Activity>
        <div
          className={cn(
            "relative"
          )}
        >
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
            ref={ref}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onClick={onClick}
            className={cn(
              className,
            )}
            autoComplete="off"
            readOnly={rest.readOnly}
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
      </div>
    );
  },
);

CommonInput.displayName = "CommonInput";

export default CommonInput;
