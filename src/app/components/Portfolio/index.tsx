'use client'
import { useScroll, useSpring,motion } from 'framer-motion';
import React from 'react';
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
  {
    id:4,
    img:'/img/portfolio.png',
    title:'Next.js portfolio web',
    desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ullam nemo at fugiat ipsa cupiditate. Nulla possimus alias earum quasi asperiores laboriosam qui aut facilis aspernatur provident iure fuga voluptates libero incidunt, delectus atque esse labore accusantium illo numquam saepe tempora dolorum! Distinctio quibusdam magni in ullam numquam, velit expedita!'
  },
];
const Projects = ({item}:{item:ItemsType})=>{
  const {id,desc,title,img} = item;
  return(
    <section className='component'>
      {title}
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
      <div className="progress sticky top-0 left-0 text-center text-5xl font-bold pt-10 text-orange-500">
        <h2>Featured Works</h2>
        <motion.div style={{scaleX}} className="progressbar h-2 bg-gray-300 rounded mt-4"></motion.div>
      </div>
      {items.map((item)=>(
        <Projects item={item} key={item.id}/>
      ))}
    </div>
  )
}
