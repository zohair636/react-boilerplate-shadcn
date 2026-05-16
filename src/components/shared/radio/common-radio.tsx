import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import type { CommonradioProps } from "./common-radio.types";
import { Activity, useId } from "react";
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
}: CommonradioProps) => {
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
                <Activity mode={option.description ? "visible" : "hidden"}>
                  <FieldDescription>{option.description}</FieldDescription>
                </Activity>
              </FieldContent>
            </Field>
          );
        })}
      </RadioGroup>
    </FieldSet>
  );
};

export default CommonRadio;
