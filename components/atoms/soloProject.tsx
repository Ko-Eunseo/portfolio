import { ItemProps } from "@/types/types";

const SoloProjectItem = ({ title, content, github_url }: ItemProps) => {
  return (
    <article>
      <h1>{title}</h1>
      <div>{github_url}</div>
      <section>{content}</section>
    </article>
  );
};

export default SoloProjectItem;
