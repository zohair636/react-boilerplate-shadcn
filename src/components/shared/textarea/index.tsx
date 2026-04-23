import { Field, FieldDescription, FieldError } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Activity, forwardRef, useId } from "react";
import type { CommonTextAreaProps } from "./types";
import CommonFieldLabel from "../label/field-label";

const CommonTextArea = forwardRef<HTMLTextAreaElement, CommonTextAreaProps>(
  (
    {
      id,
      label,
      description,
      error,
      required,
      labelClassName,
      descriptionClassName,
      errorClassName,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const fieldId = id ?? generatedId;
    const descriptionId = description ? `${fieldId}-description` : undefined;
    const errorId = error ? `${fieldId}-error` : undefined;
    return (
      <Field>
        <CommonFieldLabel
          id={fieldId}
          label={label}
          className={labelClassName}
          required={required}
        />
        <Activity mode={description ? "visible" : "hidden"}>
          <FieldDescription id={descriptionId} className={descriptionClassName}>
            {description}
          </FieldDescription>
        </Activity>
        <Textarea
          id={fieldId}
          ref={ref}
          aria-invalid={!!error}
          aria-errormessage={errorId}
          aria-describedby={descriptionId}
          aria-required={required}
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
