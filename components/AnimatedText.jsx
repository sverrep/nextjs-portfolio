import { motion, stagger } from "framer-motion";

const name = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const words = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const description = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.5
    },
  },
};

const pwords = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const AnimatedText = ({ text, className = "", id="" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-dark font-bold ${className}`}
        variants={name}
        initial="initial"
        whileInView="animate"
        viewport={{once: true}}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + index}
            className="inline-block"
            variants={words}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export const ParagraphText = ({ text, className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-dark font-bold ${className}`}
        variants={description}
        initial="initial"
        animate="animate"
        viewport={{ once: false }}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + index}
            className="inline-block"
            variants={pwords}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

const header = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5
    },
  },
};

const headerword = {
  initial: {
    opacity: 1,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: [10, -10, 10],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatDelay: 0.2
    },
  },
};

export const Header = ({ text, className = "" }) => {
  return(
    <div className="w-full mx-auto py-2 flex items-center justify-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-dark font-bold ${className}`}
        variants={header}
        initial="initial"
        animate="animate"
        viewport={{ once: false }}
      >
        {text.split("").map((word, index) => (
          <motion.span
            key={word + index}
            className="inline-block"
            variants={headerword}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}
