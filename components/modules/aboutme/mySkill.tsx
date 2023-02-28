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
import { getData } from "@/pages/api/notionApi";

export async function getStaticProps() {
  const notionData = await getData();
  return {
    props: {
      notionData,
    },
  };
}

const MySkill = ({ notionData }: any) => {
  const { data } = useSWR("/api/notion", {
    initialData: notionData,
    revalidateOnMount: true,
  });
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
      <div className={styles.skill_header}>
        <h2 className={`${styles.skill_title}`}>My Skill</h2>
        {skills ? (
          <span className={styles.skill_page}>
            {cur + 1} / {skills.length}
          </span>
        ) : null}
      </div>
      <div className={styles.card_carouselHandle}>
        <button
          aria-label="before"
          className={styles.card_carouselHandle_button}
          type="button"
          onClick={() => showSlide(-1)}
        >
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </button>
        <button
          aria-label="after"
          className={styles.card_carouselHandle_button}
          type="button"
          onClick={() => showSlide(1)}
        >
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </button>
      </div>
      <ul className={`${styles.skill_list}`}>
        {skills
          ? skills.map((skill, i) => (
              <SkillItem
                key={i}
                subtitle={skill.subtitle}
                content={skill.content}
                className={`${i !== cur ? `${styles.is_passed_carousel}` : ""} 
              `}
                image={skill.subtitle}
              ></SkillItem>
            ))
          : null}
      </ul>
    </div>
  );
};

export default MySkill;
