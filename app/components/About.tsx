"use client"
import Image from 'next/image';
import Me from './YutaHamasaki_Img.JPG' 
import { usePathname } from "next/navigation";
import Link from 'next/link';

const About = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex justify-center flex-col" id="about">
          <h2 className="font-bold text-2xl text-center mb-4">About Me</h2>
          <div className="flex md:flex-row flex-col md:items-start items-center justify-center p-2"> 
          <Image 
              src={Me} 
              alt="My pic" 
              className="h-auto md:ml-20 md:w-1/5 w-2/5 rounded-lg shadow-lg"
            /> 
            <div className="md:ml-10 mt-6 mx-6 md:mt-0 text-center md:text-left">
              <p className="text-ms leading-relaxed">            
                After graduating from a university in Japan, I have been studying web development at Cornerstone College in Canada. As an aspiring frontend developer, I am deeply passionate about creating user-centered, responsive web applications. While I do not have formal work experience in this field, I have mastered HTML, CSS, and JavaScript. My focus has been on becoming proficient in TypeScript, React.js, Next.js, Node.js, and Redux to build user-friendly applications. I have dedicated significant time to self-study and practical exercises to enhance these skills.
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
