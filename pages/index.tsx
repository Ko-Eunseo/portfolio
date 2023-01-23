import Head from "next/head";
import Layout from "@/components/templates/layout";
import Main from "@/components/templates/main";
import useSWR from "swr";

export default function Home() {
  const URL = "http://localhost:3000/api/notion";
  const { data } = useSWR<string[]>(URL);
  console.log(data);

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
      <h1>홈입니다</h1>
      <Main></Main>
    </Layout>
  );
}
