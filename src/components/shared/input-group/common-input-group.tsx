import { Field, FieldDescription, FieldError } from "@/components/ui/field";
import type { CommonInputGroupProps } from "./common-input-group.types";
import { useId } from "react";
import CommonFieldLabel from "../label/field-label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { RenderIcon } from "@/utils/icon-utils";

const CommonInputGroup = ({
  id,
  label,
  description,
  placeholder = "Your placeholder...",
  type,
  icon,
  align,
  required,
  disabled,
  value,
  onChange,
  error,
  className,
  mode = "input",
}: CommonInputGroupProps) => {
  const generatedId = useId();
  const fieldId = generatedId ?? id;
  const errorId = error ? `${fieldId}-error` : undefined;

  const renderItem = () => {
    if (mode === "input") {
      return (
        <>
          <InputGroupInput
            id={fieldId}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            aria-required={required}
            aria-disabled={disabled}
            aria-invalid={!!error}
            aria-errormessage={errorId}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          <InputGroupAddon align={align}>
            <RenderIcon src={icon} />
          </InputGroupAddon>
        </>
      );
    }
    if (mode === "textarea") {
      return (
        <>
          <InputGroupTextarea
            id={fieldId}
            placeholder={placeholder}
            disabled={disabled}
            aria-required={required}
            aria-disabled={disabled}
            aria-invalid={!!error}
            aria-errormessage={errorId}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          <InputGroupAddon align={align}>
            <RenderIcon src={icon} />
          </InputGroupAddon>
        </>
      );
    }
  };
  return (
    <Field className={className}>
      {label && (
        <CommonFieldLabel htmlFor={fieldId} label={label} required={required} />
      )}
      <InputGroup>{renderItem()}</InputGroup>
      {description && <FieldDescription>{description}</FieldDescription>}
      {error && <FieldError id={errorId}>{error}</FieldError>}
    </Field>
  );
};

export default CommonInputGroup;
