import React from "react";
import style from "./NavStyle.module.css";
import Link from "next/link";
import Image from "next/image";
export default function index() {
  return (
    <nav>
      <div className="max-w-full my-3 h-16">
        <div className="side_bar absolute left-0">
          <p>s</p>
        </div>
        <div className="wrapper flex justify-between items-center mx-5">
          <div className="admin [&>b]:text-xl">
            <b>Mustak</b>
          </div>
          <div className={style.social}>
            <Link href={"#"}>
              <Image src={"/img/facebook.png"} alt="Facebook" width={30} height={30} loading="lazy"/>
            </Link>
            <Link href={"#"}>
              <Image src={"/img/instagram.png"} alt="Facebook" width={30} height={30} loading="lazy"/>
            </Link>
            <Link href={"#"}>
              <Image src={"/img/youtube.png"} alt="Facebook" width={30} height={30} loading="lazy"/>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
