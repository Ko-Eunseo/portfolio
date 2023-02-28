import Introduce from "./introduce/introduce";
import MySkill from "./mySkill/mySkill";
import MyStrength from "./myStrength/myStrength";
import Tmi from "./tmi/tmi";

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
