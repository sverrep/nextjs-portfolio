import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

export const Details = ({
  position,
  company,
  companyLink,
  time,
  location,
  work,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"],
  });
  return (
    <li
      ref={ref}
      className="xl:my-8 my-4 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between"
    >
      {/* SVG Circle */}
      <figure className="absolute left-0 stroke-dark">
        <svg
          className="-rotate-90"
          width="75"
          height="75"
          viewBox="0 0 100 100"
        >
          <circle
            cx="75"
            cy="50"
            r="20"
            className="stroke-primaryDark stroke-1 fill-none"
          />
          <motion.circle
            style={{ pathLength: scrollYProgress }}
            cx="75"
            cy="50"
            r="20"
            className="stroke-[5px] fill-light"
          />
          <circle
            cx="75"
            cy="50"
            r="10"
            className="stroke-1 animate-pulse fill-primaryDark"
          />
        </svg>
      </figure>
      {/* Experience Details */}
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{position}</h3>
        <h4 className="font-semibold underline">
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primaryDark"
          >
            {company}
          </a>
        </h4>
        <span className="capitalize font-medium text-dark/75">
          {time} | {location}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

export default Details;
