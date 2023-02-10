import Gnb from "../modules/gnb";
import Logo from "../atoms/logo";
import styles from "@/styles/layouts/header.module.scss";
import useToggle from "@/hooks/useToogle";
import Overlay from "../atoms/overlay";

const Header = () => {
  const [isOpen, setToggle] = useToggle(false);
  const toggleNav = () => {
    setToggle();
  };
  return (
    <>
      {isOpen ? <Overlay /> : null}
      <header
        className={`${styles.header} ${isOpen ? styles.menu_is_active : ""}`}
      >
        <div className={styles.header_title}>
          <Logo />
          <button className={`${styles.gnb_btn}`} onClick={toggleNav}>
            {isOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
        <Gnb isOpen={isOpen} />
      </header>
    </>
  );
};

export default Header;
