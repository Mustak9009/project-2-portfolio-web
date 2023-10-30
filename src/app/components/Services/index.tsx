"use client";
import React from "react";
import { motion,Variants,useInView } from "framer-motion";
const variants:Variants = {
  initial:{
    y:-100,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.2
    }
  }
}
function Box() {
  return (
    <motion.div variants={variants} className="box border-2 border-yellow-700 p-5 flex justify-between flex-col items-start  rounded-md ">
      <section className="space-y-10">
        <h2 className="text-2xl font-bold">Branding</h2>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          nemo veniam, quam cum nesciunt officia voluptatibus qui natus ab eaque
          nulla iusto alias quaerat eum soluta enim laudantium pariatur
          recusandae aliquid necessitatibus, ut blanditiis dolor. Alias
          architecto tenetur vitae voluptates officiis error voluptatem quas
          adipisci, labore fuga expedita maxime consequuntur?
        </p>
      </section>
      <button className="btn w-32 hover:text-yellow-600 mt-4">Go</button>
    </motion.div>
  );
}
export default function Services() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);
  return (
    <motion.div variants={variants} ref={ref}  initial='initial' animate={isInView && 'animate'}  className="services flex flex-col justify-between">
      <div className="text_container mt-5 lg:mt-0 flex-[1] self-end flex items-center gap-7 [&>hr]:w-96  [&>hr]:border-t [&>hr]:border-gray-500">
        <p className="text-right text-gray-500  font-light">
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </div>
      <motion.div variants={variants} className="title_container self-center flex-[2] space-y-2">
        <div className="title flex flex-col justify-center items-center gap-5 mt-10 text-center">
          <img src="/img/people.webp" className="w-60 h-20 object-cover rounded-full" alt="people" width={100} height={100} />
          <h2 className="text-5xl lg:text-7xl">
            <motion.b whileHover={{color:'orange'}}>Unique</motion.b> {" "}
            <span className="font-thin">Ideas</span>
          </h2>
        </div>
        <div className="title flex justify-center items-center gap-5 flex-wrap text-center">
          <h2 className="text-7xl">
            <motion.b whileHover={{color:'orange'}}>For your</motion.b> <span className="font-thin">Business.</span>
          </h2>
          <button className="px-8 py-3 lg:py-4 bg-yellow-600 text-black rounded-full border-none text-xl hover:bg-yellow-500 mb-10 lg:mb-0">What we do?</button>
        </div>
      </motion.div>
      <motion.div variants={variants} className="list_container flex-[2] flex max-w-[1500px] mx-auto gap-5 flex-wrap lg:flex-nowrap px-10">
        <Box/>
        <Box/>
        <Box/>
      </motion.div>
    </motion.div>
  );
}
