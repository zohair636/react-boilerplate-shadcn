import type { CommonDatePickerProps } from "./common-date-picker.types";
import SingleDatePicker from "./components/single-date-picker";
import RangeDatePicker from "./components/range-date-picker";
import InputDatePicker from "./components/input-date-picker";

const CommonDatePicker = (props: CommonDatePickerProps) => {
  switch (props.mode) {
    case "single":
      return <SingleDatePicker {...props} />;

    case "range":
      return <RangeDatePicker {...props} />;

    case "input":
      return <InputDatePicker {...props} />;

    default:
      return null;
  }
};

export default CommonDatePicker;
