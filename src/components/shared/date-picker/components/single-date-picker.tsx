import { CommonPopover } from "../../popover";
import { CommonLabel } from "../../label";
import { CommonButton } from "../../button";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import type { SingleDatePickerProps } from "../common-date-picker.types";

const SingleDatePicker = ({
  open,
  onOpenChange,
  label,
  labelClassName,
  placeholder,
  value,
  onChange,
  disabled,
  captionLayout,
  showWeekNumber,
  triggerClassName,
}: SingleDatePickerProps) => {
  return (
    <CommonPopover
      open={open}
      onOpenChange={onOpenChange}
      trigger={
        <>
          <CommonLabel label={label} className={cn("mb-2", labelClassName)} />
          <CommonButton
            label={value ? format(value, "PPP") : <span>{placeholder}</span>}
            variant="outline"
            data-empty={!value}
            className={cn(
              "w-53 justify-between text-left font-normal data-[empty=true]:text-muted-foreground",
              triggerClassName,
            )}
            rightIcon={<ChevronDownIcon data-icon="inline-end" />}
            disabled={disabled}
          />
        </>
      }
    >
      <Calendar
        mode="single"
        selected={value}
        onSelect={(date) => {
          onChange?.(date);
          onOpenChange?.(false);
        }}
        captionLayout={captionLayout}
        defaultMonth={value}
        showWeekNumber={showWeekNumber}
        disabled={disabled}
      />
    </CommonPopover>
  );
};

export default SingleDatePicker;
