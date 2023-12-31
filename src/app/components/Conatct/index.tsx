"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {messagePost} from '@/helper/apiHelper';
import {useMutation} from '@tanstack/react-query';
import {useFormik} from 'formik';
const variants: Variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const SVG = ({className}:{className:string}) => {
  return (
    <motion.div className={`messageSVG ${className}`} initial={{opacity:1}} animate={{opacity:0}} transition={{delay:3,duration:1}}>
    <svg  height="450px" viewBox="0 0 24 24" fill="none" className="stroke-orange-500 w-full md:w-[400px]" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        initial={{pathLength:0}}
        whileInView={{pathLength:1}}
        transition={{duration:3}}
        d="M7 9H17M7 13H17M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        />
    </svg>
    </motion.div>
  );
};
export default function Contact() {
  const {mutate,status} = useMutation({mutationKey:['send_message'],mutationFn:messagePost});
  const {values,handleChange,handleSubmit,resetForm} = useFormik({
    initialValues:{
      name:'',
      email:'',
      message:''
    },
    onSubmit:({name,email,message})=>{
      mutate({name,email,message});
      resetForm();
    }
  });
  
  if(status==='success'){
    alert('Message send successfully😊');
  }
  return (
    <motion.div variants={variants} initial="initial" whileInView={"animate"} className="container h-full max-w-[1500px] mx-auto flex justify-center lg:justify-between items-center flex-col lg:flex-row ">
      <motion.div variants={variants} className="textContainer flex-1 flex flex-col mb-10 justify-end text-center md:text-left  w-full px-5">
        <motion.h3 variants={variants} className="text-5xl lg:text-7xl font-bold mb-10">
          Let&#39;s work <br /> together
        </motion.h3>
        <motion.div variants={variants} className="lg:[&>section>h4]:text-xl [&>section>h4]:font-bold space-y-5 text-left">
          <motion.section variants={variants}>
            <h4>Mail</h4>
            <a href="mailto:mustaksk62913@gmail.com">
              <span  className="hover:text-red-500 hover:underline" title="Email me">mustaksk62913@gmail.com</span>
            </a>
          </motion.section>
          <motion.section variants={variants}>
            <h4>Address</h4>
            <span>Bhakuri murshidabd   berhampore</span>
          </motion.section>
          <motion.section variants={variants}>
            <h4>Phone or whatsApp</h4>
            <a  href="https://api.whatsapp.com/send?phone=916296917453" target="_blank">
              <span className="hover:text-green-500 hover:underline" title="what's app me">+91 6296917453</span>
            </a>
          </motion.section>
        </motion.div>
      </motion.div>
      <div className="formContainer flex-1 relative w-full  px-5">
        <SVG className="absolute m-auto stroke-orange-400 -z-10"/>
        <motion.form initial={{opacity:0}} onSubmit={handleSubmit} animate={{opacity:1}} transition={{delay:4,duration:1}} method={"POST"} className="flex flex-col gap-5 z-10">
          <input type="text" required placeholder="Enter name" name="name" value={values.name} onChange={handleChange}/>
          <input type="email" required placeholder="Enter email"  name="email" value={values.email} onChange={handleChange}/>
          <textarea name="message" value={values.message} onChange={handleChange}  rows={8} placeholder="Type message..." className="border border-white p-1 rounded outline-none bg-transparent "
          ></textarea>
          <button type="submit" className="bg-orange-500 py-1 lg:py-2 w-full text-black  rounded hover:bg-orange-600">
            Send message 
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
}
