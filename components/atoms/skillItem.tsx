import { ItemProps } from "@/types/types";
import styles from "@/styles/layouts/skill.module.scss";
import common from "@/styles/common/common.module.scss";

import React from "react";

const SkillItem = (data: ItemProps) => {
  const { subtitle, content, image, className } = data;
  return (
    <li
      className={`${styles.skill_item} ${styles.card}
      ${styles.is_carousel_item} ${className}`}
    >
      <section className={styles.card_section}>
        <h3 className={`${common.stroke_title} ${styles.card_title}`}>
          {subtitle}
        </h3>
        <p>{content}</p>
      </section>
    </li>
  );
};

export default SkillItem;
