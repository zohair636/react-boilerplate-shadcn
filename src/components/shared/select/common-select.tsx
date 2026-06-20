import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { CommonSelectProps } from "./common-select.types";
import { useId } from "react";
import { Field, FieldError } from "@/components/ui/field";
import CommonFieldLabel from "../label/field-label";

const CommonSelect = ({
  id,
  options,
  value,
  onValueChange,
  defaultValue,
  label,
  selectLabel,
  className,
  labelClassName,
  error,
  required,
  disabled,
  orientation = "vertical",
}: CommonSelectProps) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const isInvalid = !!error && !value;

  if (!options?.length) return null;

  const placeholderOption = options.find((opt) => opt.value === null)?.label;
  const renderOptions = options.filter((opt) => opt.value !== null) as {
    label: string;
    value: string;
  }[];

  return (
    <Field data-invalid={isInvalid} orientation={orientation}>
      {label && (
        <CommonFieldLabel
          id={fieldId}
          label={label}
          required={required}
          className={labelClassName}
        />
      )}
      <Select
        id={fieldId}
        items={renderOptions}
        value={value ?? undefined}
        onValueChange={(v) => onValueChange?.(v ?? null)}
        defaultValue={defaultValue ?? undefined}
        disabled={disabled}
      >
        <SelectTrigger aria-invalid={isInvalid} className={className}>
          <SelectValue placeholder={placeholderOption} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {selectLabel && <SelectLabel>{selectLabel}</SelectLabel>}
            {renderOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {isInvalid && <FieldError>{error}</FieldError>}
    </Field>
  );
};

export default CommonSelect;
