import { getData } from "@/pages/api/notionApi";
import Projects from "./project/projects";
import common from "@/styles/common/common.module.scss";

const Project = () => {
  return (
    <article id="Project">
      <Projects />
    </article>
  );
};

export default Project;
