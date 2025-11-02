import { Link } from "react-router-dom";
import Project1 from "../assets/projects/Project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";


export const HERO_CONTENT = `I am a passionate Full Stack Developer with a strong foundation in building scalable and high-performance web applications. 
I have hands-on experience with front-end technologies like React, Tailwind CSS, HTML, CSS, and JavaScript, as well as back-end development using Spring Boot, Python, and MySQL. 
I’m also skilled in working with AWS, Kubernetes, RabbitMQ, and GitHub for deploying and managing modern cloud-based applications. 
With over 1000 coding problems solved across various platforms, I combine clean code, problem-solving ability, and creativity to deliver impactful and efficient digital solutions.`;


export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React, MySQL, and Django. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const Skills = [
  {
    type: "Competitive Programming",
    includes: `Java (
      <a href="https://leetcode.com/u/Adarsh1204/" target="_blank" rel="noopener noreferrer" style="color: #f39c12; font-weight: bold;">LeetCode</a>, 
      <a href="https://www.naukri.com/code360/profile/033577f6-2fa1-4445-afa2-a8add7458c0a" target="_blank" rel="noopener noreferrer" style="color: #2980b9; font-weight: bold;">Code360</a>, 
      <a href="https://www.geeksforgeeks.org/user/adarsh_singh/" target="_blank" rel="noopener noreferrer" style="color: #2ecc71; font-weight: bold;">GeeksforGeeks</a>
      ), Data Structures & Algorithms`
  },
  {
    type: "Frontend Development",
    includes: "HTML, CSS, JavaScript, React.js, Tailwind CSS"
  },
  {
    type: "Backend Development",
    includes: "Spring Boot"
  },
  {
    type: "Databases",
    includes: "MySQL, SQL"
  },
  {
    type: "Cloud & DevOps",
    includes: "AWS, Docker, Kubernetes, RabbitMQ"
  },
  {
    type: "Other Tools & Platforms",
    includes: "Git, GitHub, VS Code, Postman"
  },
];


export const PROJECTS = [
   {
  title: "AI Email Reply Chrome Extension",
  image: Project1,
  description: "A Chrome extension powered by AI that automatically generates and suggests smart, context-aware email replies to enhance productivity and save time.",
  technologies: ["React", "Spring Boot", "Chrome Extension API", "Gemini API"],
  github: "https://github.com/Adarshsingh-07/AI_Extension"
  },
  {
    
    title: "E-Commerce Website",
    image: project2,
    description:
      "A functional e-commerce website with features like product listing, shopping cart.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Adarshsingh-07/E-Commerce"
  },
  {
    title: "Tic Tac Toe game App",
    image: project3,
    description:
      "A two player game known as Tic Tac Toe following all rules and fair play.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://adarshsingh-07.github.io/Tic-Tac-Toe/",
    
  }


];


export const CONTACT = {
  address: "Kaikhali, KOLKATA, 700052",
  phoneNo: "+91 6204768103",
  email: "adarshsingh8340312805@gmail.com",
};
