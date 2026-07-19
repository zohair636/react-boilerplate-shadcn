import { ButtonGroupSeparator } from "@/components/ui/button-group";
import type { ButtonGroupItem } from "./common-button-group.types";
import CommonButton from "../button/common-button";
import { CommonDropdown } from "../dropdown";
import { CommonPopover } from "../popover";
import { CommonInput } from "../input";
import { Fragment, type ReactNode } from "react";

export const renderItem = (item: ButtonGroupItem) => {
  switch (item.type) {
    case "separator":
      return <ButtonGroupSeparator key={item.key} />;

    case "button":
      return <CommonButton key={item.key} {...item.props} />;

    case "dropdown":
      return <CommonDropdown key={item.key} {...item.props} />;

    case "popover":
      return <CommonPopover key={item.key} {...item.props} />;

    case "input":
      return <CommonInput key={item.key} {...item.props} />;

    case "custom":
      return <Fragment key={item.key}>{item.render()}</Fragment>;

    default: {
      const _exhaustiveCheck: never = item;
      return _exhaustiveCheck;
    }
  }
};

export const withInjectedSeparators = (
  items: ButtonGroupItem[],
): ReactNode[] => {
  return items.flatMap((item, index) => {
    const rendered = renderItem(item);
    if (index === 0) return [rendered];
    const previousItem = items[index - 1];
    return [
      <ButtonGroupSeparator key={`sep-${previousItem.key}-${item.key}`} />,
      rendered,
    ];
  });
};
