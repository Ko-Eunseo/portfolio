import { getData } from "@/pages/api/notionApi";
import Projects from "./project/projects";
import common from "@/styles/common/common.module.scss";

// export const getStaticProps = async () => {
// env를 못읽는 것 같음? props 넘길때 {} 이렇게 분해하지 말고 보낼것
//   const notionSecret = process.env.NOTION_SECRET as string;
//   const databaseId = process.env.NOTION_DATABASE_ID as string;
//   const database = await getData(notionSecret, databaseId);
//   return {
//     props: {
//       posts: database,
//     },
//   };
// };

const Project = () => {
  return (
    <article id="project">
      <Projects />
    </article>
  );
};

export default Project;
