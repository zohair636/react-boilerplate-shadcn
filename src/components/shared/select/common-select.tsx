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
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CommonButton } from "../button";
import { preventTriggerPointerDown } from "@/utils/event-handlers";

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

  const handleClear = () => {
    onValueChange?.(null);
  };

  return (
    <Field
      data-invalid={isInvalid}
      orientation={orientation}
      className={className}
    >
      {label && (
        <CommonFieldLabel
          htmlFor={fieldId}
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
            <CommonButton
              type="button"
              leftIcon={<X className="size-4 shrink-0 opacity-50" />}
              variant="ghost"
              size="icon"
              onPointerDown={preventTriggerPointerDown}
              onClick={handleClear}
              className="rounded-full hover:bg-muted"
              aria-label="Clear selection"
            />
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
