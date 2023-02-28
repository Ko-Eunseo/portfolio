import { ItemProps } from "@/types/types";
import styles from "@/styles/layouts/skill.module.scss";
import common from "@/styles/common/common.module.scss";
import React from "react";
import LogoImgs from "./skillLogo";

const SkillItem = (data: ItemProps): JSX.Element => {
  const { subtitle, content, className, image } = data;
  return (
    <li
      className={`${styles.skill_item} ${styles.card}
      ${styles.is_carousel_item} ${className}`}
    >
      <section className={styles.card_section}>
        <div className={styles.card_section_bg}>
          <LogoImgs image={image as string} />
        </div>
        <div className={styles.card_section_overlay}>
          <div className={styles.card_section_header}>
            <h3 className={`${common.stroke_title} ${styles.card_title}`}>
              {subtitle}
            </h3>
          </div>
          <p className={styles.card_section_description}>{content}</p>
        </div>
      </section>
    </li>
  );
};

export default SkillItem;
