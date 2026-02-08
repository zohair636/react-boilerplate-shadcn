import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PasswordAuthenticatorProps } from "../../types/password-authenticator-types";
import { PASSWORD_REQUIREMENTS } from "../../constants/password-requirements";

const PasswordAuthenticator = ({
  trigger,
  password,
  open,
  onOpenChange,
}: PasswordAuthenticatorProps) => {
  const requirements = PASSWORD_REQUIREMENTS;
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent
        className="w-full sm:w-80 p-4 bg-white border border-grey-100 shadow-lg rounded-xl z-50 text-sm"
        side="bottom"
        align="start"
        onFocus={(e) => e.preventDefault()}
      >
        <div className="space-y-3">
          <p className="font-semibold text-grey-900">Password requirements:</p>
          <ul className="space-y-2">
            {requirements.map((req, index) => {
              const isMet = req.regex.test(password || "");
              const isEmpty = !password;

              let colorClass = "text-grey-300";
              let icon = (
                <div className="w-1.5 h-1.5 rounded-full bg-grey-300 mr-2" />
              );

              if (!isEmpty) {
                if (isMet) {
                  colorClass = "text-success-500";
                  icon = <Check className="w-4 h-4 mr-2" />;
                } else {
                  colorClass = "text-error-500";
                }
              }

              return (
                <li
                  key={index}
                  className={cn(
                    "flex items-center text-xs sm:text-sm transition-colors",
                    colorClass,
                  )}
                >
                  {icon}
                  {req.label}
                </li>
              );
            })}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PasswordAuthenticator;
