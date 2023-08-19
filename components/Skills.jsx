import { motion } from "framer-motion";
import Image from "next/image";
import skilllist from "./../public/skills.json";

const SkillCard = ({ name, link, experience }) => {
  if (name === "VSCode") {
    return null;
  }
  return (
    <motion.div
      className="w-3/5 lg:w-4/5 xl:w-3/5 h-5/6 shadow-card bg-card backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center text-black mx-auto group"
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
        width={70}
        height={70}
        alt={name}
      />
      <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center z-20 font-bold">
        <p className="text-lg md:text-2xl">{name}</p>
        <p className="text-lg md:text-xl font-normal">{experience}</p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="h-[70vh] grid grid-cols-2 lg:grid-cols-4 gap-y-4 justify-center items-center">
      {skilllist.map((skll) => (
        <SkillCard key={skll.name} name={skll.name} link={skll.link} experience={skll.experience} />
      ))}
    </div>
  );
};

export default Skills;
