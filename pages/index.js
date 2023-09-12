import About from "@/components/About";
import Hero from "@/components/Hero";
import Head from "next/head";
import Projects from "@/components/Projects";
import ExpEdu from "@/components/ExpEdu";
import NavBar from "@/components/NavBar";


export default function Home() {

  return (
    <div className="scroll-smooth">
      <Head>
        <title> Sverre Paulsen | Home Page</title>
        <meta name="description" content="Sverre Paulsen Portfolio" />
      </Head>
      <NavBar  />

      <div id="home" className="snap-start pt-20">
        <Hero />
      </div>
      <div id="about" className="snap-start ">
        <About />
      </div>
      <div id="experience" className="snap-start">
        <ExpEdu />
      </div>
      <div id="projects" className="snap-start pt-20 -mb-72 md:-mb-44">
        <Projects />
      </div>

    </div>
  );
}
