// Import necessary dependencies
import { motion } from "framer-motion" // For animations
import { styles } from "../styles" // Custom styles
import { SectionWrapper } from "../hoc" // Higher-order component
import { fadeIn, textVariant } from "../utils/motion" // Animation variants
import { testimonials } from "../constants" // Testimonial data

// Individual testimonial card component
const FeedbackCard = ({
  index,
  testimonial, // The testimonial text
  name,         // Name of person giving testimonial
  designation,  // Their job title
  company,      // Their company
  image,        // Their profile picture
}) => (
  // Note: There's a bug here - the component is missing a return statement
  // Should be: return (
  <motion.div
    // Animate card with fade in effect, delayed based on index
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl x5:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]"></p> {/* Empty quote mark container */}

    <div className="mt-1">
      {/* Testimonial text */}
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      {/* Author info section */}
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          {/* Author name with @ symbol */}
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          {/* Author role and company */}
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
        {/* Author profile picture */}
        <img
          src={image}
          alt={`feedback-by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

// Main testimonials section component
const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      {/* Header section */}
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others says</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      {/* Testimonials cards container */}
      <div className={`${styles.paddingX} -mt-20 pb-14 flex-wrap gap-7`}>
        {/* Map through testimonials data to create individual cards */}
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

// Wrap the component with SectionWrapper HOC and export
export default SectionWrapper(Feedbacks, "");