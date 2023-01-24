import useFilterByTags from "@/hooks/useFilter";
import useSWR from "swr";
import SoloProjectItem from "../atoms/soloProject";

const SoloProject = () => {
  const { data, isLoading } = useSWR("/api/notion");
  const tagName = "Solo project";
  const projects = useFilterByTags(data, tagName);

  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <article>
        <h1>SoloProject</h1>
        {projects.map((project, i) => (
          <SoloProjectItem
            key={i}
            title={project.title}
            content={project.content}
            github_url={project.github_url}
          />
        ))}
      </article>
    </>
  );
};

export default SoloProject;
