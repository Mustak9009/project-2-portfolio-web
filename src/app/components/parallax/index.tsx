'use client'
import React,{useRef} from 'react'
import {motion,useScroll,useTransform} from 'framer-motion';
export default function Parallax({type}:{type:string}) {
    const ref = useRef<HTMLDivElement | null>(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:['start start','end start']
    });
    const yText = useTransform(scrollYProgress,[0,1],['0%','500%']);
    const yBg = useTransform(scrollYProgress,[0,1],['0%','50%']);
  return (
    <div ref={ref} className='parallax w-full h-full relative flex justify-center items-center overflow-hidden' style={{background:type==='services'? 'linear-gradient(180deg,#111132,#0c0c1d)' : 'linear-gradient(180deg,#111132,#505064)'}}>
        <motion.h2 style={{y:yText}} className='text-center text-5xl lg:text-7xl font-bold'>{type==='services'?'What we do?':'What we did?'}</motion.h2>
        <motion.div className="mountains"></motion.div>
        <motion.div style={{y:yBg,background:`url(${type==='services' ? '/img/planets.png' : '/img/sun.png'})`}} className="planets hidden lg:block"></motion.div>
        <motion.div style={{x:yBg}} className="stars"></motion.div>
    </div>
  )
}
