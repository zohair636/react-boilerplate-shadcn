import { Calendar } from "@/components/ui/calendar";
import type { CommonDatePickerProps } from "./common-date-picker.types";
import { CommonPopover } from "../popover";
import { CommonButton } from "../button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import { CommonLabel } from "../label";
import { Field } from "@/components/ui/field";
import CommonFieldLabel from "../label/field-label";

const CommonDatePicker = (props: CommonDatePickerProps) => {
  const renderItems = () => {
    if (props.mode === "single") {
      const {
        select,
        onSelect,
        open,
        onOpenChange,
        label = "Pick a date",
        labelClassName,
        placeholder,
        triggerClassName,
        captionLayout,
        showWeekNumber,
        disabled,
      } = props;
      return (
        <CommonPopover
          open={open}
          onOpenChange={onOpenChange}
          trigger={
            <>
              <CommonLabel
                label={label}
                className={cn("mb-2", labelClassName)}
              />
              <CommonButton
                label={
                  select ? format(select, "PPP") : <span>{placeholder}</span>
                }
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
        </CommonPopover>
      );
    }
    if (props.mode === "range") {
      const {
        select,
        onSelect,
        open,
        onOpenChange,
        label = "Pick a date range",
        className,
        triggerClassName,
        labelClassName,
        placeholder,
        numberOfMonths,
      } = props;
      return (
        <Field className={cn("w-60", className)}>
          <CommonFieldLabel label={label} className={labelClassName} />
          <CommonPopover
            open={open}
            onOpenChange={onOpenChange}
            trigger={
              <CommonButton
                label={
                  select?.from ? (
                    select?.to ? (
                      <>
                        {format(select.from, "LLL dd, y")} -{" "}
                        {format(select.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(select.from, "LLL dd, y")
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
              defaultMonth={select?.from}
              selected={select}
              onSelect={onSelect}
              numberOfMonths={numberOfMonths}
            />
          </CommonPopover>
        </Field>
      );
    }
  };
  return <>{renderItems() ?? null}</>;
};

export default CommonDatePicker;
