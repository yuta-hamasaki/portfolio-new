"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 0.4 }}
      className="py-5 px-10 flex justify-between items-center fixed w-full z-50"
    >
      <div>
        <h1 className="text-2xl font-extrabold text-green-500">
          <Link href="/">Yuta <span className="text-black">Hamasaki</span></Link>
        </h1>
      </div>

      <div className="hidden md:flex">
        <nav className="flex space-x-6 text-sm font-medium">
          <Link href="/#about" scroll={true}>
            <p className="p-2">About</p>
          </Link>
          <Link href="/#projects" scroll={true}>
            <p className="p-2">Projects</p>
          </Link>
          <Link href="/#contact" scroll={true}>
            <p className="p-2">Contact</p>
          </Link>
        </nav>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="flex flex-col justify-center items-center">
          <span className={`block h-0.5 w-6 bg-black transition-transform duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
          <span className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ease-out my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block h-0.5 w-6 bg-black transition-transform duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-2">
          <nav className="flex flex-col items-center">
            <Link href="/#about" scroll={true}><p className="py-2">About</p></Link>
            <Link href="/#projects" scroll={true}><p className="py-2">Projects</p></Link>
            <Link href="/#contact" scroll={true}><p className="py-2">Contact</p></Link>
          </nav>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
