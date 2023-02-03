import { filterByTitle } from "@/hooks/filtering";
import Image from "next/image";
import eunseo from "@/public/images/profile.webp";
import useSWR from "swr";
import styles from "@/styles/layouts/intro.module.scss";
import common from "@/styles/common/common.module.scss";

const Introduce = () => {
  const { data, isLoading } = useSWR("/api/notion");
  const title = "Introduce";
  const intro = filterByTitle(data, title)?.[0];
  return (
    <figure className={styles.intro}>
      <div className={styles.intro_img_wrap}>
        <Image
          src={eunseo}
          alt="eunseo"
          placeholder="blur"
          fill
          sizes="(min-width: 480px) 100vw, (min-width:600px) 500px, 500px"
        />
      </div>
      <figcaption className={styles.intro_contents}>
        <h2 className={`${styles.intro_title} ${common.stroke_title}`}>
          프론트엔드 개발자
          <br />
          <span className={`${common.bold_color}`}>고은서</span>
          입니다.
        </h2>
        <p>{intro.content}</p>
      </figcaption>
    </figure>
  );
};

export default Introduce;
