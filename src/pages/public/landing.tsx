import CommonButton from "@/components/shared/button";
import { CommonDialog } from "@/components/shared/dialog";

const Landing = () => {
  return (
    <div>
      <p>Landing Page</p>
      <CommonDialog
        trigger={<CommonButton label="Open Dialog" />}
        title="Dialog"
        description="This is common dialog"
        showCloseControls={true}
        confirm={{ label: "Proceed" }}
        // cancel={{label: 'Cancel'}}
      >
        <h1>Common Dialog</h1>
      </CommonDialog>
    </div>
  );
};

export default Landing;
