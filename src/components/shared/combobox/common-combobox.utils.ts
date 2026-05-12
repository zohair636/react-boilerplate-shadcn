import type { SelectableItem } from "./common-combobox.types";

export const getOptionValue = (option: SelectableItem) => {
  return typeof option === "string" ? option : option.value;
};

export const getOptionLabel = (option: SelectableItem) => {
  return typeof option === "string" ? option : option.label;
};
