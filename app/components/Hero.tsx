"use client"
import React, { useState, useEffect} from 'react';
import Image from 'next/image';
import LeftBar from './LeftBar';
import RightBar from "./RightBar";
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFilePdf, FaInstagram} from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi"
import { MdOutlineMail } from "react-icons/md";
// import gif from "./gif.gif";

import { motion } from "framer-motion";
import bg from "./bg.png"

const Hero = () => {
  const [isHover, setIsHover] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const handleHoverStart = () => {
    setIsHover(true);
  };

  const handleHoverEnd = () => {
    setIsHover(false);
  };


  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // 768px以上の場合はデスクトップと判断
    };
    handleResize(); // 初期化時に1度実行
    window.addEventListener('resize', handleResize); // リサイズ時に実行
    return () => window.removeEventListener('resize', handleResize); // クリーンアップ
  }, []);
  
  return (
    <div className={`h-screen pb-10 flex justify-center items-center relative ${isDesktop ? '' : 'bg-green-50'}`} style={isDesktop ? {backgroundImage: `url(${bg.src})`} : {}}>
      <LeftBar />
      <div className="h-auto w-full flex justify-center items-center z-10">
        <div
        className="flex flex-col cursor-pointer"
        >
          <motion.h2
          initial={{y:-30, opacity: 0 }}
          whileInView={{y:0, opacity: 1}}
          transition={{type: "spring",
          duration: 0.5}}
          className='text-3xl'>Hi! I&apos;m</motion.h2>
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 2 }}
            whileHover={{ scale: 1.1, rotateY: 360, transition: { duration: 1 } }}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            className='text-5xl md:text-7xl font-bold py-6 text-center'
          >
            {isHover ? (
              <>
                濱﨑<span className='text-green-500'> 雄太</span>
              </>
            ) : (
              <>
                <span className='text-green-500'>Yuta</span> Hamasaki
              </>
            )}
          </motion.h1>
          <motion.h3
          initial={{y:-30, opacity: 0 }}
          whileInView={{y:0, opacity: 1}}
          transition={{type: "spring",
          duration: 2}}
          className='text-4xl'>Software developer</motion.h3>
          <motion.div
          initial={{y:-30, opacity: 0 }}
          whileInView={{y:0, opacity: 1}}
          transition={{type: "spring",
          duration: 2}}
            className="flex flex-row md:hidden z-10 mt-6"
          >
            <Link href="https://github.com/yuta-hamasaki">
              <FaGithub className="p-1 text-5xl cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com/in/yuta-hamasaki-623400215/">
              <FaLinkedin className="p-1 text-5xl cursor-pointer" />
            </Link>
            <Link href="your-pdf-link.pdf">
              <FaFilePdf className="p-1 text-5xl cursor-pointer" />
            </Link>
            <Link href="mailto:yh02052002@icloud.com">
              <MdOutlineMail className="p-1 text-5xl cursor-pointer" />
            </Link>
            <Link href="https://instagram.com/yuta.h_25">
              <FaInstagram className="p-1 text-5xl cursor-pointer" />
            </Link>
          </motion.div>
        </div>
      </div>
      <RightBar />
      <motion.div
        initial={{y:-20, opacity: 0 }}
        whileInView={{y:0, opacity: 1}}
        transition={{type: "spring",
        duration: 2}}
        className='absolute bottom-0 right-0 mr-0 mb-0 flex justify-end'
      >
        {/* <Image src={gif} alt="myphoto" objectFit="cover" className='h-auto w-auto md:w-auto md:h-auto' /> */}
        <video src={require("./gif.mp4")} autoPlay loop className=' h-auto w-auto md:w-3/5 md:h-auto ' >
        </video>

      </motion.div>
        <div
          className="animate-bounce absolute bottom-0 text-4xl text-white md:text-black">
          <HiOutlineChevronDoubleUp />
        </div>
    </div>
  );
}

export default Hero;
