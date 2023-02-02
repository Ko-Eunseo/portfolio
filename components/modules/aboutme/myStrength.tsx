import { filterByTitle } from "@/hooks/filtering";
import useSWR from "swr";
import style from "@/styles/layouts/strength.module.scss";
import common from "@/styles/common/common.module.scss";

const MyStrength = () => {
  const { data } = useSWR("/api/notion");
  const title = "My Strength";
  const strengths = filterByTitle(data, title);

  return (
    <div className={`${style.strength}`}>
      <h2 className={`${common.stroke_title} ${style.strength_title}`}>
        My Strength
      </h2>
      <div className={`${style.strength_contents}`}>
        {strengths.map((strength, i) => (
          <div key={i} className={style.strength_content}>
            <span className={common.round_btn}>{strength.subtitle}</span>
            <p className={style.strength_paragraph}>{strength.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyStrength;
