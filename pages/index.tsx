import Head from "next/head";
import Layout from "@/components/templates/layout";
import About from "./about";

export default function Home() {
  // console.log(projects);
  return (
    <Layout>
      <Head>
        <title>Eunseo&apos;s Portfolio</title>
        <meta
          name="Eunseo's Portfolio"
          content="Hello! Wellcome to my portfolio pages."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <About />
    </Layout>
  );
}

// import axios from "axios";
// export const getStaticProps = async () => {
//   const notionSecret = process.env.NOTION_SECRET;
//   const notionDatabaseId = process.env.NOTION_DATABASE_ID;
//   const options = {
//     method: "POST",
//     url: `https://api.notion.com/v1/databases/${notionDatabaseId}/query`,
//     headers: {
//       accept: "application/json",
//       "Notion-Version": "2022-06-28",
//       "content-type": "application/json",
//       Authorization: `Bearer ${notionSecret}`,
//     },
//     data: { page_size: 100 },
//   };

//   const res = await axios.request(options);
//   const projects = res.data.results.map((el: { properties: {} }) => {
//     return el.properties;
//   });

//   return {
//     props: { projects },
//   };
// };
