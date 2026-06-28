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
import React, { useId } from "react";
import { Field, FieldError } from "@/components/ui/field";
import CommonFieldLabel from "../label/field-label";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";

const CommonSelect = ({
  id,
  options,
  value,
  onValueChange,
  label,
  selectLabel,
  className,
  labelClassName,
  triggerClassName,
  error,
  required,
  disabled,
  orientation = "vertical",
}: CommonSelectProps) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const isInvalid = !!error && !value;
  const hasValue = !!value;

  if (!options?.length) return null;

  const placeholderOption =
    options.find((opt) => opt.value === null)?.label ?? "Select option...";
  const renderOptions = options.filter((opt) => opt.value !== null) as {
    label: string;
    value: string;
  }[];

  const handleClear = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    onValueChange?.(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClear(e);
    }
  };

  return (
    <Field
      data-invalid={isInvalid}
      orientation={orientation}
      className={className}
    >
      {label && (
        <CommonFieldLabel
          id={fieldId}
          label={label}
          required={required}
          className={labelClassName}
        />
      )}
      <Select
        items={renderOptions}
        value={value ?? ""}
        onValueChange={(v) => onValueChange?.(v || null)}
        disabled={disabled}
      >
        <SelectTrigger
          id={fieldId}
          aria-invalid={isInvalid}
          aria-required={required}
          className={cn("[&>svg:last-child]:hidden", triggerClassName)}
        >
          <SelectValue placeholder={placeholderOption} />

          {hasValue ? (
            <span
              role="button"
              tabIndex={0}
              aria-label="Clear selection"
              onPointerDown={handleClear}
              onKeyDown={handleKeyDown}
              className="ml-auto p-0.5 rounded hover:bg-muted"
            >
              <X className="size-4 shrink-0 opacity-50" />
            </span>
          ) : (
            <ChevronDown className="ml-auto size-4 shrink-0 opacity-50" />
          )}
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
