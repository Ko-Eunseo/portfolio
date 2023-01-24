import { useData } from "@/hooks/useData";
import useSWR from "swr";
import AboutMe from "../modules/aboutMe";
import Education from "../modules/education";
import Project from "../modules/project";
import SoloProject from "../modules/soloProject";

const Main = () => {
  const { data } = useSWR("/api/notion");
  return (
    <main>
      <AboutMe />
      <Education />
      <Project />
      <SoloProject />
    </main>
  );
};

export default Main;
