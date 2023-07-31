import Link from "next/link";
import { useRouter } from "next/router";
import Name from "./Name";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion"
import HamburgerMenu from "./HamburgerMenu";

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-0.5 inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header>
            <div className="flex md:hidden bg-light px-4 py-2 font-medium justify-between">
                <Name />
                <div className="py-2">
                    <HamburgerMenu/>
                </div>
            </div>
            <div className="hidden w-full px-24 py-6 font-medium items-center justify-between md:flex">
                <Name />
                <nav className=" xl:w-1/3">
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink href="/projects" title="Projects" className="mx-4" />
                    <CustomLink href="/contact" title="Contact" className="ml-4" />
                </nav>
                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a
                        href="https://www.linkedin.com/in/sverre-paulsen/"
                        target="_blank"
                        whileHover={{y:-2}}
                        whileTap={{scale:0.9}}
                        className="w-6 mr-3"
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a
                        href="https://github.com/sverrep"
                        target="_blank"
                        whileHover={{y:-2}}
                        whileTap={{scale:0.9}}
                        className="w-6 ml-3"
                    >
                        <GithubIcon />
                    </motion.a>
                </nav>
            </div>

        </header>
    );
}

export default NavBar;