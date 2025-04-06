import { Link } from "react-router-dom";
import Project1 from "../assets/projects/Project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";



export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.  I have honed my skills in front-end technologies like React and HTML, CSS, JavaScript, as well as back-end technologies like MySQL, and Django. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React, MySQL, and Django. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const Skills = [
  {
   type : "Competitive Programming",
   
   includes: `Java (<a href="https://leetcode.com/u/Adarsh1204/" target="_blank"  <span style="color: red; font-weight: bold;">LeetCode</span>
                </a>,<a href="https://www.naukri.com/code360/profile/033577f6-2fa1-4445-afa2-a8add7458c0a" target="_blank"  <span style="color:blue ; font-weight: bold;">Code360</span>
                </a> ), Data Structure & Algorithms`
   

   
   
  },
  {
   type: " Frontend Development",
   includes: "HTML, CSS, JavaScript, React.js, Tailwind CSS"
  },
  {
    type: "  Backend Development",
    includes: "Django "
  },
  {
   type:"    Databases",
   includes: "MySQL"
  },
  {
   type:"  Other Tools",
   includes: "Git/GitHub"
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: Project1,
    description:
      "A functional e-commerce website with features like product listing, shopping cart.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Adarshsingh-07/E-Commerce"
  },
  {
    title: "Tic Tac Toe game App",
    image: project2,
    description:
      "A two player game known as Tic Tac Toe following all rules and fair play.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://adarshsingh-07.github.io/Tic-Tac-Toe/",
    
  },
  {
    title: "Stone Paper Scissor",
    image: project3,
    description: "A single player game against computer",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://adarshsingh-07.github.io/Game_SPS/"
  }
];


export const CONTACT = {
  address: "Kaikhali, KOLKATA, 700052",
  phoneNo: "+91 6204768103",
  email: "adarsh.cse122078@bppimt.ac.in",
};
