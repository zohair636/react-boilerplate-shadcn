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

export const withInjectedSeparators = (nodes: ReactNode[]): ReactNode[] => {
  return nodes.flatMap((node, index) => {
    if (index === 0) return [node];
    return [<ButtonGroupSeparator key={`auto-separator-${index}`} />, node];
  });
};
