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
function Box({title,description}:{title:string,description:string}) {
  return (
    <motion.div variants={variants} className="box border-2 border-yellow-700 p-5 flex justify-between flex-col items-start  rounded-md ">
      <section className="space-y-10">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-400">
        {description}
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
      <div className="text_container mt-5 lg:mt-0 flex-[1] self-end hidden md:flex items-center gap-7 [&>hr]:w-96  [&>hr]:border-t [&>hr]:border-gray-500 ">
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
        <Box title={'Branding'} description={"Our branding services shape your brand's identity, strategy, and messaging. We craft unique visual identities, compelling storytelling, and brand collateral, ensuring a consistent and memorable customer experience. Elevate your business, stand out in the market, and forge strong connections with your target audience through our comprehensive branding expertise."}/>
        <Box title={'Web app service'} description={"We're your go-to for web app services. From custom development to user-friendly interfaces, we create web applications that redefine user experiences. Elevate your online presence and business operations with our cutting-edge solutions."}/>
        <Box title={'Online presence'} description={"We specialize in optimizing your online presence. From crafting engaging websites to managing social media and content, we ensure you make a memorable impact in the digital world. Let us boost your visibility, credibility, and engagement online, helping you reach your target audience effectively."}/>
      </motion.div>
    </motion.div>
  );
}
