'use client'
import { useScroll, useSpring,motion, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
interface ItemsType{
  id:number,
  img:string,
  title:string,
  desc:string
}
const items:ItemsType[] = [
  {
    id:1,
    img:'/img/portfolio.png',
    title:'Next.js portfolio web',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ullam nemo at fugiat ipsa cupiditate. Nulla possimus alias earum quasi asperiores laboriosam qui aut facilis aspernatur provident iure fuga voluptates libero incidunt, delectus atque esse labore accusantium illo numquam saepe tempora dolorum! Distinctio quibusdam magni in ullam numquam, velit expedita!'
  },
  {
    id:2,
    img:'/img/portfolio.png',
    title:'Next.js portfolio web',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ullam nemo at fugiat ipsa cupiditate. Nulla possimus alias earum quasi asperiores laboriosam qui aut facilis aspernatur provident iure fuga voluptates libero incidunt, delectus atque esse labore accusantium illo numquam saepe tempora dolorum! Distinctio quibusdam magni in ullam numquam, velit expedita!'
  },
  {
    id:3,
    img:'/img/portfolio.png',
    title:'Next.js portfolio web',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ullam nemo at fugiat ipsa cupiditate. Nulla possimus alias earum quasi asperiores laboriosam qui aut facilis aspernatur provident iure fuga voluptates libero incidunt, delectus atque esse labore accusantium illo numquam saepe tempora dolorum! Distinctio quibusdam magni in ullam numquam, velit expedita!'
  },
];
const Projects = ({item}:{item:ItemsType})=>{
  const {desc,title,img} = item;
  const ref = useRef<HTMLTableSectionElement | null>(null);
  const {scrollYProgress} = useScroll({target:ref,offset:['start start','end start']});
  const y = useTransform(scrollYProgress,[0,1],['0%',"-200%"]);
  return(
    <section ref={ref} className='component overflow-hidden flex justify-around lg:justify-center items-center lg:gap-10 flex-col lg:flex-row'>
      <img src={img} alt='portfolio' width={700} height={100} className='rounded-md mx-20'/>
      <motion.div  className='w-[90%] lg:w-[40%] space-y-5' style={{y}}>
        <h2 className='text-4xl lg:text-5xl font-bold'>{title}</h2>
        <p className='text-gray-500'>{desc}</p>
        <button className='py-2 lg:py-3 rounded-md bg-yellow-500 text-black border-none px-5 hover:bg-yellow-600'>See demo</button>
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
  return (
    <div className='relative' ref={ref}>
      <div className="progress sticky z-10 top-0 left-0 text-center text-2xl lg:text-5xl font-bold pt-10 text-white">
        <h2>Featured <span className='text-orange-300'>Works</span></h2>
        <motion.div style={{scaleX}} className="progressbar h-1 bg-gray-400 rounded mt-4"></motion.div>
      </div>
      <div className='wrapper'>
      {items.map((item)=>(
        <Projects item={item} key={item.id}/>
        ))}
      </div>
      <div className='flex justify-center items-center'>
        <motion.button whileInView={{y:0,opacity:1}} initial={{y:-10,opacity:0}} onClick={()=>window.alert('Available in the future.')} className='absolute bottom-7 lg:bottom-20  w-36 btn hover:bg-yellow-500 hover:text-black hover:border-none'>See more</motion.button>
      </div>
    </div>
  )
}
