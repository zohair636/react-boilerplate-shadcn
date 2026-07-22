import { cn } from "@/lib/utils";
import { CommonPopover } from "../../popover";
import { CommonButton } from "../../button";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import type { DateRangePickerProps } from "../common-date-picker.types";
import { useId } from "react";

const RangeDatePicker = ({
  id,
  open,
  onOpenChange,
  value,
  onChange,
  placeholder,
  numberOfMonths,
  triggerClassName,
}: DateRangePickerProps) => {
  const generateId = useId();
  const fieldId = id ?? generateId;
  return (
    <CommonPopover
      open={open}
      onOpenChange={onOpenChange}
      trigger={
        <CommonButton
          id={fieldId}
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
  );
};

export default RangeDatePicker;
