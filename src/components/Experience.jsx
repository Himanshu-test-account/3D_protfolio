import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"; // These components are for creating the vertical timeline UI
import { motion } from "framer-motion"; // For animations and motion effects
// Changed from react-motion to framer-motion

import "react-vertical-timeline-component/style.min.css"; // Required CSS for the timeline component

import { styles } from "../styles"; // Custom styles from your project
import { experiences } from "../constants"; // Your work experience data
import { SectionWrapper } from "../hoc"; // Higher Order Component for section wrapping
import { textVariant } from "../utils/motion"; // Animation variants

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    // Styling for the timeline element content
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    // Styling for the arrow pointing to the timeline
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    // When this experience occurred
    date={experience.date}
    // Styling for the icon circle
    iconStyle={{ background: experience.iconBg }}
    // The icon container
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
    {/* Content section for each timeline element */}
    <div>
      {/* Job title */}
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      {/* Company name */}
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    {/* List of responsibilities/achievements */}
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
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
        {/* Subheading */}
        <p className={styles.sectionSubText}>What I have done so far</p>
        {/* Main heading */}
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      {/* Timeline container */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {/* Map through all experiences and create a card for each */}
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Wrap the component with the SectionWrapper HOC
export default SectionWrapper(Experience, "work");
