import useFilterByTags from "@/hooks/useFilter";
import useSWR from "swr";
import TeamProjectItem from "../atoms/teamProject";

const Project = () => {
  const { data, isLoading } = useSWR("/api/notion");
  const tagName = "Team project";
  const projects = useFilterByTags(data, tagName);

  if (isLoading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <article>
        <h1>Project</h1>
        {projects.map((project, i) => (
          <TeamProjectItem
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

export default Project;
