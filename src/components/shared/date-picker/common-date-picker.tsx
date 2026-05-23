import { Calendar } from "@/components/ui/calendar";
import type { CommonDatePickerProps } from "./common-date-picker.types";
import { CommonPopover } from "../popover";
import { CommonButton } from "../button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { CommonLabel } from "../label";

const CommonDatePicker = ({
  label,
  placeholder = "Pick a date",
  select,
  onSelect,
  open,
  onOpenChange,
  mode = "single",
  captionLayout = "label",
  triggerClassName,
  labelClassName,
  showWeekNumber,
  disabled,
}: CommonDatePickerProps) => {
  const renderItems = () => {
    if (mode === "single") {
      return (
        <Calendar
          mode="single"
          selected={select}
          onSelect={(date) => {
            onSelect?.(date);
            onOpenChange?.(false);
          }}
          required
          captionLayout={captionLayout}
          defaultMonth={select}
          showWeekNumber={showWeekNumber}
          disabled={disabled}
        />
      );
    }
  };
  return (
    <CommonPopover
      open={open}
      onOpenChange={onOpenChange}
      trigger={
        <>
          <CommonLabel label={label} className={cn("mb-2", labelClassName)} />
          <CommonButton
            label={select ? format(select, "PPP") : <span>{placeholder}</span>}
            variant="outline"
            data-empty={!select}
            className={cn(
              "w-53 justify-between text-left font-normal data-[empty=true]:text-muted-foreground",
              triggerClassName,
            )}
            rightIcon={<ChevronDownIcon data-icon="inline-end" />}
          />
        </>
      }
    >
      {renderItems()}
    </CommonPopover>
  );
};

export default CommonDatePicker;
