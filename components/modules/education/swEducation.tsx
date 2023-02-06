import EducationItem from "@/components/atoms/education";
import { filterByTags } from "@/hooks/filtering";
import useSWR from "swr";
import common from "@/styles/common/common.module.scss";
import styles from "@/styles/layouts/education.module.scss";
import Tab from "@/components/atoms/tab";
import { useState } from "react";

const SwEducation = () => {
  const { data } = useSWR("/api/notion");
  const EduDetails = filterByTags(data, "Education");
  const [curTab, setCurTab] = useState(0);
  const selectTab = (i: number) => {
    setCurTab(i);
  };
  return (
    <article className={styles.edu}>
      <h2 className={styles.edu_title}>SW Education</h2>
      <ol className={styles.edu_contents}>
        {EduDetails?.map((edu, id) => (
          <li key={id}>
            <Tab
              curTab={curTab === id}
              onClick={() => selectTab(id)}
              subtitle={edu.title}
            ></Tab>
          </li>
        ))}
      </ol>
      <div>
        {EduDetails ? (
          <EducationItem
            period={EduDetails[curTab].period}
            title={EduDetails[curTab].title}
            subtitle={EduDetails[curTab].subtitle}
            content={EduDetails[curTab].content}
            subContent={EduDetails[curTab].subContent}
            tags={EduDetails[curTab].tags}
          />
        ) : null}
      </div>
    </article>
  );
};

export default SwEducation;
