import AboutMe from "../modules/aboutMe";
import Education from "../modules/education";
import Project from "../modules/project";
import common from "@/styles/common/common.module.scss";

const Main = () => {
  return (
    <main className={common.container}>
      <AboutMe />
      <Education />
      <Project />
    </main>
  );
};

export default Main;
