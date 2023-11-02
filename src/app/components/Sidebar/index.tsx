"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
const variants: Variants = {
  open: {
    clipPath: "circle(1200px at 50px 40px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  close: {
    clipPath: "circle(25px at 50px 37px)",
    transition: {
      delay: 0.7,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const linkVarients:Variants = {
  open:{
    transition:{
      staggerChildren:0.1
    }
  },
  close:{
    transition:{
      staggerChildren:0.2,
      staggerDirection:-1
    }
  }
}
const linkItemVarients:Variants = {
  open:{
    y:0,
    opacity:1
  },
  close:{
    y:50,
    opacity:0
  }
}
export default function Index() {
  const [open, setIsOpen] = useState<boolean>(false);
  const sideBarRef = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
    const handleOutsideClick = (e:MouseEvent) =>{
      if(sideBarRef.current && !sideBarRef.current.contains(e.target as Node)){
        setIsOpen(false);
      }else{
        setIsOpen(true);
      }
    }
    document.addEventListener('click',handleOutsideClick);
    return () =>{
      document.removeEventListener('click',handleOutsideClick);
    }
  },[open]);
  return (
    <motion.div variants={variants} initial={'close'}   animate={open ? "open" : "close"} className="sidebar bg-white w-full sm:w-[300px] overflow-hidden text-black fixed top-0 left-0 bottom-0 z-40">
       <motion.div ref={sideBarRef} variants={linkVarients} className={`links flex  justify-center items-center flex-col absolute top-0 left-0 bottom-0 gap-10 text-2xl w-full h-full [&>a]:font-medium `}>
        <motion.a variants={linkItemVarients} href={"#homePage"}>HomePage</motion.a>
        <motion.a variants={linkItemVarients} href={"#services"}>Services</motion.a>
        <motion.a variants={linkItemVarients} href={"#portfolio"}>Portfolio</motion.a>
        <motion.a variants={linkItemVarients} href={"#contact"}>Contact</motion.a>
      </motion.div>
      <button type="button" onClick={() => setIsOpen(!open)} className="absolute top-6 left-[38px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"  viewBox="0 0 25 25">
         <motion.path variants={{close:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}} strokeWidth="3"  stroke="black" strokeLinecap="round" />
         <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" d="M 2 9.423 L 20 9.423" variants={{close:{opacity:1},open:{opacity:0}}}/>
         <motion.path variants={{close:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}} strokeWidth="3"  stroke="black" strokeLinecap="round" />
        </svg>  
      </button>
    </motion.div>
  );
}
{
  /* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
</svg> */
}
