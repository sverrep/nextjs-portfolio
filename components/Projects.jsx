import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import project_list from "../public/projects.json";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";

function Projects(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full h-full bg-light m-0 relative flex flex-col text-left max-w-full  mx-auto items-center z-0 pb-10 md:pb-20"
    >
      <div className="pb-20">
        <AnimatedText
          text="My Projects"
          className="absolute top-0 tracking-widest text-center text-smallHeader lg:text-6xl text-primary/80 !leading-tight"
        />
      </div>
      <div className="relative w-full h-[60vh] flex">
        <Carousel className="h-[65vh] md:h-full">
          {project_list.map((project) => {
            return (
              <div key={project.title} className="relative h-full w-full">
                <Image
                  src={project.picture}
                  alt="image 1"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                  <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                      variant="h1"
                      color="white"
                      className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="lead"
                      color="white"
                      className="mb-12 opacity-80"
                    >
                      {project.description}
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <Button size="lg" color="white" onClick={() => window.open(project.link, "_blank")}>
                        {project.link_type}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </motion.div>
  );
}

export default Projects;
