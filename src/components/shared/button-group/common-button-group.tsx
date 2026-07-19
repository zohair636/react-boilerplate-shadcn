import type { CommonButtonGroupProps } from "./common-button-group.types";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  renderItem,
  withInjectedSeparators,
} from "./common-button-group.utils";

const CommonButtonGroup = ({
  items,
  widthSeparator = false,
  ...rest
}: CommonButtonGroupProps) => {
  if (!items?.length) return null;

  const rendered = items.map(renderItem);
  const content = widthSeparator ? withInjectedSeparators(rendered) : rendered;
  return <ButtonGroup {...rest}>{content}</ButtonGroup>;
};

export default CommonButtonGroup;
