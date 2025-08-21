"use client"
import Image from 'next/image';
import Me from '@/public/YutaHamasaki_Img.JPG' 
import { usePathname } from "next/navigation";
import Link from 'next/link';

const About = () => {
  const pathname = usePathname();
  
  return (
    <div className='py-16 container mx-auto px-4 max-w-6xl'>
      <div className="space-y-8" id="about">
          <h2 className="font-bold text-3xl md:text-4xl text-center mb-8 relative">
            <span className="relative">
              About Me
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-green-500 mt-2"></div>
            </span>
          </h2>
          
          <div className="flex md:flex-row flex-col md:items-center items-center justify-between gap-12 p-4"> 
            <div className="w-64 md:w-80 flex-shrink-0">
              <Image 
                src={Me} 
                alt="My pic" 
                className="rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300
                object-cover aspect-square"
                priority
              /> 
            </div>
            
            <div className="flex flex-col space-y-6 md:flex-1">
              <p className="text-lg leading-relaxed text-gray-700">            
                After graduating from a university in Japan, I have been studying web development at Cornerstone College in Canada. As an aspiring frontend developer, I am deeply passionate about creating user-centered, responsive web applications. While I do not have formal work experience in this field, I have mastered HTML, CSS, and JavaScript. My focus has been on becoming proficient in TypeScript, React.js, Next.js, Node.js, and Redux to build user-friendly applications. I have dedicated significant time to self-study and practical exercises to enhance these skills.
              </p>
              
              {pathname === '/' && (
                <div className='flex justify-center md:justify-start'>
                  <Link href="/about">
                    <button className='
                      bg-green-500 
                      text-white 
                      font-semibold 
                      py-3 
                      px-6 
                      rounded-lg
                      shadow-md
                      transition-all 
                      duration-300 
                      ease-in-out
                      hover:bg-white 
                      hover:text-green-600 
                      hover:border-green-500 
                      hover:border 
                      hover:scale-105
                      active:scale-95
                    '>
                      More Info
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
    </div>
  )
}

export default About