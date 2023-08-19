import About from "@/components/About";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title> Sverre Paulsen | About Page</title>
        <meta name="description" content="About Sverre Paulsen" />
      </Head>
      <div
        className={`w-full lg:h-full bg-light lg:pt-16 pb-20 md:pb-0 m-0 overflow-hidden`}
      >
        <About />
      </div>
    </>
  );
};
export default about;
