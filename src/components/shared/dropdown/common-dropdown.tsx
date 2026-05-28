import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { CommonDropdownProps } from "./common-dropdown-types";
import { Fragment } from "react";
import { RenderIcon } from "@/utils/icon-utils";
import { cn } from "@/lib/utils";

const CommonDropdown = ({
  trigger,
  options,
  className,
  itemClassName,
}: CommonDropdownProps) => {
  if (!options?.length) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className={cn("w-auto max-w-56", className)}>
        {options.map((option, optionIndex) => {
          const items = option.items || [];
          return (
            <DropdownMenuGroup key={`${option.label}-${optionIndex}`}>
              {option.label && (
                <DropdownMenuLabel>{option.label}</DropdownMenuLabel>
              )}
              {items.map((item, itemIndex) => {
                const {
                  label,
                  value,
                  disabled,
                  icon,
                  onClick,
                  shortcut,
                  variant = 'default',
                  subOptions,
                } = item;
                const itemKey = `${option.label ?? "group"}-${value}-${itemIndex}`;
                return (
                  <Fragment key={itemKey}>
                    <DropdownMenuItem
                      onClick={onClick}
                      disabled={disabled}
                      variant={variant}
                    >
                      <RenderIcon src={icon} />
                      <span
                        className={cn("truncate min-w-0 flex-1", itemClassName)}
                      >
                        {label}
                      </span>
                      <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    {!!subOptions?.length && (
                      <>
                        <DropdownMenuSeparator />
                        {subOptions.map((subOption, subIndex) => {
                          const {
                            label,
                            value,
                            onClick,
                            disabled,
                            icon,
                            shortcut,
                            variant = 'default',
                          } = subOption;
                          return (
                            <DropdownMenuItem
                              key={`${itemKey}-${value}-${subIndex}`}
                              onClick={onClick}
                              disabled={disabled}
                              variant={variant}
                            >
                              <RenderIcon src={icon} />
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CommonDropdown;
