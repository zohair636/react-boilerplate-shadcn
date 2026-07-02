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
import type {
  CommonCheckboxProps,
  DefaultCheckboxProps,
  GroupCheckboxProps,
} from "./common-checkbox.types";

const DefaultCheckbox = ({
  id,
  label,
  description,
  checked,
  onCheckedChange,
  orientation,
  required,
  disabled,
  className,
}: DefaultCheckboxProps) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const isInvalid =
    !!required && (Array.isArray(checked) ? !checked?.length : !checked);
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
          {description && <FieldDescription>{description}</FieldDescription>}
        </FieldContent>
      </Field>
    </FieldGroup>
  );
};

const GroupCheckbox = ({
  id,
  label,
  description,
  orientation,
  checked,
  onCheckedChange,
  required,
  disabled,
  className,
  options,
}: GroupCheckboxProps) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const isInvalid =
    !!required && (Array.isArray(checked) ? !checked?.length : !checked);

  const handleGroupChange = (value: string, isChecked: boolean) => {
    const current = Array.isArray(checked) ? checked : [];
    const updated = isChecked
      ? current.includes(value)
        ? current
        : [...current, value]
      : current.filter((v) => v !== value);
    onCheckedChange?.(updated);
  };
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
};

const CommonCheckbox = (props: CommonCheckboxProps) => {
  const {
    label,
    description,
    required,
    disabled,
    className,
    orientation = "horizontal",
    id,
  } = props;

  if (props.variant === "group") {
    if (!props.options?.length) return null;
    return (
      <GroupCheckbox
        id={id}
        label={label}
        description={description}
        options={props.options}
        checked={props.checked as string[] | undefined}
        onCheckedChange={props.onCheckedChange}
        required={required}
        disabled={disabled}
        className={className}
        orientation={orientation}
      />
    );
  }

  return (
    <DefaultCheckbox
      id={id}
      label={label}
      description={description}
      orientation={orientation}
      checked={props.checked}
      onCheckedChange={props.onCheckedChange}
      required={required}
      disabled={disabled}
      className={className}
    />
  );
};

export default CommonCheckbox;
