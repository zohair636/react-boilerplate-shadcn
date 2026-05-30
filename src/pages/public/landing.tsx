import { CommonDropdown } from "@/components/shared/dropdown";
import { useState } from "react";

const Landing = () => {
  const [checked, setChecked] = useState<string[]>([]);

  const handleChecked = (value: string , checkedValue: boolean) => {
    if(!checkedValue){
      setChecked(prev => prev.filter(i => i !== value))
    } else {
      setChecked(prev => [...prev, value])
    }
  };

  const options = [
    {
      label: "Group 1",
      items: [
        {
          label: "Option 1",
          value: "option1",
          checked: checked.includes("option1"),
          onCheckedChange: (checked: boolean) => handleChecked("option1", checked),
        },
        {
          label: "Option 2",
          value: "option2",
          checked: checked.includes("option2"),
          onCheckedChange: (checked: boolean) => handleChecked("option2", checked),
        },
      ],
    },
    {
      label: "Group 2",
      items: [
        {
          label: "Option 3",
          value: "option3",
          checked: checked.includes("option3"),
          onCheckedChange: (checked: boolean) => handleChecked("option3", checked),
        },
        {
          label: "Option 4",
          value: "option4",
          checked: checked.includes("option4"),
          onCheckedChange: (checked: boolean) => handleChecked("option4", checked),
        },
      ],
    },
  ];

  console.log(checked)
  return (
    <div>
      <p>Landing Page</p>
      <CommonDropdown
        mode="checkboxes"
        options={options}
        trigger={<button>Open Dropdown</button>}
      />
    </div>
  );
};

export default Landing;
