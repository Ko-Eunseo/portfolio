import AboutMe from "./aboutme/aboutMe";
import Education from "./education/education";
import Project from "./project/project";
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
