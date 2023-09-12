import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Name = () => {
  return (
    <div className="flex flex-col mt-2">
      <MotionLink
        href="/"
        className="w-full h-full text-primary flex text-2xl font-bold"
        whileHover={{
          color: "#8C7358",
          transition: { duration: 0.5 },
        }}
      >
        Sverre Paulsen
      </MotionLink>
    </div>
  );
};

export default Name;
