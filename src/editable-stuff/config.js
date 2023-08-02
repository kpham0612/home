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
  message: " Passionate about changing the world with technology and design.",
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
      url: "https://www.linkedin.com/in/kim-pham-855897238/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com",
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
  imageSize: 375,
  message:
    "Hi my name is Kim! I am a class of 2025 student pursuing a Bachelor of Science in Computer Science at UCSC. My passion and interests lies in the realm of full stack development and design. My goal in life is to excel in my career path through commitment, continuous growth, and hard work. Contact Inquiries: kpham0612@gmail.com",
  resume: "https://docs.google.com/document/d/e/2PACX-1vSWn-rj6avA5czaKsyBBX2r32cGGY7zxKbw_NpQMjFOz-MZco5y-ieKOI5mevj7Py6E3MP9owmPQf6s/pub",
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
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/kimpham.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/kimpham.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
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
    { name: "Python", value: 20 },
    { name: "Frontend Development", value: 75 },
    { name: "Backend Development", value: 40 },
    { name: "Github", value: 90 },
    { name: "UI/UX Design", value: 80 },
  ],
  softSkills: [
    { name: "Ethics and Integrity", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 80 },
    { name: "Attention to Detail", value: 90 },
    { name: "Organization", value: 75 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I am open and available for internship positions for the 2023-2024 year and am extremely enthusiastic for any opportunities! Please feel free to reach out at",
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
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
