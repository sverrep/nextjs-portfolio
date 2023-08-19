import datalist from "./../public/expedu.json";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Details } from "./Details";
import { AnimatedText } from "./AnimatedText";

const ExpEdu = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
    layoutEffect: false,
  });
  return (
    <div className="h-full flex flex-col items-center">
      <div className="h-24 lg:h-36 mt-6 md:mt-6 lg:mt-3">
        <AnimatedText
          text="Experience and Education"
          className="lg:text-left text-center text-smallHeader lg:text-6xl text-primary/80"
        />
      </div>
      <div ref={ref} className="w-2/3 mx-5 relative pt-10">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-5/6 bg-dark origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {datalist.map((data) => (
            <Details
              key={data.company}
              company={data.company}
              companyLink={data.companyLink}
              position={data.position}
              time={data.time}
              location={data.location}
              work={data.work}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpEdu;
