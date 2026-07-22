import type { CommonDatePickerProps } from "./common-date-picker.types";
import SingleDatePicker from "./components/single-date-picker";
import RangeDatePicker from "./components/range-date-picker";
import InputDatePicker from "./components/input-date-picker";
import { Field } from "@/components/ui/field";
import CommonFieldLabel from "../label/field-label";
import { cn } from "@/lib/utils";

const CommonDatePicker = (props: CommonDatePickerProps) => {
  const content = () => {
    switch (props.mode) {
      case "single":
        return <SingleDatePicker {...props} />;

      case "range":
        return <RangeDatePicker {...props} />;

      case "input":
        return <InputDatePicker {...props} />;

      default:
        return null;
    }
  };

  return (
    <Field className={cn("w-60", props.className)}>
      {props.label && (
        <CommonFieldLabel
          htmlFor={props.id}
          label={props.label}
          required={props.required}
          className={props.labelClassName}
        />
      )}
      {content()}
    </Field>
  );
};

export default CommonDatePicker;
