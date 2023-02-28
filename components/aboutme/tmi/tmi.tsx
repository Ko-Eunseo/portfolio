import { filterByTitle } from "@/utils/filtering";
import useSWR from "swr";
import styles from "@/styles/layouts/tmi.module.scss";
import common from "@/styles/common/common.module.scss";
import Accordion from "@/components/common/accordion";

const Tmi = () => {
  const { data } = useSWR("/api/notion");
  const title = "with. TMI";
  const tmis = filterByTitle(data, title);

  return (
    <div className={styles.tmi}>
      <h2 className={`${styles.tmi_title} ${common.stroke_title}`}>TMI</h2>
      {tmis
        ? tmis.map((tmi, i) => (
            <Accordion key={i} subtitle={tmi.subtitle} content={tmi.content} />
          ))
        : null}
    </div>
  );
};

export default Tmi;
