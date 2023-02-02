import { filterByTags } from "@/hooks/filtering";
import useSWR from "swr";
import Introduce from "./aboutme/introduce";
import MySkill from "./aboutme/mySkill";
import MyStrength from "./aboutme/myStrength";
import Tmi from "./aboutme/tmi";

const AboutMe = () => {
  const { data, isLoading } = useSWR("/api/notion");

  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <article id="AboutMe">
        <Introduce />
        <MySkill />
        <MyStrength />
        <Tmi />
      </article>
    </>
  );
};

export default AboutMe;
