import { filterByTitle } from "@/hooks/filtering";
import useSWR from "swr";
import styles from "@/styles/layouts/skill.module.scss";
import SkillItem from "@/components/atoms/skillItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const MySkill = () => {
  const { data } = useSWR("/api/notion");
  const title = "My skill";
  const skills = filterByTitle(data, title);
  const [cur, setCur] = useState<number>(0);
  const showSlide = (n: number) => {
    if (cur + n > skills.length - 1) {
      setCur(0);
      return;
    }
    if (cur + n < 0) {
      setCur(skills.length - 1);
      return;
    }
    setCur(cur + n);
  };

  return (
    <div className={styles.skill}>
      <h2 className={`${styles.skill_title}`}>My Skill</h2>
      <div className={styles.card_carouselHandle}>
        <button
          className={styles.card_carouselHandle_button}
          onClick={() => showSlide(-1)}
        >
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </button>
        <button
          className={styles.card_carouselHandle_button}
          onClick={() => showSlide(1)}
        >
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </button>
      </div>
      <ul className={`${styles.skill_list}`}>
        {skills.map((skill, i) => (
          <SkillItem
            key={i}
            subtitle={skill.subtitle}
            content={skill.content}
            image={skill.image}
            className={`${i !== cur ? `${styles.is_passed_carousel}` : ""} 
            `}
          />
        ))}
      </ul>
    </div>
  );
};

export default MySkill;
