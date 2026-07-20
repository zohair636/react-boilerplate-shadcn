import { Field } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import CommonFieldLabel from "../../label/field-label";
import { CommonPopover } from "../../popover";
import { CommonButton } from "../../button";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import type { DateRangePickerProps } from "../common-date-picker.types";

const RangeDatePicker = ({
  open,
  onOpenChange,
  label,
  value,
  onChange,
  placeholder,
  numberOfMonths,
  labelClassName,
  triggerClassName,
  className,
}: DateRangePickerProps) => {
  return (
    <Field className={cn("w-60", className)}>
      <CommonFieldLabel label={label} className={labelClassName} />
      <CommonPopover
        open={open}
        onOpenChange={onOpenChange}
        trigger={
          <CommonButton
            label={
              value?.from ? (
                value?.to ? (
                  <>
                    {format(value.from, "LLL dd, y")} -{" "}
                    {format(value.to, "LLL dd, y")}
                  </>
                ) : (
                  format(value.from, "LLL dd, y")
                )
              ) : (
                <span>{placeholder}</span>
              )
            }
            variant="outline"
            className={cn(
              "justify-start px-2.5 font-normal w-full",
              triggerClassName,
            )}
            leftIcon={<CalendarIcon data-icon="inline-start" />}
          />
        }
        className="w-auto p-0"
      >
        <Calendar
          mode="range"
          defaultMonth={value?.from}
          selected={value}
          onSelect={onChange}
          numberOfMonths={numberOfMonths}
        />
      </CommonPopover>
    </Field>
  );
};

export default RangeDatePicker;
