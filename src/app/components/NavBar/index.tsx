"use client";
import React from "react";
import style from "./NavStyle.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Sidebar from '../Sidebar';
import {socialGet} from '@/helper/apiHelper';
const varients = {
  hidden: { opacity: 0, y:-10},
  vissible:{
    opacity: 1,
    y:0,
    transition: { type: "spring",staggerChildren:0.1  },
  },
};
export default function index() {
  const [links,setLinks] = React.useState({github:'',instagram:'',youtube:''})
  React.useEffect(()=>{
    const getSocialLinks = async()=>{
      const data = await socialGet();
      setLinks({github:data.github,instagram:data.instagram,youtube:data.youtube})
    }
    getSocialLinks();
  },[])
  return (
    <nav>
      <div className="max-w-full my-3 h-16">
        <div className="side_bar absolute left-0">
          <Sidebar/>
        </div>
        <div className="wrapper flex justify-between items-center mx-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="admin [&>b]:text-xl mt-1 invisible lg:visible"
          >
            <b>Mustak</b>
          </motion.div>
          <motion.ul initial="hidden" animate={'vissible'} variants={varients} className={style.social}>
            <motion.li variants={varients}>
              <Link href={links.instagram} target="_blank">
                <Image
                  src={"/img/instagram.png"}
                  alt="Github"
                  width={30}
                  height={30}
                  loading="lazy"
                />
              </Link>
            </motion.li>
            <motion.li variants={varients}>
              <Link href={links.github} target="_blank">
                <Image
                  src={"/img/github.png"}
                  alt="Facebook"
                  width={30}
                  height={30}
                  loading="lazy"
                />
              </Link>
            </motion.li>
            <motion.li variants={varients}>
              <Link href={links.youtube} target="_blank">
                <Image
                  src={"/img/youtube.png"}
                  alt="Facebook"
                  width={30}
                  height={30}
                  loading="lazy"
                />
              </Link>
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </nav>
  );
}
