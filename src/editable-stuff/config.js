// import { Link } from 'react-router-dom';
// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Kim",
  middleName: "",
  lastName: "Pham",
  message: " Passionate about changing the world through technology and user-centric solutions.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/kpham0612",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/kimphxm",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/kimphxm/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/kpham0612/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/kimpham.png"),
  imageSize: 355,
  message:
    "Hi, my name is Kim! I am a computer science student who thrives on innovation and creation, with a passion for technology and creating user-centric solutions and products. When I am not embarking on sunset hikes or crafting up late-night ideas, I enjoy immersing myself in the world of code and creation. Contact Inquiries: kpham0612@gmail.com",
  resume: "https://docs.google.com/document/d/19Fe9bVaB43b2vLV94f9IdpQtTc-Q5pef1D9GPbWfLv4/edit?usp=sharing",
};

const projects = {
  show: true,
  heading: "My Projects",
  items: [
    {
      title: 'ChatifyBot',
      description: 'Developed a Slack App bot product utilizing sentiment analysis to promote positivity and mindfulness, providing personalized methods to boost serotonin levels.',
      image: require('../assets/img/ChatifyBotCover.png'), // Update path to your project image
      link: 'https://new.express.adobe.com/webpage/StGaVUbzIPLrf'
    },
    {
      title: 'PathAI',
      description: 'Created an educational platform product using AI technology to assist first-gen and low-income students with college applications, achieving a top 25% ranking among submissions. ',
      image: require('../assets/img/PathAIcover.png'), // Update path to your project image
      link: 'https://github.com/Agentcasc/Skydeck-Calhacks2023'
    },
    // Add more projects as needed
  ]
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "My Brand",
  // message:
  //   "Lorees vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/kimthumbnail.png"), 
      // label: "First slide label", 
      // paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/kimthumbnail.png"), 
      // label: "Second slide label", 
      // paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"1000",
    height:"600"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C++", value: 90 },
    { name: "Java", value: 80 },
    { name: "Javascript", value: 75 },
    { name: "Python", value: 35 },
    { name: "Frontend (React, HTML, CSS)", value: 85 },
    { name: "Backend (Express.js, Django, MongoDB)", value: 50 },
    { name: "Data Structures and Algorithms", value: 75 },
    { name: "UI/UX Design", value: 90 },
  ],
  softSkills: [
    { name: "Ethics and Integrity", value: 95 },
    { name: "Collaboration", value: 95 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 90 },
    { name: "Attention to Detail", value: 90 },
    { name: "Organization", value: 85 },
    { name: "Creativity", value: 95 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am open and available for internship positions for year of 2025 and am extremely enthusiastic for any opportunities! Please feel free to reach out at",
  email: "kpham0612@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/ChatifyBotCover.png'),
      date: 'June 2018 – Present',
    },
    // {
    //   role: 'Front-End Developer',
    //   companylogo: require('../assets/img/boeing.png'),
    //   date: 'May 2017 – May 2018',
    // },
  ]
};

export { navBar, mainBody, about, projects, skills, leadership, getInTouch, experiences };
