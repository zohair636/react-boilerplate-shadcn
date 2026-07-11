import {
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { RenderIcon } from "@/utils/icon-utils";
import { Fragment } from "react";
import type { RadioGroupDropdownModeProps } from "../common-dropdown-types";

const RadioGroupsDropdown = ({
  options,
  value,
  onValueChange,
  itemClassName,
}: RadioGroupDropdownModeProps) => {
  return (
    <>
      <DropdownMenuGroup>
        {options.map((option) => {
          const items = option.items || [];
          return (
            <Fragment key={option.id}>
              <DropdownMenuLabel>{option.label}</DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={value}
                onValueChange={onValueChange}
              >
                {items.map((item) => {
                  const { label, value, icon } = item;
                  const itemKey = value;
                  return (
                    <DropdownMenuRadioItem key={itemKey} value={value}>
                      {icon && <RenderIcon src={icon} />}
                      <span
                        className={cn("truncate min-w-0 flex-1", itemClassName)}
                      >
                        {label}
                      </span>
                    </DropdownMenuRadioItem>
                  );
                })}
              </DropdownMenuRadioGroup>
            </Fragment>
          );
        })}
      </DropdownMenuGroup>
    </>
  );
};

export default RadioGroupsDropdown;
