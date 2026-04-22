import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Activity, forwardRef, useId } from "react";
import type { CommonTextAreaProps } from "./types";

const CommonTextArea = forwardRef<HTMLTextAreaElement, CommonTextAreaProps>(
  ({
    id,
    label,
    description,
    error,
    required = false,
    labelClassName,
    descriptionClassName,
    errorClassName,
    ...rest
  }, ref) => {
    const generatedId = useId();
    const fieldId = id ?? generatedId;
    const descriptionId = description ? `${fieldId}-description` : undefined;
    const errorId = error ? `${fieldId}-error` : undefined;
    return (
      <Field>
        <div className="flex items-center gap-1">
          <FieldLabel htmlFor={fieldId} className={labelClassName}>
            {label}
          </FieldLabel>
          <Activity mode={required ? "visible" : "hidden"}>
            <span className="text-destructive">*</span>
          </Activity>
        </div>
        <Activity mode={description ? "visible" : "hidden"}>
          <FieldDescription
            id={descriptionId}
            className={descriptionClassName}
          >
            {description}
          </FieldDescription>
        </Activity>
        <Textarea
          id={fieldId}
          ref={ref}
          aria-invalid={!!error}
          aria-errormessage={errorId}
          aria-describedby={descriptionId}
          {...rest}
        />
        <Activity mode={error ? "visible" : "hidden"}>
          <FieldError className={errorClassName} id={errorId}>
            {error}
          </FieldError>
        </Activity>
      </Field>
    );
  },
);

CommonTextArea.displayName = "CommonTextArea";

export default CommonTextArea;
