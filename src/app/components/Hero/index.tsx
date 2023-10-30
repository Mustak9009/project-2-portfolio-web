'use client'
import React from "react";
import Image from "next/image";
import {motion,Variants} from 'framer-motion';
const textVariants:Variants = {
  initial:{
    x:-500,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.2
    }
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:1,
      repeat:Infinity,
    }
  }
}
const textSliderVarients:Variants = {
  initial:{
    x:0
  },
  animate:{ //width is importent (ex: w-1/2) for scrolling animation
    x:"-200%",
    transition:{
      repeat:Infinity,
      duration:20,
      staggerChildren:0.1,
      repeatType:'mirror'
    }
  }
}
export default function Hero() {
  return (
    <div className="hero relative overflow-hidden px-5">
      <motion.div variants={textVariants} initial='initial' animate='animate' className="wrapper h-full max-w-[1500px] mx-auto">
        <motion.div variants={textVariants} className="textContainer  w-full h-1/2 md:w-2/5  md:h-full  flex justify-center items-center md:items-start flex-col gap-4  relative z-10">
          <motion.span variants={textVariants} className="uppercase text-purple-800 text-xl lg:text-2xl tracking-widest font-semibold">Mustak sk</motion.span>
          <motion.h1 variants={textVariants} className="text-5xl md:text-7xl lg:text-[5rem] font-semibold leading-tight text-center md:text-left">Full stack web Developer</motion.h1>
          <motion.div variants={textVariants} className="md:space-x-5 flex flex-col md:flex-row gap-5 md:gap-0">
            <motion.button variants={textVariants} className="btn">See the latest works</motion.button>
            <motion.button variants={textVariants} className="btn !bg-white text-black hover:!bg-gray-100">Contact me</motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate={'scrollButton'} src={'/img/scroll.png'} alt="scroll" width={50} height={50}/>
        </motion.div>
      </motion.div>
      <motion.div variants={textSliderVarients} initial='initial' animate='animate' className="slidingTextContainer absolute  text-[50vh] -bottom-[120px] whitespace-nowrap text-[#ffffff09] w-1/2 font-bold">
         <p>
          Freelance content creator influencer
         </p>
      </motion.div>
        <div className="imageContainer   absolute bottom-0 left-0  md:left-[28%]  h-1/2 w-full md:h-full md:top-[20%]  flex justify-center items-start">
          <div className="outline-double outline-4 outline-gray-700  bg-[#0f0f24]  overflow-hidden rounded-full ">
            <Image src={"/img/Mustak.png"} alt="Mustak" width={500} height={300}  className="bg-cover w-60 px-6 md:w-full md:px-0 object-cover"/>
          </div>
        </div>
    </div>
  );
}
