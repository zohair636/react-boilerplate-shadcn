import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
} from "@/components/ui/field";
import type { DefaultCheckboxProps } from "../common-checkbox.types";
import { Checkbox } from "@/components/ui/checkbox";
import CommonFieldLabel from "../../label/field-label";
import { useId } from "react";

export const DefaultCheckbox = ({
  id,
  label,
  description,
  checked,
  onCheckedChange,
  orientation,
  required,
  disabled,
  isInvalid,
  className,
}: DefaultCheckboxProps) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  return (
    <FieldGroup className={className}>
      <Field orientation={orientation} data-invalid={isInvalid}>
        <Checkbox
          id={fieldId}
          name={fieldId}
          checked={!!checked}
          onCheckedChange={(value) => onCheckedChange?.(value as boolean)}
          required={required}
          aria-required={required}
          aria-invalid={isInvalid}
          disabled={disabled}
        />
        <FieldContent>
          <CommonFieldLabel id={fieldId} label={label} />
          {description && <FieldDescription>{description}</FieldDescription>}
        </FieldContent>
      </Field>
    </FieldGroup>
  );
};
