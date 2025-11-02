import React from 'react'
import { MdCss } from "react-icons/md";
import { TiHtml5 } from "react-icons/ti";
import { RiReactjsLine } from "react-icons/ri";
import { FaPython, FaAws, FaGithub } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { SiKubernetes } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSpringboot, SiRabbitmq } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl font-semibold'
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-6'
      >
        {/* HTML */}
        <motion.div variants={iconVariants(2.4)} initial="initial" animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <TiHtml5 className="text-5xl text-orange-500" />
        </motion.div>

        {/* CSS */}
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <MdCss className="text-5xl text-blue-500" />
        </motion.div>

        {/* JavaScript */}
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <IoLogoJavascript className="text-5xl text-yellow-400" />
        </motion.div>

        {/* React */}
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiTailwindCssFill className="text-5xl text-cyan-400" />
        </motion.div>

        {/* Python */}
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaPython className="text-5xl text-green-500" />
        </motion.div>

        {/* SQL */}
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <TbSql className="text-5xl text-cyan-700" />
        </motion.div>

        {/* Spring Boot */}
        <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiSpringboot className="text-5xl text-green-600" />
        </motion.div>

        {/* AWS */}
        <motion.div variants={iconVariants(3.2)} initial="initial" animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaAws className="text-5xl text-orange-400" />
        </motion.div>

        {/* Kubernetes */}
        <motion.div variants={iconVariants(2.6)} initial="initial" animate="animate"
  className='rounded-2xl border-4 border-neutral-800 p-4'>
  <SiKubernetes className="text-5xl text-blue-400" />
</motion.div>


        {/* RabbitMQ */}
        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiRabbitmq className="text-5xl text-orange-500" />
        </motion.div>

        {/* GitHub */}
        <motion.div variants={iconVariants(2.3)} initial="initial" animate="animate"
          className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaGithub className="text-5xl text-white" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
