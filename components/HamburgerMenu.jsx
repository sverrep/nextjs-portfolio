import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const pages = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
]

const HamburgerMenu = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const router = useRouter();
    return (
        <div>
            <div>
                <button className="text-dark w-10 h-10 relative focus:outline-none md:hidden" onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}>
                    <div className="flex flex-col h-12 w-12 justify-center items-center group">
                        <span aria-hidden="true" className={`h-0.5 w-5 my-1 rounded-full bg-dark transition ease-in-out transform duration-500 ${isNavOpen ? "rotate-45 translate-y-1.5 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}`}></span>
                        <span aria-hidden="true" className={`h-0.5 w-5 rounded-full bg-dark transition ease-in-out transform duration-500 ${isNavOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`}></span>
                        <span aria-hidden="true" className={`h-0.5 w-5 my-1 rounded-full bg-dark transition ease-in-out transform duration-500 ${isNavOpen ? "-rotate-45 -translate-y-1.5 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}`}></span>
                    </div>
                </button >
            </div>
            <div className={`fixed rounded mt-2 w-full h-screen bg-primary ${isNavOpen ? "-translate-x-1/4" : "translate-x-full"} transition-all duration-300 ease-in-out`}>
                <ul className="flex flex-col justify-between text-light">
                    {pages.map((pg) => (
                        <li key={pg.name} className="py-4 first:pt-4 last:pb-4 h-min text-left">
                            <Link href={pg.link} className="block w-min h-6 text-lg font-normal py-2 pl-3 pr-4">
                                {pg.name}
                                <span className={`h-0.5 inline-block bg-dark ${router.asPath === pg.link ? 'w-full' : 'w-0'}`}>&nbsp;</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HamburgerMenu;