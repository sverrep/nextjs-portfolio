import Projects from "@/components/Projects";
import Head from "next/head";

const projects = () => {
  return (
    <>
      <Head>
        <title> Sverre Paulsen | Projects Page</title>
        <meta name="description" content="Projects by Sverre Paulsen" />
      </Head>
      <div
        className={`w-full h-full bg-light lg:pt-16 pb-20 md:pb-0 m-0 overflow-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80`}
      >
        <Projects />
      </div>
    </>
  );
};
export default projects;
