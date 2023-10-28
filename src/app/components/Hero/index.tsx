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
        <motion.div variants={textVariants} className="textContainer w-full lg:w-2/5 h-full flex justify-center flex-col gap-4  relative z-10">
          <motion.span variants={textVariants} className="uppercase text-purple-800 text-xl lg:text-2xl tracking-widest font-semibold">Mustak sk</motion.span>
          <motion.h1 variants={textVariants} className="text-5xl md:text-7xl lg:text-[5rem] font-semibold leading-tight">Full stack web Developer</motion.h1>
          <motion.div variants={textVariants} className="space-x-5">
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
        <div className="imageContainer h-full hidden lg:block absolute top-5 right-20">
          <Image src={"/img/hero.png"} alt="Mustak" width={900} height={300} />
        </div>
    </div>
  );
}
