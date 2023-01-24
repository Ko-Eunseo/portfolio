import { ItemProps } from "@/types/types";
import TeamProjectItem from "./teamProject";

const EducationItem = (data: ItemProps) => {
  const { title, content } = data;
  return (
    <article>
      <h1>{title}</h1>
      <section>{content}</section>
    </article>
  );
};

export default EducationItem;
