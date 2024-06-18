"use client"
import { useState } from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
    initial={{y:-20, opacity: 0 }}
    whileInView={{y:0, opacity: 1}}
    transition={{type: "spring",
    duration: 0.4}}
    className="py-5 px-10 flex justify-between items-center fixed w-full bg-green-100 z-50 shadow-md">
      <div>
        <h1 className="text-2xl font-extrabold">
          <Link href="/">Yuta Hamasaki</Link>
        </h1>
      </div>

      <div className="hidden md:flex z-1">
        <div className="text-sm font-medium flex flex-row">
          <div className="flex flex-row mr-3 px-3 py-3"> 
          <Link href="/about"><p className="px-2">About Me</p></Link>
            <Link href="#projects"><p className="px-2">Projects</p></Link>
            <Link href="#projects"><p className='px-2'>Skills</p></Link>
            <Link href="#projects"><p className='px-2'>Contact</p></Link>
          </div>
        </div>
      </div>


      <div className="md:hidden">
      <button onClick={toggleMenu} className="flex flex-col justify-center items-center">
        <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-
        ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
        </span>
        <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} >
        </span>
        <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
        </span>
      </button>
      </div>

      {isOpen && (
        <motion.div
        initial={{y:-10, opacity: 0 }}
        whileInView={{y:0, opacity: 1}}
        transition={{type: "spring",
        duration: 0.4}}
        className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-2 z-1">
          <div className="flex flex-col items-center">
            <Link href="/about"><p className="py-2">About Me</p></Link>
            <Link href="#projects"><p className="py-2">Projects</p></Link>
            <Link href="#projects"><p className='p-2'>Skills</p></Link>
            <Link href="#projects"><p className='p-2'>Contact</p></Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}