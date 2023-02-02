import styles from "@/styles/layouts/footer.module.scss";
import common from "@/styles/common/common.module.scss";
import Contact from "../modules/common/contact";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <h1 className={`${common.stroke_title} ${styles.footer_title}`}>
          Contact Me
        </h1>
        <div className={styles.footer_contents}>
          <p className={styles.footer_paragraph}>
            적어도 이틀에 한번 메일을 체크하고 있습니다.
            <br />
            기술적인 목적이든 개인적인 목적이든 전하고 싶은 말이 있다면 연락
            주세요!
            <br />
            어떤 이야기가 되었든지 환영합니다.
            <br />
            열린 태도로 이야기 나눌 준비가 되어 있습니다.
          </p>
          <Contact />
        </div>
      </footer>
    </>
  );
};

export default Footer;
