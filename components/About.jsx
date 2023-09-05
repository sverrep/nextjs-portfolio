import { AnimatedText, Header } from "@/components/AnimatedText";
import Skills from "@/components/Skills";

const About = () => {
  return (
    <div className="">
      <div className="flex h-full lg:block lg:px-36 lg:mx-auto lg:h-36 bg-light">
        <AnimatedText
          text="About Me"
          className="lg:text-left tracking-widest text-center text-smallHeader lg:text-8xl text-primary/80"
        />
      </div>

      <div className="lg:grid lg:h-full lg:pb-20 min-h-fit w-full lg:grid-cols-8 xl:gap-16 bg-primaryLight/40 -mt-8 lg:-mt-20 -mb-14 pt-10">
        <div className="col-span-4 2xl:col-span-3 flex flex-col items-start justify-start px-10 lg:px-20 xl:px-36 pt-5 lg:pt-14 text-lg">
          <p className="font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi
            scelerisque eu ultrices vitae.
          </p>
          <p className="my-4 font-medium">
            Pellentesque habitant morbi tristique senectus et netus et. Rhoncus
            urna neque viverra justo nec ultrices dui. Tempor orci eu lobortis
            elementum nibh tellus. Eu volutpat odio facilisis mauris sit. Platea
            dictumst quisque sagittis purus sit. Sed adipiscing diam donec
            adipiscing tristique risus nec. Ac felis donec et odio pellentesque
            diam.
          </p>
          <p className="font-medium">
            Nulla facilisi nullam vehicula ipsum a arcu cursus. Arcu non sodales
            neque sodales ut etiam sit amet nisl. Amet venenatis urna cursus
            eget nunc scelerisque. Eu facilisis sed odio morbi quis commodo odio
            aenean.
          </p>
        </div>
        <div className="col-span-4 2xl:col-span-5 items-center pb-24 pt-10 lg:pt-0 lg:pb-0">
          <Header text="Skillset" className="text-center font-bold text-3xl text-primary uppercase"/>
          <Skills />
        </div>
      </div>

    </div>
  );
};

export default About;
