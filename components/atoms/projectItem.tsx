import { ItemProps } from "@/types/types";
import common from "@/styles/common/common.module.scss";
import styles from "@/styles/layouts/project.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { splitBy } from "@/hooks/filtering";
import ProjectImg from "./projectImg";

const ProjectItem = ({
  title,
  content,
  url,
  subtitle,
  period,
  subContent,
  team,
}: ItemProps) => {
  const stacks = subtitle ? splitBy(subtitle, ", ") : null;
  const urls = url ? splitBy(url, ", ") : "";
  let icons = [
    { name: "url", icon: <FontAwesomeIcon icon={faHome} /> },
    { name: "github", icon: <FontAwesomeIcon icon={faGithub} /> },
    { name: "figma", icon: <FontAwesomeIcon icon={faFigma} /> },
    { name: "velog", icon: <FontAwesomeIcon icon={faPenToSquare} /> },
  ];

  return (
    <section className={styles.project_item}>
      <div className={styles.project_left}>
        <h2 className={styles.project_item_title}>{title}</h2>
        <figure>
          {/* imgs */}
          <div className={styles.project_imgs}>
            <ProjectImg projectName={title} />
          </div>
          <figcaption>
            <div className={styles.project_stack}>
              {stacks?.map((stack, id) => (
                <span key={id} className={common.round_btn}>
                  {stack}
                </span>
              ))}
            </div>
            <section className={styles.project_team}>
              <p className={common.period}>{period}</p>
              <p>{team}</p>
            </section>
            <section className={styles.project_content}>{subContent}</section>
            <section className={styles.project_content}>{content}</section>
          </figcaption>
        </figure>
      </div>
      <ul className={styles.project_right}>
        {icons.map((icon, i) => (
          <li key={i} className={styles.project_anchor}>
            <a href={urls[i]}>
              <span>{icon.icon}</span>
              <span>{icon.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectItem;
