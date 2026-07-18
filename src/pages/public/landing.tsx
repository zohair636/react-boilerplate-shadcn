import { CommonCombobox } from "@/components/shared/combobox";
import { useState } from "react";

type Options = {
  label: string;
  value: string;
};

const Landing = () => {
  const options: Options[] = [
    { label: "React", value: "react" },
    { label: "Next", value: "next" },
    { label: "Python", value: "python" },
    { label: "Flask", value: "flask" },
    { label: "FastAPI", value: "fast_api" },
  ];
  const [selectOption, setSelectOption] = useState("");

  const selectLabel = options.find((opt) => opt.value === selectOption)?.label

  return (
    <div>
      <p>Landing Page</p>
      <CommonCombobox
        label="Options"
        options={options}
        placeholder="Select Library/Framework"
        value={selectOption}
        onChange={setSelectOption}
        variant="default"
      />
      <p>Selected option: {selectLabel}</p>
    </div>
  );
};

export default Landing;
