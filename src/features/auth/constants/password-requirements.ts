export const PASSWORD_REQUIREMENTS = [
  { label: "At least one uppercase", regex: /[A-Z]/ },
  { label: "At least one lowercase", regex: /[a-z]/ },
  {
    label: "At least one special character",
    regex: /[!@#$%^&*(),.?":{}|<>]/,
  },
  { label: "At least one number", regex: /[0-9]/ },
  { label: "Minimum 6 characters and max 20", regex: /^.{6,20}$/ },
];
