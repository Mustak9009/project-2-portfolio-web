"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
const varients = {
  hidden: { x:10,transition: { type: "spring",staggerChildren:0.2},},
  vissible: {
    opacity: 1,
    x:-10,
    transition: { type: "spring",staggerChildren:0.2},
  },
};
export default function Test() {
  const [open, setOpen] = useState(false);
  const arr = ["item1", "item2", "item3", "item4"];
  return (
    <div className="container h-screen flex justify-center flex-col gap-6 items-center overflow-hidden">
      {/* <motion.div
        variants={varients}
        animate={open?'vissible':'hidden'}
        
        // transition={{ duration: 0.7,type:'spring'}}
        // initial="hidden"
        // animate="vissible"
        // initial={{scale:1,rotate:0,x:0,opacity:0.5}}
        // animate={{ rotate: 360,scale:1,y:-100,opacity:1 }}
        // whileTap={{scale:2,opacity:1,rotate:180}}
        // whileInView={{opacity:1}}
        // drag
        className="box w-1/6 bg-white h-1/6 rounded-md cursor-pointer"
      ></motion.div> */}
      <motion.ul initial="hidden" animate={open?'vissible':'hidden'} variants={varients}>
        {arr.map((item) => (
          <motion.li key={item} variants={varients}>{item}</motion.li>
        ))}
      </motion.ul>
      <button
        className="bg-white px-3 py-2 text-black rounded"
        onClick={() => setOpen(!open)}
      >
        {open ? "hidden" : "vissible"}
      </button>
    </div>
  );
}
