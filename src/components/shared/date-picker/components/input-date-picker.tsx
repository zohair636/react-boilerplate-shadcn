import { useState } from "react";
import type { InputDatePickerProps } from "../common-date-picker.types";
import { Field } from "@/components/ui/field";
import CommonFieldLabel from "../../label/field-label";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { CalendarIcon } from "lucide-react";
import { CommonPopover } from "../../popover";
import { Calendar } from "@/components/ui/calendar";
import { formatDate, isValidDate } from "../common-date-picker.utils";
import { cn } from "@/lib/utils";

const InputDatePicker = ({
  label,
  placeholder,
  required,
  className,
  labelClassName,
  date: controlledDate,
  onDateChange,
}: InputDatePickerProps) => {
  const [open, setOpen] = useState(false);
  const [internalDate, setInternalDate] = useState<Date | undefined>(
    controlledDate ?? new Date(),
  );
  const isControlled = controlledDate !== undefined;
  const date = isControlled ? controlledDate : internalDate;
  const [month, setMonth] = useState<Date | undefined>(date);
  const [value, setValue] = useState(formatDate(date));
  const [prevDate, setPrevDate] = useState(date);
  const dateTime = date?.getTime();
  const prevDateTime = prevDate?.getTime();
  const id = "input-date-picker";

  const setDate = (next: Date | undefined) => {
    setPrevDate(next);
    if (!isControlled) setInternalDate(next);
    onDateChange?.(next);
  };

  if (dateTime !== prevDateTime) {
    setPrevDate(date);
    setValue(formatDate(date));
    setMonth(date);
  }
  return (
    <Field className={cn("max-w-auto w-48", className)}>
      <CommonFieldLabel
        htmlFor={id}
        label={label}
        className={labelClassName}
        required={required}
      />
      <InputGroup>
        <InputGroupInput
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            const date = new Date(e.target.value);
            setValue(e.target.value);
            if (isValidDate(date)) {
              setDate(date);
              setMonth(date);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setOpen(true);
            }
          }}
        />
        <InputGroupAddon align="inline-end">
          <CommonPopover
            open={open}
            onOpenChange={setOpen}
            trigger={
              <InputGroupButton
                id={id}
                aria-label="Select date"
                variant="ghost"
                size="icon-xs"
              >
                <CalendarIcon />
                <span className="sr-only">Select date</span>
              </InputGroupButton>
            }
          >
            <Calendar
              mode="single"
              selected={date}
              month={month}
              onMonthChange={setMonth}
              onSelect={(date) => {
                setDate(date);
                setValue(formatDate(date));
                setOpen(false);
              }}
            />
          </CommonPopover>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
};

export default InputDatePicker;
