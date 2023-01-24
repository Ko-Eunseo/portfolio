import { ItemProps } from "@/types/types";

const AboutmeItem = (data: ItemProps) => {
  const { title, content } = data;
  return (
    <article>
      <h1>{title}</h1>
      <section>{content}</section>
    </article>
  );
};

export default AboutmeItem;
