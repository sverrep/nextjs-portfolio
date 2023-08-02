import { motion } from "framer-motion";
import Image from "next/image";
import { TitleText } from "./AnimatedText";
import skilllist from "./../public/skills.json";

const SkillMap = ({ link, name, x, y }) => {
  return (
    <motion.div
      className="absolute flex items-center cursor-pointer justify-center rounded-full font-semibold bg-primaryDark/90 text-light py-3 px-4"
      whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1 }}
    >
      <Image src={link} title={name} width={30} height={30} alt={name} />
    </motion.div>
  );
};
/*
const SkillCard = ({ name, link }) => {
  if (name === "VSCode") {
    return null;
  }
  return (
    <motion.div
      className="rounded-lg w-full h-full flex flex-col items-center justify-center"
      whileHover={{
        scale: 1.05,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 17,
        },
      }}
      initial={{
        opacity: 0.5,
        y: 75,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.75,
        },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Image
        className="w-10 h-10 mb-2 mt-1"
        src={link}
        title={name}
        width={30}
        height={30}
        alt={name}
      />
      <span className="text-sm font-semibold text-light">{name}</span>
    </motion.div>
  );
};
*/

const SkillCard = ({ name, link }) => {
  if (name === "VSCode") {
    return null;
  }
  return (
    <motion.div
      className="relative w-full h-full shadow-card bg-card backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center text-light group"
      whileHover={{ scale: 1.04, rotate: -1 }}
      initial={{
        opacity: 0.2,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.75,
        },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Image
        className="absolute z-10 hover:h-4/6 group-hover:blur-sm group-hover:animate-cardBounce"
        src={link}
        title={name}
        width={50}
        height={50}
        alt={name}
      />
      <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-4 z-20 font-bold">
        <p className="text-lg md:text-xl">{name}</p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <div className="h-full flex flex-col items-center">
        <div className="h-24 lg:h-36 mt-6 md:mt-6 lg:mt-3">
          <TitleText
            text="Skills"
            className="lg:text-left text-center text-smallHeader lg:text-6xl text-primary/80"
          />
        </div>
        <div className="lg:hidden flex w-full h-[60vh] md:h-[40vh] justify-center">
          <div
            className="w-full px-12 md:w-3/4 h-full text-light grid grid-cols-2
            md:grid-cols-4 gap-1 gap-x-10 md:gap-4 gap-y-2
            md:[&>*:nth-child(13)]:col-start-2 md:[&>*:nth-child(14)]:col-start-3 
            overflow-visible"
          >
            {skilllist.map((skll) => (
              <SkillCard key={skll.name} name={skll.name} link={skll.link} />
            ))}
          </div>
        </div>
        <div className="lg:flex hidden w-8/12 xl:w-2/4 h-3/4 items-center justify-center rounded-full bg-circularLight">
          {skilllist.map((skll) => (
            <SkillMap
              key={skll.name}
              name={skll.name}
              link={skll.link}
              x={skll.x}
              y={skll.y}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
//[&>*:nth-child(odd)]:bg-primary [&>*:nth-child(even)]:bg-primaryDark md:[&>*:nth-child(13)]:!bg-primaryDark md:[&>*:nth-child(14)]:!bg-primary
