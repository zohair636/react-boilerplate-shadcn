import { CommonDatePicker } from "@/components/shared/date-picker";
import { useState } from "react";

const Landing = () => {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <div>
      <p>Landing Page</p>
      <CommonDatePicker
        label="Select Date"
        select={date}
        onSelect={setDate}
        captionLayout="dropdown"
      />
    </div>
  );
};

export default Landing;
