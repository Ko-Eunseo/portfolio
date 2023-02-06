import { ItemProps } from "@/types/types";
import common from "@/styles/common/common.module.scss";
import styles from "@/styles/layouts/education.module.scss";
import { splitBy } from "@/hooks/filtering";

const EducationItem = (data: ItemProps) => {
  const { title, content, period, tags, subtitle, subContent } = data;
  const badges = splitBy(subContent!, "•");
  return (
    <section className={styles.edu_board}>
      <div>
        <h3
          className={`${common.stroke_title} 
          ${styles.edu_board_title}`}
        >
          {title}
        </h3>
        <span className={common.period}>{period}</span>
        <h4 className={styles.edu_board_subtitle}>{subtitle}</h4>
        <section className={styles.edu_board_content}>{content}</section>
      </div>
      <div className={styles.edu_board_badges}>
        {badges?.map((badge, i) => (
          <span
            key={i}
            className={`${common.round_btn} ${styles.edu_board_span}`}
          >
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
};

export default EducationItem;
