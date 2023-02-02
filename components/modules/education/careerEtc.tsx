import { filterByTitle } from "@/hooks/filtering";
import useSWR from "swr";
import styles from "@/styles/layouts/etc.module.scss";
import EtcItem from "@/components/atoms/etcItem";

const Etc = () => {
  const { data } = useSWR("/api/notion");
  const title = "Career & Education";
  const etcs = filterByTitle(data, title);
  return (
    <article className={styles.etc}>
      <h2>Career & Education</h2>
      <div className={styles.etc_wrap}>
        {etcs?.map((etc, i) => (
          <EtcItem
            key={i}
            subtitle={etc.subtitle}
            period={etc.period}
            content={etc.content}
          />
        ))}
      </div>
    </article>
  );
};

export default Etc;
