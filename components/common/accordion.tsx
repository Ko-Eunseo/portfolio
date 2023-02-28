import common from "@/styles/common/common.module.scss";
import { ItemProps } from "@/types/types";
import useToggle from "@/hooks/useToogle";

const Accordion = ({ subtitle, content }: ItemProps) => {
  const [isOpen, setOpenAccordion] = useToggle(true);
  const openAccordion = () => {
    setOpenAccordion();
  };

  return (
    <>
      <button className={common.accordion} onClick={openAccordion}>
        {subtitle}
      </button>
      <div
        className={`${common.accordion_pannel} ${isOpen ? common.is_open : ""}`}
      >
        <p>{content}</p>
      </div>
    </>
  );
};

export default Accordion;
