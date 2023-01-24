import useFilterByTags from "@/hooks/useFilter";
import useSWR from "swr";
import AboutmeItem from "../atoms/aboutMe";

const AboutMe = () => {
  const { data, isLoading } = useSWR("/api/notion");
  const tagName = "About me";
  const abouts = useFilterByTags(data, tagName);

  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <article id="AboutMe">
        <h1>About me</h1>
        {abouts.map((aboutMeData, i) => (
          <AboutmeItem
            key={i}
            title={aboutMeData.title}
            content={aboutMeData.content}
          />
        ))}
      </article>
    </>
  );
};

export default AboutMe;
