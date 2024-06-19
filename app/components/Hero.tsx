"use client";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion, MotionProps } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFilePdf, FaInstagram } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";
import bg from './bg.png'

// Dynamic import for components
const LeftBar = dynamic(() => import('./LeftBar'), { ssr: false });
const RightBar = dynamic(() => import('./RightBar'), { ssr: false });

const animationSettings = (initialY: number, duration: number): MotionProps => ({
  initial: { y: initialY, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { type: 'spring', duration }
});


const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  
  const handleClick = () => {
    setIsClicked(!isClicked);
    setAnimateText(true); 
  };

  

  return (
    <div className='h-screen pb-10 flex justify-center items-center relative' style= {{ backgroundImage: `url(${bg.src})`}}>
      <LeftBar />
      <div className="h-auto w-full flex justify-center items-center z-10">
        <div className="flex flex-col cursor-pointer">
          <motion.h2 {...animationSettings(-30, 0.5)} className='text-2xl'>
            Hi! I&apos;m
          </motion.h2>
          <motion.h1
          {...animationSettings(-30, 0.5)} 
          animate={{ rotateY: isClicked ? 360 : 0 }}
          transition={{ duration: 1}}
          onClick={handleClick}
          className={`text-5xl md:text-7xl font-bold py-6 ${animateText ? 'animate__animated animate__bounceIn' : ''}`}>
          {isClicked ? (
            <>濱﨑<span className='text-green-500'> 雄太</span></>
          ) : (
            <><span className='text-green-500'>Yuta</span> Hamasaki</>
          )}
          </motion.h1>
          <motion.h3 {...animationSettings(-30, 2)} className='text-2xl'>
            Software developer
          </motion.h3>
          <motion.div {...animationSettings(-30, 2)} className="flex flex-row md:hidden z-10 mt-6">
            <Link href="https://github.com/yuta-hamasaki">
              <FaGithub className="p-1 text-4xl cursor-pointer" />
            </Link>
            <Link href="https://www.linkedin.com/in/yuta-hamasaki-623400215/">
              <FaLinkedin className="p-1 text-4xl cursor-pointer" />
            </Link>
            <Link href="your-pdf-link.pdf">
              <FaFilePdf className="p-1 text-4xl cursor-pointer" />
            </Link>
            <Link href="mailto:yh02052002@icloud.com">
              <MdOutlineMail className="p-1 text-4xl cursor-pointer" />
            </Link>
            <Link href="https://instagram.com/yuta.h_25">
              <FaInstagram className="p-1 text-4xl cursor-pointer" />
            </Link>
          </motion.div>
        </div>
      </div>
      <RightBar />
        <motion.div {...animationSettings(-20, 2)} className='absolute bottom-0 right-0 mr-0 mb-0 flex justify-end'>
          <video src={require("./gif.mp4")} autoPlay loop muted playsInline preload="none" className='h-auto w-2/5 hidden md:flex md:mr-10' />
        </motion.div>
      <div className="animate-bounce absolute bottom-0 text-4xl text-black">
        <Link href="#midsection">
          <HiOutlineChevronDoubleUp />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
