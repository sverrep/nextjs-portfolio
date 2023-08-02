import datalist from "./../public/expedu.json"
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Details } from "./Details";


const ExpEdu = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"],
            layoutEffect: false
        }
    )
    return (
        <div className="h-full">
            <div ref={ref} className="w-full mx-auto relative">
                <motion.div
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    {datalist.map((data) => (
                        <Details key={data.company} company={data.company} companyLink={data.companyLink} position={data.position} time={data.time} location={data.location} work={data.work} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ExpEdu;