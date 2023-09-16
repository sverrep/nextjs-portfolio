import timelineElements from "./../public/expedu.json";
import { AnimatedText } from "./AnimatedText";
import { WorkIcon, SchoolIcon } from "./Icons.jsx";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExpEdu = () => {
  let work_icon_styles = { background: "#06D6A0" };
  let school_icon_styles = { background: "#F9C74F" };

  return (
    <div className="h-screen items-center mb-32 lg:mb-16 pb-20 flex flex-col text-dark pt-16 md:pt-20">
      <div className="h-36 lg:h-36 mt-6 lg:mt-3">
        <AnimatedText
          text="Experience and Education"
          className="lg:text-left text-center text-smallHeader lg:text-6xl text-primary/80 tracking-widest"
        />
      </div>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let is_work_icon = element.icon === "work";
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={is_work_icon ? work_icon_styles : school_icon_styles}
              icon={is_work_icon ? <WorkIcon/> : <SchoolIcon/>}
              contentStyle={{"boxShadow": '0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25), 0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15)', "padding": "2em 3em"}}
            >
              <h3 className="font-bold text-lg">{element.title}</h3>
              <a href={element.companyLink} target="_blank" className="font-semibold text-base underline">{element.company}</a>
              <h5 className="font-semibold text-base">{element.location}</h5>
              <p className="!font-normal ">{element.description}</p>

            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default ExpEdu;
