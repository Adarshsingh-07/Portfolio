import React from 'react'
// import Ak from "../assets/Ak.jpg"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
function Navbar() {
  return <nav className='mb-20 flex items-center justify-between py-6' >
    <div className='flex flex-shrink-0 items-center'>
    <span>
      <h1 className="text-3xl font-bold text-blue-200 tracking-wide italic drop-shadow-lg">
        Adarsh
      </h1>
    </span>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
      
       <a href="https://www.linkedin.com/in/adarsh-kumar-2479932a4"> <FaLinkedin/> </a>
       <a href="https://github.com/Adarshsingh-07"><FaGithub/></a>
        <a href="https://www.instagram.com/ada.rsh8745?igsh=cXV6enJia3oyYXRo"> <FaInstagram/> </a>
        
    </div>
  </nav>
}

export default Navbar