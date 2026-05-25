import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { CommonRadioProps } from "./common-radio.types";
import { useId } from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";

const CommonRadio = ({
  id,
  defaultValue,
  options,
  className,
  disabled,
  required,
  value,
  onSelect,
  orientation = "horizontal",
}: CommonRadioProps) => {
  const generatedId = useId();
  const radioId = id ?? generatedId;
  const isInvalid = !!required && !value;

  if (!options?.length) return null;

  return (
    <FieldSet>
      <RadioGroup
        defaultValue={defaultValue}
        value={value}
        onValueChange={onSelect}
      >
        {options.map((option) => {
          const optionId = `${radioId}-${option.value}`;
          return (
            <Field
              key={optionId}
              data-invalid={isInvalid}
              orientation={orientation}
            >
              <RadioGroupItem
                value={option.value}
                id={optionId}
                className={className}
                disabled={disabled}
                aria-invalid={isInvalid}
              />
              <FieldContent>
                <FieldLabel htmlFor={optionId}>{option.label}</FieldLabel>
                {option.description && (
                  <FieldDescription>{option.description}</FieldDescription>
                )}
              </FieldContent>
            </Field>
          );
        })}
      </RadioGroup>
    </FieldSet>
  );
};

export default CommonRadio;
