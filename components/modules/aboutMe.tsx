import Introduce from "./aboutme/introduce";
import MySkill from "./aboutme/mySkill";
import MyStrength from "./aboutme/myStrength";
import Tmi from "./aboutme/tmi";

const AboutMe = () => {
  return (
    <>
      <article id="About Me">
        <Introduce />
        <MySkill />
        <MyStrength />
        <Tmi />
      </article>
    </>
  );
};

export default AboutMe;
