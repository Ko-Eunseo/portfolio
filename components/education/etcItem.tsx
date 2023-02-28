import styles from "@/styles/layouts/etc.module.scss";
import common from "@/styles/common/common.module.scss";
import { ItemProps } from "@/types/types";

const EtcItem = ({ subtitle, period, content }: ItemProps) => {
  return (
    <>
      <section className={styles.etc_section}>
        <h3 className={styles.etc_title}>{subtitle}</h3>
        <span className={common.period}>{period}</span>
        <p className={styles.etc_content}>{content}</p>
      </section>
    </>
  );
};

export default EtcItem;
