import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title> Sverre Paulsen | Home Page</title>
        <meta name="description" content="Sverre Paulsen Portfolio" />
      </Head>

      <div
        className={`flex px-12 pb-10 lg:pb-0 md:px-32 items-center text-dark w-full h-full lg:h-[70vh]`}
      >
        <Hero />
      </div>
    </>
  );
}
