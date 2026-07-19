import type { CommonButtonGroupProps } from "./common-button-group.types";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  renderItem,
  withInjectedSeparators,
} from "./common-button-group.utils";

const CommonButtonGroup = ({
  items,
  widthSeparators = false,
  ...rest
}: CommonButtonGroupProps) => {
  if (!items?.length) return null;

  const content = widthSeparators
    ? withInjectedSeparators(items)
    : items.map(renderItem);

  return <ButtonGroup {...rest}>{content}</ButtonGroup>;
};

export default CommonButtonGroup;
