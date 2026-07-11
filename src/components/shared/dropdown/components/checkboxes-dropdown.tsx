import {
  DropdownMenuCheckboxItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { RenderIcon } from "@/utils/icon-utils";
import { Fragment } from "react";
import type { CheckboxesDropdownModeProps } from "../common-dropdown-types";

const CheckboxesDropdown = ({
  options,
  itemClassName,
}: CheckboxesDropdownModeProps) => {
  return (
    <>
      {options.map((option) => {
        const items = option.items || [];
        return (
          <Fragment key={option.id}>
            <DropdownMenuGroup>
              <DropdownMenuLabel>{option.label}</DropdownMenuLabel>
              {items.map((item) => {
                const {
                  label,
                  value,
                  disabled,
                  icon,
                  shortcut,
                  checked,
                  onCheckedChange,
                } = item;
                const itemKey = value;
                return (
                  <Fragment key={itemKey}>
                    <DropdownMenuCheckboxItem
                      checked={checked}
                      onCheckedChange={onCheckedChange}
                      disabled={disabled}
                    >
                      {icon && <RenderIcon src={icon} />}
                      <span
                        className={cn("truncate min-w-0 flex-1", itemClassName)}
                      >
                        {label}
                      </span>
                      <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>
                    </DropdownMenuCheckboxItem>
                  </Fragment>
                );
              })}
            </DropdownMenuGroup>
          </Fragment>
        );
      })}
    </>
  );
};

export default CheckboxesDropdown;
