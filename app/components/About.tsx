"use client"
import Image from 'next/image';
import Me from './YutaHamasaki_Img.JPG' 
import { usePathname } from "next/navigation";
import Link from 'next/link';

const About = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="md:mx-20 p-5 pt-16 flex justify-center flex-col" id="about">
          <h2 className="font-bold text-2xl text-center mb-4">About Me</h2>
          <div className="flex md:flex-row flex-col justify-center items-center p-2"> 
          <Image 
              src={Me} 
              alt="My pic" 
              className="h-auto md:ml-20 md:w-1/5 w-3/5 rounded-lg shadow-lg"
            /> 
            <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left">
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at 
                nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec 
                tellus sed augue semper porta. Mauris massa.
              </p>
              <div className='flex justify-center md:justify-start m-5'>
              {pathname === '/' ? 
                <Link href="/about">
              <button className='bg-green-500 hover:text-green-700 font-semibold text-white py-2 px-4 border hover:border-green-500 border-transparent rounded hover:bg-white hover:scale-110 hover:duration-300 transition duration-500 mt-2 shadow-sm'>
              More Info</button></Link>:<></>}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
