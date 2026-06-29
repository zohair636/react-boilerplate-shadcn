import { Input } from "@/components/ui/input";
import { useId } from "react";
import type { CommonInputProps } from "./common-input.types";
import { cn } from "@/lib/utils";
import { CircleAlert } from "lucide-react";
import CommonFieldLabel from "../label/field-label";
import { Field, FieldError } from "@/components/ui/field";
import { RenderIcon } from "@/utils/icon-utils";

const CommonInput = ({
  id,
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
  ref,
  ...rest
}: CommonInputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = error ? `${inputId}-error` : undefined;
  return (
    <Field>
      {label && (
        <CommonFieldLabel
          id={inputId}
          label={label}
          required={required}
          className={labelClassName}
        />
      )}
      <div className="relative">
        {leftIcon && (
          <span
            className={cn(
              "absolute left-3 top-1/2 -translate-y-1/2 z-10 shrink-0",
              leftIconClassName,
            )}
          >
            <RenderIcon src={leftIcon} alt={label} />
          </span>
        )}
        <Input
          id={inputId}
          ref={ref}
          value={value}
          onChange={onChange}
          onClick={onClick}
          aria-invalid={!!error}
          aria-errormessage={errorId}
          aria-required={required}
          className={cn(leftIcon && "pl-9", rightIcon && "pr-9", className)}
          {...rest}
        />
        {rightIcon && (
          <span
            className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2 z-10 shrink-0",
              rightIconClassName,
            )}
          >
            <RenderIcon src={rightIcon} alt={label} />
          </span>
        )}
      </div>
      {error && (
        <FieldError
          id={errorId}
          className="flex items-center gap-1 error-message text-sm text-destructive"
        >
          <CircleAlert className="size-3 shrink-0" />
          {error}
        </FieldError>
      )}
    </Field>
  );
};

export default CommonInput;
