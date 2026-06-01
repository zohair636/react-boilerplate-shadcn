import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { CommonDropdownProps } from "./common-dropdown-types";
import { Fragment } from "react";
import { RenderIcon } from "@/utils/icon-utils";
import { cn } from "@/lib/utils";

const CommonDropdown = (props: CommonDropdownProps) => {
  const { mode, options, trigger, className, itemClassName } = props;

  if (!options?.length) return null;

  const renderItems = () => {
    if (mode === "default") {
      return (
        <>
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
                    variant = "default",
                    subOptions,
                    subMenu,
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
                          className={cn(
                            "truncate min-w-0 flex-1",
                            itemClassName,
                          )}
                        >
                          {label}
                        </span>
                        <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      {subMenu?.map((subMenuGroup, subMenuGroupIndex) => {
                        const { label, items } = subMenuGroup;
                        return (
                          <DropdownMenuSub
                            key={`${itemKey}-subMenu-${subMenuGroupIndex}`}
                          >
                            <DropdownMenuSubTrigger>
                              {label}
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent
                                className={cn("w-auto max-w-56", className)}
                              >
                                {items?.map((subMenuItem, subMenuIndex) => {
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
                                      key={`${itemKey}-${value}-${subMenuIndex}`}
                                      onClick={onClick}
                                      disabled={disabled}
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
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                        );
                      })}
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
                              variant = "default",
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
        </>
      );
    }
    if (mode === "checkboxes") {
      return (
        <>
          {options.map((option, index) => {
            const items = option.items || [];
            return (
              <Fragment key={`${option.label}-${index}`}>
                <DropdownMenuGroup>
                  <DropdownMenuLabel>{option.label}</DropdownMenuLabel>
                  {items.map((item, itemIndex) => {
                    const {
                      label,
                      value,
                      disabled,
                      icon,
                      shortcut,
                      checked,
                      onCheckedChange,
                    } = item;
                    const itemKey = `${option.label ?? "group"}-${value}-${itemIndex}`;
                    return (
                      <Fragment key={itemKey}>
                        <DropdownMenuCheckboxItem
                          checked={checked}
                          onCheckedChange={onCheckedChange}
                          disabled={disabled}
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
    }
    if (mode === "radio-groups") {
      return (
        <>
          <DropdownMenuGroup>
            {options.map((option, optionIndex) => {
              const items = option.items || [];
              return (
                <Fragment key={`${option.label}-${optionIndex}`}>
                  <DropdownMenuLabel>{option.label}</DropdownMenuLabel>
                  <DropdownMenuRadioGroup
                    value={props.value}
                    onValueChange={props.onValueChange}
                  >
                    {items.map((item, itemIndex) => {
                      const { label, value } = item;
                      const itemKey = `${option.label ?? "group"}-${value}-${itemIndex}`;
                      return (
                        <DropdownMenuRadioItem key={itemKey} value={value}>
                          <RenderIcon src={item.icon} />
                          <span
                            className={cn(
                              "truncate min-w-0 flex-1",
                              itemClassName,
                            )}
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
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className={cn("w-auto max-w-56", className)}>
        {renderItems()}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CommonDropdown;
