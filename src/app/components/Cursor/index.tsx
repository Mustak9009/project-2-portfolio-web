'use client'
import React,{useEffect, useState} from 'react'
import {motion} from 'framer-motion';
export default function Cursor() {
    const [position,setPosition] = useState<{x:number,y:number}>({x:0,y:0});
    useEffect(()=>{
        const trackMouse = (e:MouseEvent) =>{
            setPosition({x:e.clientX,y:e.clientY});
        }
        window.addEventListener('mousemove',trackMouse);
        return() =>{
            window.removeEventListener('mousemove',trackMouse);
        } 
    },[]);
     console.log(position);
    return (
    <motion.div className='border border-orange-200  z-50 fixed p-5 rounded-full' animate={{x:position.x,y:position.y}}/>
  )
}
