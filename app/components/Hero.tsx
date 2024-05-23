import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFilePdf, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import gif from "./gif.gif"

const Hero = () => {
  return (
    <div className='h-screen pb-10 flex justify-center items-center bg-green-50 relative'>
      <div className="md:block hidden">
        <p className="p-6">Home</p>
        <p className="p-6">About</p>
        <p className="p-6">Project</p>
        <p className="p-6">Contact</p>
      </div>
      <div className="h-auto w-full flex justify-center items-center z-10">
        <div className="flex flex-col">
          <h2 className='text-3xl'>Hi! I'm</h2>
          <h1 className='text-5xl md:text-7xl font-bold py-6'>Yuta Hamasaki</h1>
          <h3 className='text-4xl'>Software developer</h3>
          <div className="flex flex-row md:hidden z-10 mt-6">
            <FaGithub className="p-1 text-5xl "/>
            <FaLinkedin className="p-1 text-5xl "/>
            <FaFilePdf className="p-1 text-5xl "/>
            < MdOutlineMail className="p-1 text-5xl "/>
            < FaInstagram className="p-1 text-5xl "/>
          </div>
        </div>
      </div>
      <div className="md:block hidden z-10">
            <FaGithub className="p-2 text-5xl "/>
            <FaLinkedin className="p-2 text-5xl "/>
            <FaFilePdf className="p-2 text-5xl "/>
            < MdOutlineMail className="p-2 text-5xl "/>
            < FaInstagram className="p-2 text-5xl "/>
      </div>
      <div className='absolute bottom-0 right-0 mr-0 mb-0'>
        <Image src={gif} alt="myphoto" objectFit="cover" className='h-4/5 w-auto md:w-full md:h-auto'/>
      </div>
    </div>
  );
}

export default Hero;
