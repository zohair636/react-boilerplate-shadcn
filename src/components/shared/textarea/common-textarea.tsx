import { Field, FieldDescription, FieldError } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { useId } from "react";
import type { CommonTextAreaProps } from "./common-textarea.types";
import CommonFieldLabel from "../label/field-label";

const CommonTextArea = ({
  id,
  label,
  description,
  error,
  required,
  labelClassName,
  descriptionClassName,
  errorClassName,
  value,
  onChange,
  ref,
  ...rest
}: CommonTextAreaProps) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const descriptionId = description ? `${fieldId}-description` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;
  const showError = !!error && !value;
  return (
    <Field>
      {label && (
        <CommonFieldLabel
          id={fieldId}
          label={label}
          className={labelClassName}
          required={required}
        />
      )}
      {description && (
        <FieldDescription id={descriptionId} className={descriptionClassName}>
          {description}
        </FieldDescription>
      )}
      <Textarea
        id={fieldId}
        ref={ref}
        aria-invalid={showError}
        aria-errormessage={errorId}
        aria-describedby={descriptionId}
        aria-required={required}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        {...rest}
      />
      {showError && (
        <FieldError className={errorClassName} id={errorId}>
          {error}
        </FieldError>
      )}
    </Field>
  );
};

export default CommonTextArea;
