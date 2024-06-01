"use client"
import Image from 'next/image';
import LeftBar from './LeftBar';
import RightBar from "./RightBar"
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFilePdf, FaInstagram} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import gif from "./gif.gif";
import bgimg from './background.png'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className='h-screen bg-cover pb-10 flex justify-center items-center relative bg-green-50'>
      <LeftBar/>
      <div className="h-auto w-full flex justify-center items-center z-10">
        <motion.div  
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 2 }} 
        className="flex flex-col">
          <h2 className='text-3xl'>Hi! I&apos;m</h2>
          <h1 className='text-5xl md:text-7xl font-bold py-6'>Yuta Hamasaki</h1>
          <h3 className='text-4xl'>Software developer</h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 3 }} 
            className="flex flex-row md:hidden z-10 mt-6">
            <FaGithub className="p-1 text-5xl "/>
            <FaLinkedin className="p-1 text-5xl "/>
            <FaFilePdf className="p-1 text-5xl "/>
            <MdOutlineMail className="p-1 text-5xl "/>
            <FaInstagram className="p-1 text-5xl "/>
          </motion.div>
        </motion.div>
      </div>
      <RightBar/>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 3 }} 
        className='absolute bottom-0 right-0 mr-0 mb-0'>
      <Image src={gif} alt="myphoto" objectFit="cover" className='h-4/5 w-auto md:w-full md:h-auto'/>
      </motion.div>
    </div>
  );
}

export default Hero;

