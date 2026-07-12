import { Field, FieldDescription, FieldError } from "@/components/ui/field";
import type { CommonInputGroupProps } from "./common-input-group.types";
import { useId } from "react";
import CommonFieldLabel from "../label/field-label";
import { InputGroup } from "@/components/ui/input-group";
import InputField from "./components/input-field";
import TextareaField from "./components/textarea-field";

const CommonInputGroup = ({
  id,
  label,
  description,
  placeholder = "Your placeholder...",
  type,
  startAlign,
  endAlign,
  required,
  disabled,
  value,
  onChange,
  error,
  addonStart,
  addonEnd,
  className,
  mode = "input",
}: CommonInputGroupProps) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const errorId = error ? `${fieldId}-error` : undefined;

  const sharedProps = {
    fieldId,
    errorId,
    placeholder,
    startAlign,
    endAlign,
    required,
    disabled,
    value,
    onChange,
    error,
  };

  return (
    <Field className={className}>
      {label && (
        <CommonFieldLabel htmlFor={fieldId} label={label} required={required} />
      )}
      <InputGroup>
        {mode === "input" ? (
          <InputField
            type={type}
            addonStart={addonStart}
            addonEnd={addonEnd}
            {...sharedProps}
          />
        ) : (
          <TextareaField {...sharedProps} />
        )}
      </InputGroup>
      {description && <FieldDescription>{description}</FieldDescription>}
      {error && <FieldError id={errorId}>{error}</FieldError>}
    </Field>
  );
};

export default CommonInputGroup;
