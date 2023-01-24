import useSWR from "swr";
import EducationItem from "../atoms/education";
import { ItemProps } from "@/types/types";
import useFilterByTags from "@/hooks/useFilter";

const Education = () => {
  const { data, isLoading } = useSWR("/api/notion");
  const tagName = "education";
  const educations = useFilterByTags(data, tagName);

  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <article>
        <h1>Education</h1>
        {educations.map((education: ItemProps, i) => (
          <EducationItem
            key={i}
            title={education.title}
            content={education.content}
          />
        ))}
      </article>
    </>
  );
};

export default Education;
