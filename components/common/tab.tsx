import common from "@/styles/common/common.module.scss";
import { TabProps } from "@/types/types";
const Tab = ({ subtitle, onClick, curTab, children }: TabProps) => {
  return (
    <button
      className={`${common.round_btn} ${curTab ? common.is_active : ""}`}
      onClick={onClick}
    >
      {subtitle || children}
    </button>
  );
};
export default Tab;
