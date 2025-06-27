// Import necessary dependencies
import React from 'react';  // Import React core
import Tilt from "react-parallax-tilt";  // Import tilt effect component
import { motion } from "framer-motion";  // Import for animations
import { styles } from "../styles";  // Import custom styles
import { github } from "../assets";  // Import github icon
import { SectionWrapper } from "../hoc";  // Import higher-order component for section wrapping
import { projects } from "../constants";  // Import project data
import { fadeIn, textVariant } from "../utils/motion";  // Import animation variants

// ProjectCard component - Renders individual project cards
const ProjectCard = ({
  index,  // Used for staggered animations
  name,   // Project name
  description,  // Project description
  tags,   // Technologies used
  image,  // Project screenshot/image
  source_code_link,  // GitHub repository link
}) => {
  return (
    // Wrapper with fade-in animation
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* Tilt effect container */}
      <Tilt
        tiltMaxAngleX={45}  // Maximum tilt rotation around X axis
        tiltMaxAngleY={45}  // Maximum tilt rotation around Y axis
        scale={1}           // Scale factor on hover
        transitionSpeed={450}  // Speed of tilt effect
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"  // Styling for card
      >
        {/* Project image container */}
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"  // Make image fill container
          />
          {/* Overlay for GitHub link */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {/* GitHub icon button */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}  // Open GitHub repo in new tab
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"  // Style GitHub icon
              />
            </div>
          </div>
        </div>

        {/* Project info section */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>  // Project title
          <p className="mt-2 text-secondary text-[14px]">{description}</p>  // Project description
        </div>

        {/* Technology tags section */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}  // Display each technology tag
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Main Works component
const Works = () => {
  return (
    <>
      {/* Section header with animation */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>  // Subtitle
        <h2 className={styles.sectionHeadText}>Projects.</h2>  // Main title
      </motion.div>

      {/* Section description */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}  // Fade in animation
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Projects grid */}
      <div className="mt-20 flex flex-wrap gap-7">
        {/* Map through projects array and render ProjectCard for each */}
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}  // Unique key for React list rendering
            index={index}  // Pass index for staggered animations
            {...project}   // Spread all project properties as props
          />
        ))}
      </div>
    </>
  );
};

// Export the component wrapped in SectionWrapper HOC
// SectionWrapper adds common section styling and animations
export default SectionWrapper(Works, "");