'use client'
import { useScroll, useSpring,motion, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import {useQuery} from '@tanstack/react-query';
import { projectGet } from '@/helper/apiHelper';
import Link from 'next/link';
const Projects = ({description,title,img,url}:{description:string,img:string,title:string,url:string})=>{
  const ref = useRef<HTMLTableSectionElement | null>(null);
  const {scrollYProgress} = useScroll({target:ref,offset:['start start','end start']});
  const y = useTransform(scrollYProgress,[0,1],['0%',"-200%"]);

  return(
    <section ref={ref} className='component overflow-hidden flex  justify-center items-center gap-10 flex-col lg:flex-row'>
      <img src={img} alt='portfolio' width={700} height={100} className='rounded-md mx-20'/>
      <motion.div  className='w-[90%] lg:w-[40%] space-y-5 text-center md:text-left' style={{y}}>
        <h2 className='text-4xl lg:text-5xl font-bold'>{title}</h2>
        <p className='text-gray-500'>{description}</p>
        <button className='py-2 lg:py-3 rounded-md bg-yellow-500 text-black border-none px-5 w-full md:w-32 hover:bg-yellow-600'>
          <Link href={url} target='_blank'>
            See demo
          </Link>
          </button>
      </motion.div>
    </section>
  )
}
export default function Portfolio() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll({target:ref,offset:['end end','start start']});
  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30
  });
  const {data:projects} = useQuery({queryKey:['projects'],queryFn:projectGet});
  return (
    <div className='relative' ref={ref}>
      <div className="progress sticky z-10 top-0 left-0 text-center text-3xl  lg:text-5xl font-bold pt-10 text-white">
        <h2>Featured <span className='text-orange-300'>Works</span></h2>
        <motion.div style={{scaleX}} className="progressbar h-1 bg-gray-400 rounded mt-4"></motion.div>
      </div>
      <div className='wrapper'>
      {projects && projects.projects.map(({title,description,id,img,url}:{description:string,id:string,img:string,title:string,url:string})=>(
        <Projects  key={id} title={title} description={description} img={img} url={url}/>
        ))}
      </div>
      <div className='flex justify-center items-center'>
        <motion.button whileInView={{y:0,opacity:1}} initial={{y:-10,opacity:0}} onClick={()=>window.alert('Available in the future.')} className='absolute bottom-10 w-36 btn hover:bg-yellow-500 hover:text-black hover:border-none'>See more</motion.button>
      </div>
    </div>
  )
}
