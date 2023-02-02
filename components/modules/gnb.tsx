import GnbItem from "../atoms/gnbItem";
import styles from "@/styles/layouts/header.module.scss";
import common from "@/styles/common/common.module.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

const Gnb = ({ isOpen }: { isOpen: boolean }) => {
  const menu = [
    {
      title: "About me",
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
    <nav className={`${styles.gnb}`}>
      <ul className={`${styles.gnb_wrapper} ${isOpen ? styles.is_open : ""}`}>
        {menu.map((el, i) => {
          return <GnbItem key={i} title={el.title} />;
        })}
      </ul>
    </nav>
  );
};

export default Gnb;
