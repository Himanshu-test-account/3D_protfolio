import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
  } from "../assets";

  import filmImage from '../assets/company/films.png'; 
  import job from '../assets/company/jobportal.png'
  import Det from '../assets/company/detection.png'

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Developer and Technology Job Simulation",
      company_name: "Forage",
      icon: "forage-icon", // Add your icon for Forage if available
      iconBg: "#E6DEDD",
      date: "Dec 2024 - Jan 2025",
      points: [
        "Gained practical experience in discovering career opportunities in technology.",
        "Studied the Software Development Lifecycle (SDLC) and Software Testing Lifecycle (STLC).",
        "Learned software development methodologies, including Waterfall and Agile.",
        "Developed skills in algorithmic thinking and code debugging.",
        "Completed knowledge checks and tasks under the guidance of industry professionals.",
      ],
    },
    {
      title: "Web Developer (Personal Projects)",
      company_name: "Self-initiated Projects",
      icon: "project-icon", // Add a suitable icon for personal projects
      iconBg: "#383E56",
      date: "2024 - Present",
      points: [
        "Developed a Job Portal with React for a responsive frontend, using Node.js and Express.js for the backend.",
        "Integrated state management with Redux and Redux Toolkit to streamline data flow.",
        "Created a Netflix-like platform using React.js with an interactive UI and real-time API calls.",
        "Built a brain tumor detection system using Convolutional Neural Networks (CNN) for medical image classification.",
      ],
    },
  ];
  
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Job Portal with Automation",
      description:
        "A web-based platform that allows users to search for jobs, apply, and track applications. Built using React for the frontend, Node.js and Express.js for the backend, and integrated with Redux for state management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: job, // Add your project image here
      source_code_link: "https://github.com/Himanshu-test-account/Job_Portal",
    },
    {
      name: "Brain Tumor Detection System",
      description:
        "A brain tumor detection system using Convolutional Neural Networks (CNN) to classify MRI scans for early tumor detection. The project leverages deep learning and image processing for real-time predictions.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "cnn",
          color: "pink-text-gradient",
        },
      ],
      image: Det, 
      source_code_link: "https://github.com/Himanshu-test-account/brain-tumor-prediction-system",
    },
    {
      name: "Netflix Streaming Platform",
      description:
        "A Netflix-like platform built using React.js with real-time API calls to fetch movie and TV show data. Includes features like search, responsive layout, and interactive UI design.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: filmImage, 
      source_code_link: "https://github.com/Himanshu-test-account/netflix_youtube",
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };