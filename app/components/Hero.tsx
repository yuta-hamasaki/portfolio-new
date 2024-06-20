"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { m } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFilePdf, FaInstagram } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";
import bg from './bg2.png';


const LeftBar = dynamic(() => import('./LeftBar'), { ssr: false });
const RightBar = dynamic(() => import('./RightBar'), { ssr: false });



const Hero = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setAnimateText(true);
  };

  useEffect(() => {
    if (animateText) {
      const timer = setTimeout(() => setAnimateText(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [animateText]);

  return (
    <div className='h-screen pb-10 flex justify-center items-center relative' style={{ backgroundImage: `url(${bg.src})` }}>
      <LeftBar />
      <div className="h-auto w-full flex justify-center items-center z-10">
        <div
        className="flex flex-col cursor-pointer">
          <h2 className='text-2xl'>
            Hi! I&apos;m
          </h2>
          <m.h1
            animate={{ rotateY: isClicked ? 360 : 0 }}
            transition={{ duration: 1 }}
            onClick={handleClick}
            className={`text-5xl md:text-6xl font-bold py-6 ${animateText ? 'animate__animated animate__bounceIn' : ''}`}
          >
            {isClicked ? (
              <>濱﨑<span className='text-green-500'> 雄太</span></>
            ) : (
              <><span className='text-green-500'>Yuta</span> Hamasaki</>
            )}
          </m.h1>
          <h3 className='text-2xl'>
            Software developer
          </h3>
          <div className="flex flex-row md:hidden z-10 mt-6">
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
          </div>
        </div>
      </div>
      <RightBar />
      <div className='absolute bottom-0 right-0 mr-0 mb-0 flex justify-end'>
        <video
          src={require("./gif.mp4")}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className='h-auto md:w-2/5 flex md:mr-10'
          onLoadStart={(e) => e.currentTarget.classList.add('opacity-0')}
          onCanPlay={(e) => e.currentTarget.classList.add('opacity-100')}
          style={{ transition: 'opacity 0.5s' }}
        />
      </div>
      <div className="animate-bounce absolute bottom-0 text-4xl text-black">
        <Link href="#midsection">
          <HiOutlineChevronDoubleUp />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
