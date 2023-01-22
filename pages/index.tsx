import Head from "next/head";
import Layout from "@/components/templates/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Eunseo&apos;s Portfolio</title>
        <meta
          name="Eunseo's Portfolio"
          content="Hello! Wellcome to my portfolio pages."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>홈입니다</h1>
    </Layout>
  );
}
