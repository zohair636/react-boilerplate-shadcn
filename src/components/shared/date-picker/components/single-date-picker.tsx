import { CommonPopover } from "../../popover";
import { CommonButton } from "../../button";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import type { SingleDatePickerProps } from "../common-date-picker.types";
import { useId } from "react";

const SingleDatePicker = ({
  id,
  open,
  onOpenChange,
  placeholder,
  value,
  onChange,
  disabled,
  captionLayout,
  showWeekNumber,
  triggerClassName,
}: SingleDatePickerProps) => {
  const generateId = useId();
  const fieldId = id ?? generateId;
  return (
    <CommonPopover
      open={open}
      onOpenChange={onOpenChange}
      trigger={
        <CommonButton
          id={fieldId}
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
