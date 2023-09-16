import { AnimatedText, Header } from "@/components/AnimatedText";
import Skills from "@/components/Skills";

const About = () => {
  return (
    <div className="pt-20 md:pt-20">
      <div className="flex h-full lg:block lg:px-36 lg:mx-auto lg:h-36 bg-light">
        <AnimatedText
          text="About Me"
          id="about"
          className="lg:text-left tracking-widest text-center text-smallHeader lg:text-8xl text-primary/80"
        />
      </div>

      <div className="lg:grid lg:h-full lg:pb-20 min-h-fit w-full lg:grid-cols-8 xl:gap-16 bg-primaryLight/40 -mt-8 lg:-mt-20 -mb-32 pt-10">
        <div className="col-span-4 2xl:col-span-3 flex flex-col items-start justify-start px-10 lg:pl-20 xl:pl-24 pt-5 lg:pt-14 text-lg xl:pt-20 2xl:text-xl">
          <p className="font-medium">
            As a Norwegian who grew up in Spain attending an international
            school, I've been exposed to a diverse range of perspectives and
            cultures from a young age. As a result, I learned how to be
            adaptable and have an open mind early on, which has continuously
            proven to be invaluable to me as a software engineer.
          </p>
          <p className="my-4 font-medium">
            Although I so far have limited professional experience, I'm eager to
            learn and have already worked on several projects that have allowed
            me to develop and hone my skills with multiple languages, such as
            Javascript and Python, and frameworks, like React, Next.js, and
            Django.
          </p>
          <p className="font-medium">
            Ultimately, I'm driven by a desire to develop innovative and
            effective solutions to complex problems. I'm excited about the
            chance to network with others in the industry and explore new
            opportunities, so please don't hesitate to reach out.
          </p>
        </div>
        <div className="col-span-4 2xl:col-span-5 items-center pb-24 pt-10 lg:pt-0 lg:pb-0">
          <Header
            text="Skillset"
            className="text-center font-bold text-3xl text-primary uppercase"
          />
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
