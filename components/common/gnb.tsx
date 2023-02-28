import GnbItem from "./gnbItem";
import styles from "@/styles/layouts/header.module.scss";
import common from "@/styles/common/common.module.scss";

const Gnb = ({ isOpen }: { isOpen: boolean }) => {
  const menu = [
    {
      title: "About Me",
    },
    { title: "Education" },
    {
      title: "Project",
    },
    {
      title: "Contact",
    },
  ];

  return (
    <>
      <nav className={`${styles.gnb}`}>
        <ul className={`${styles.gnb_wrapper} ${isOpen ? styles.is_open : ""}`}>
          {menu.map((el, i) => {
            return <GnbItem key={i} title={el.title} />;
          })}
        </ul>
      </nav>
    </>
  );
};

export default Gnb;
