import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { RenderIcon } from "@/utils/icon-utils";
import { Fragment } from "react";
import type { DefaultDropdownModeProps } from "../common-dropdown-types";

const DefaultDropdown = ({
  options,
  itemClassName,
  className,
}: DefaultDropdownModeProps) => {
  return (
    <>
      {options.map((option) => {
        const items = option.items || [];
        return (
          <DropdownMenuGroup key={option.id}>
            {option.label && (
              <DropdownMenuLabel>{option.label}</DropdownMenuLabel>
            )}
            {items.map((item) => {
              const {
                label,
                value,
                disabled,
                icon,
                onClick,
                shortcut,
                variant = "default",
                subOptions,
                subMenu,
              } = item;
              const itemKey = value;
              return (
                <Fragment key={itemKey}>
                  <DropdownMenuItem
                    onClick={onClick}
                    disabled={disabled}
                    variant={variant}
                  >
                    {icon && <RenderIcon src={icon} />}
                    <span
                      className={cn("truncate min-w-0 flex-1", itemClassName)}
                    >
                      {label}
                    </span>
                    <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  {subMenu?.map((subMenuGroup) => {
                    const { id, label, items } = subMenuGroup;
                    const subMenuKey = `${itemKey}-${id}`;
                    return (
                      <DropdownMenuSub key={subMenuKey}>
                        <DropdownMenuSubTrigger>{label}</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent
                            className={cn("w-auto max-w-56", className)}
                          >
                            {items?.map((subMenuItem) => {
                              const {
                                label,
                                value,
                                disabled,
                                icon,
                                onClick,
                                shortcut,
                              } = subMenuItem;
                              return (
                                <DropdownMenuItem
                                  key={value}
                                  onClick={onClick}
                                  disabled={disabled}
                                >
                                  {icon && <RenderIcon src={icon} />}
                                  <span
                                    className={cn(
                                      "truncate min-w-0 flex-1",
                                      itemClassName,
                                    )}
                                  >
                                    {label}
                                  </span>
                                  <DropdownMenuShortcut>
                                    {shortcut}
                                  </DropdownMenuShortcut>
                                </DropdownMenuItem>
                              );
                            })}
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    );
                  })}
                  {!!subOptions?.length && (
                    <>
                      <DropdownMenuSeparator />
                      {subOptions.map((subOption) => {
                        const {
                          label,
                          value,
                          onClick,
                          disabled,
                          icon,
                          shortcut,
                          variant = "default",
                        } = subOption;
                        return (
                          <DropdownMenuItem
                            key={value}
                            onClick={onClick}
                            disabled={disabled}
                            variant={variant}
                          >
                            {icon && <RenderIcon src={icon} />}
                            <span
                              className={cn(
                                "truncate min-w-0 flex-1",
                                itemClassName,
                              )}
                            >
                              {label}
                            </span>
                            <DropdownMenuShortcut>
                              {shortcut}
                            </DropdownMenuShortcut>
                          </DropdownMenuItem>
                        );
                      })}
                    </>
                  )}
                </Fragment>
              );
            })}
          </DropdownMenuGroup>
        );
      })}
    </>
  );
};

export default DefaultDropdown;
