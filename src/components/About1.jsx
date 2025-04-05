import React from 'react';
import softwaredeveloper from "../assets/software-developer.jpg";
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';


function About1() {
  return (
    <div className='border-b border-neutral-900 pb-4'> 
      <h1 className='my-20 text-center text-4xl'>
        About <span className='text-neutral-500'>Me</span>
      </h1>

      <div className='flex flex-wrap'>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2 lg:p-8'
        >
          <div className='flex items-center justify-center'>
            <img className='rounded-2xl' src={softwaredeveloper} alt="software-developer" />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2'
        >
          <div className='flex flex-col items-center lg:items-start'>
            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>

            <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="/Portfolio/Resume.pdf" // Note: Include /Portfolio/ here because of base path
  download="Adarsh_Resume.pdf"
  className='mt-4 inline-block rounded bg-purple-900 px-6 py-2 text-white font-semibold shadow-lg hover:bg-purple-800 transition'
>
  Download Resume
</motion.a>

          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About1;
