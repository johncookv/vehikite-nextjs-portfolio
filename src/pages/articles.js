import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

const articles = () => {
  return (
    <>
      <Head>
        <title>Articles Page | John Vehikite</title>
        <meta
          name="Articles - John Vehikite"
          content="Articles written by John Vehikite"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText className="mb-16" text="Articles" />
        </Layout>
        <h2>Coming soon!</h2>
      </main>
    </>
  );
};

export default articles;
