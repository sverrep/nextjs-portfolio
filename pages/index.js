import About from "@/components/About";
import Hero from "@/components/Hero";
import Head from "next/head";
import Projects from "@/components/Projects";
import ExpEdu from "@/components/ExpEdu";


export default function Home() {
  return (
    <>
      <Head>
        <title> Sverre Paulsen | Home Page</title>
        <meta name="description" content="Sverre Paulsen Portfolio" />
      </Head>

      <div className="snap-center">
        <Hero />
      </div>
      <div className="snap-center ">
        <About />
      </div>
      <div className="snap-center">
        <ExpEdu />
      </div>
      <div className="snap-center">
        <Projects />
      </div>

    </>
  );
}
