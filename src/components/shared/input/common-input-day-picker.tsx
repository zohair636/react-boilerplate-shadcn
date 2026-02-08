import { useState, useMemo } from "react";
import { format, startOfMonth } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CommonInput from "./common-input";
import CommonLabel from "../label/common-label";
import type { CommonInputDayPickerProps } from "./types";

const CommonInputDayPicker = ({
  label,
  placeholder = "MM/DD/YYYY",
  value,
  onChange,
  className,
  disabled,
  error,
  required,
  labelClassName,
  suppressErrorMessage = false,
  minDate,
  maxDate,
}: CommonInputDayPickerProps) => {
  const [open, setOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const rawDate = value
    ? typeof value === "string"
      ? new Date(value)
      : value
    : undefined;
  const date =
    rawDate instanceof Date && !Number.isNaN(rawDate.getTime())
      ? rawDate
      : undefined;

  const calendarProps = useMemo(() => {
    const props: {
      startMonth?: Date;
      endMonth?: Date;
      disabled?: Array<{ before: Date } | { after: Date }>;
    } = {};
    if (minDate) {
      props.startMonth = startOfMonth(minDate);
      props.disabled = [...(props.disabled ?? []), { before: minDate }];
    }
    if (maxDate) {
      props.endMonth = startOfMonth(maxDate);
      props.disabled = [
        ...(props.disabled ?? []),
        { after: maxDate },
      ];
    }
    return props;
  }, [minDate, maxDate]);

  const handleSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      onChange?.(selectedDate);
      setOpen(false);
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {label && label.trim() !== "" && (
        <CommonLabel
          label={label}
          required={required}
          className={cn("mb-2", labelClassName)}
        />
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <button
            type="button"
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full text-left bg-transparent border-0 p-0 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none"
            aria-label="Select date"
          >
            <CommonInput
              label=""
              placeholder={placeholder}
              value={date ? format(date, "MM/dd/yyyy") : ""}
              onChange={() => {}}
              leftIcon={
                <CalendarIcon className="h-4 w-4 text-muted-foreground" />
              }
              disabled={disabled}
              readOnly
              isFocused={isFocused || open}
              className={cn(error && "border-destructive", "cursor-pointer")}
            />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 z-80" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            initialFocus
            captionLayout="dropdown"
            fromYear={1900}
            toYear={new Date().getFullYear() + 100}
            {...(calendarProps.startMonth != null && {
              startMonth: calendarProps.startMonth,
            })}
            {...(calendarProps.endMonth != null && {
              endMonth: calendarProps.endMonth,
            })}
            {...(calendarProps.disabled != null &&
              calendarProps.disabled.length > 0 && {
                disabled: calendarProps.disabled,
              })}
          />
        </PopoverContent>
      </Popover>
      {error && !suppressErrorMessage && (
        <p className="flex items-center gap-1 error-message mt-2.5 text-sm text-destructive">{error}</p>
      )}
    </div>
  );
};

export default CommonInputDayPicker;
