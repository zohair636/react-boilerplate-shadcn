import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import CommonFieldLabel from "../label/field-label";
import { useId } from "react";
import type { CommonCheckboxProps } from "./common-checkbox.types";

const CommonCheckbox = ({
  id,
  label,
  description,
  required,
  className,
  orientation = "horizontal",
  variant = "default",
  checked,
  onCheckedChange,
  disabled,
  options,
}: CommonCheckboxProps) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const isInvalid =
    !!required && (Array.isArray(checked) ? !checked?.length : !checked);

  if (variant === "group" && !options?.length) return null;

  const handleGroupChange = (value: string, isChecked: boolean) => {
    const current = Array.isArray(checked) ? checked : [];
    const updated = isChecked
      ? current.includes(value)
        ? current
        : [...current, value]
      : current.filter((v) => v !== value);
    onCheckedChange?.(updated);
  };

  const renderItems = () => {
    if (variant === "default") {
      return (
        <FieldGroup className={className}>
          <Field orientation={orientation} data-invalid={isInvalid}>
            <Checkbox
              id={fieldId}
              name={fieldId}
              checked={!!checked}
              onCheckedChange={(value) => onCheckedChange?.(value as boolean)}
              aria-invalid={isInvalid}
              disabled={disabled}
            />
            <FieldContent>
              <CommonFieldLabel id={fieldId} label={label} />
              {description && (
                <FieldDescription>{description}</FieldDescription>
              )}
            </FieldContent>
          </Field>
        </FieldGroup>
      );
    }
    if (variant === "group") {
      return (
        <FieldSet>
          {label && <FieldLegend>{label}</FieldLegend>}
          {description && <FieldDescription>{description}</FieldDescription>}
          <FieldGroup className={className}>
            {options?.map((option) => {
              const optionId = `${fieldId}-${option.value}`;
              const isChecked = Array.isArray(checked)
                ? checked.includes(option.value)
                : false;
              return (
                <Field
                  key={optionId}
                  orientation={orientation}
                  data-invalid={isInvalid}
                >
                  <Checkbox
                    id={optionId}
                    name={fieldId}
                    checked={isChecked}
                    onCheckedChange={(value) =>
                      handleGroupChange(option.value, value as boolean)
                    }
                    aria-invalid={isInvalid}
                    disabled={disabled}
                  />
                  <CommonFieldLabel id={optionId} label={option.label} />
                </Field>
              );
            })}
          </FieldGroup>
        </FieldSet>
      );
    }
  };

  return <>{renderItems()}</>;
};

export default CommonCheckbox;
