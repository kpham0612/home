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

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/kimpham.png"),
  imageSize: 355,
  message:
    "Hi, my name is Kim! I am a computer science student who thrives on innovation and creation, with a passion for technology and creating user-centric solutions and products. When I am not embarking on sunset hikes or crafting up late-night ideas, I enjoy immersing myself in the world of code and creation. Contact Inquiries: kpham0612@gmail.com",
  resume: "https://docs.google.com/document/d/19Fe9bVaB43b2vLV94f9IdpQtTc-Q5pef1D9GPbWfLv4/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "kpham0612", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
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
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    // {
    //   role: 'Front-End Developer',
    //   companylogo: require('../assets/img/boeing.png'),
    //   date: 'May 2017 – May 2018',
    // },
  ]
};



const bloglist = {
  show: true,
  heading: "Blog",
};

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
