/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Layout from "@/components/layout";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eunseo&apos;s Portfolio</title>
        <meta
          name="Eunseo's Portfolio"
          content="Hello! Wellcome to my portfolio pages."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout />
    </>
  );
}
