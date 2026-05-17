import { CommonAlertDialog } from "@/components/shared/alert-dialog";
import CommonButton from "@/components/shared/button";

const Landing = () => {
  return (
    <div>
      <p>Landing Page</p>
      <CommonAlertDialog
        trigger={<CommonButton label="Open" />}
        title="Dialog"
        confirm={{ label: "Yes, sure", variant: 'destructive' }}
      />
    </div>
  );
};

export default Landing;
