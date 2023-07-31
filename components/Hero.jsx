import Image from "next/image"
import headshot from "../public/download.png"
import AnimatedText from "@/components/AnimatedText"
import { motion } from "framer-motion"
import { LinkArrow } from "@/components/Icons"

const Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
            <div className="flex lg:block lg:w-1/2 w-full md:w-3/4 justify-center">
                <Image src={headshot} alt="Sverre_Paulsen" className="w-3/4 rounded-lg h-auto" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center self-center pt-4 lg:pt-0">
                <AnimatedText text="Hi, I'm Sverre." className="!text-4xl lg:!text-6xl lg:!text-left" />
                <p className="my-4 text-base font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi scelerisque eu ultrices vitae. Pellentesque habitant morbi tristique senectus et netus et. Rhoncus urna neque viverra justo nec ultrices dui. Tempor orci eu lobortis elementum nibh tellus. Eu volutpat odio facilisis mauris sit. Platea dictumst quisque sagittis purus sit. Sed adipiscing diam donec adipiscing tristique risus nec. Ac felis donec et odio pellentesque diam. Nulla facilisi nullam vehicula ipsum a arcu cursus. Arcu non sodales neque sodales ut etiam sit amet nisl. Amet venenatis urna cursus eget nunc scelerisque. Eu facilisis sed odio morbi quis commodo odio aenean.
                </p>
                <div className="flex items-center lg:self-start  mt-2">
                    <motion.a
                        href="/"
                        className="flex items-center bg-primary text-light p-2.5 rounded-lg text-lg font-semibold hover:bg-light hover:text-primary border-solid border-transparent border-2 hover:border-dark"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                            delay: 0.05
                        }}
                    >
                        Resume <LinkArrow className={"w-6 ml-1"} />
                    </motion.a>
                </div>
            </div>
        </div>
    );
}

export default Hero;