import { Eye, EyeOff } from "lucide-react";

export const loginList = [
  {
    label: "Email",
    name: "username",
    type: "text",
    placeholder: "Enter your Email Address",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your Password",
    active_icon: <Eye size={16} />,
    inactive_icon: <EyeOff size={16} />,
  },
];

