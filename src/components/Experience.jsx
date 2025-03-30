import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"; // Timeline component
import { motion } from "framer-motion"; // For animations
import "react-vertical-timeline-component/style.min.css"; // Import timeline CSS
import { styles } from "../styles"; // Custom styles
import { experiences } from "../constants"; // Work experience data
import { SectionWrapper } from "../hoc"; // HOC for section wrapping
import { textVariant } from "../utils/motion"; // Animation variants

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }} // Timeline content style
    contentArrowStyle={{ borderRight: "7px solid #232631" }} // Arrow style
    date={experience.date} // Experience date
    iconStyle={{ background: experience.iconBg }} // Icon circle style
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      {/* Job title */}
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      {/* Company name */}
      <p className="text-secondary text-[16px] font-semibold mt-1">{experience.company_name}</p>
    </div>

    {/* List of responsibilities */}
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className="text-white text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      {/* Animated section header */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience</h2>
      </motion.div>

      {/* Timeline container */}
      <div className="mt-20 flex flex-col items-center">
        <VerticalTimeline>
          {/* Render experiences dynamically */}
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Wrap with SectionWrapper HOC
export default SectionWrapper(Experience, "work");
