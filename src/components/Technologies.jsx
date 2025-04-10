import React from 'react'
import { MdCss } from "react-icons/md";
import { TiHtml5 } from "react-icons/ti";
import {RiReactjsLine} from "react-icons/ri"
import { FaPython } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri"
import { animate, motion } from 'framer-motion';
const iconVariants = (duration) => ({
    initial: {y: -10},
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
        whileInView={{opacity: 1, y: 0}}
        initial = {{opacity: 0 , y : -100}}
        transition={{ duration : 1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial= {{opacity:0 , x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            
        <motion.div
        variants={iconVariants(2.4)}
        initial="initial"
        animate = "animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TiHtml5 className="text-5xl text-orange-500"/>
            </motion.div>
        <motion.div 
         variants={iconVariants(3)}
         initial="initial"
         animate = "animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
                <MdCss className="text-5xl text-white-400"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(4)}
             initial="initial"
             animate = "animate"className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoJavascript className="text-5xl text-yellow-400"/>
            </motion.div>
            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate = "animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className="text-5xl text-cyan-400"/>
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate = "animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className="text-5xl text-cyan-400"/>
            </motion.div>
            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate = "animate" 
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython className="text-5xl text-green-500"/>
            </motion.div>
            
            <motion.div
             variants={iconVariants(4)}
             initial="initial"
             animate = "animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbSql className="text-5xl text-cyan-700"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies