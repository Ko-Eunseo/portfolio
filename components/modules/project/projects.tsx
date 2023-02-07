import { filterByTags } from "@/hooks/filtering";
import useSWR from "swr";
import ProjectItem from "../../atoms/projectItem";
import common from "@/styles/common/common.module.scss";
import styles from "@/styles/layouts/project.module.scss";
import Loading from "@/components/atoms/loading";
import { Suspense } from "react";
import { getData } from "@/pages/api/notionApi";

// export async function getStaticProps() {
//   const result = await getData();
//   return { props: { result } };
// }

const Projects = () => {
  const { data, isLoading } = useSWR("/api/notion");
  const tagName = "Project";
  const projects = filterByTags(data, tagName);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <article className={styles.project}>
        <h1 className={`${styles.project_title} ${common.stroke_title}`}>
          Project
        </h1>
        <Suspense fallback={<Loading />}>
          {projects.map((project, i) => (
            <ProjectItem
              key={i}
              title={project.title}
              content={project.content}
              url={project.url}
              subtitle={project.subtitle}
              period={project.period}
              subContent={project.subContent}
              team={project.team}
            />
          ))}
        </Suspense>
      </article>
    </>
  );
};

export default Projects;
