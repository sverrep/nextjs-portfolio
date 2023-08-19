import Image from "next/image";
import headshot from "../public/headshot.png";
import { AnimatedText, ParagraphText } from "@/components/AnimatedText";
import { motion } from "framer-motion";
import { LinkArrow } from "@/components/Icons";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full pt-20">
      <motion.div
        initial={{ x: -1000 }}
        animate={{
          x: 0,
          transition: {
            duration: 1.5,
            delay: 0.6
          },
        }}
        className="flex lg:block lg:w-1/2 w-full md:w-3/4 justify-center"
      >
        <Image
          src={headshot}
          alt="Sverre_Paulsen"
          className="w-3/4 rounded-lg h-auto"
        />
      </motion.div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center self-center pt-4 lg:pt-0">
        <AnimatedText
          text="Hi I'm Sverre,"
          className="text-center text-4xl lg:text-6xl lg:text-left"
        />
        <ParagraphText
          className="my-0 pb-4 text-center text-2xl lg:text-start font-bold"
          text="an entry level Software Engineer with experience in both Frontend and Backend Development."
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 2,
              delay: 3.5,
            },
          }}
          className="shadow-resume bg-primary rounded-lg lg:self-start"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            className="flex h-full items-center justify-center rounded-lg bg-primary text-light lg:self-start hover:bg-light hover:text-primary border-solid border-transparent border-2 hover:border-dark cursor-pointer"
          >
            <a className="flex items-center p-2.5 rounded-lg text-lg font-semibold">
              Resume <LinkArrow className={"w-6 ml-1"} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
