"use client"
import dynamic from 'next/dynamic';
import Hero from "./components/Hero"
const Project = dynamic(() => import("./components/Project"), { ssr: false });
const Header = dynamic(() => import("./components/Header"), { ssr: false });
const MidSection = dynamic(() => import("./components/MidSection"), { ssr: false });
const About = dynamic(() => import("./components/About"), { ssr: false });
const Contact = dynamic(() => import("./components/Contact"), { ssr: false });
const ScrollBar = dynamic(() => import("./components/ScrollBar"), { ssr: false });
import { useState, useEffect } from "react"
import { Toaster } from 'react-hot-toast';
import Loading from "./components/loading"


export default function Home() {
  const [header, setHeader] = useState(false)
  const [isLoading, setIsLoading] = useState(true);

  const scrollHeader = () =>{
    if(window.scrollY >= 200){
      setHeader(true)
    }else{
      setHeader(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', scrollHeader)
    return()=>{
      window.addEventListener('scroll', scrollHeader)
    }
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
    <Toaster 
    position="top-center"
    toastOptions={{
    duration:2000,
    }}
    />
      {header? <Header/>
      :
      <></>
      }
      <ScrollBar/>
        <Hero/>
        <MidSection/>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <rect x="1200" height="3.6"></rect>
        <rect height="3.6"></rect>
        <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" className="fill-slate-100"></path>
    </svg>
        <About/>
        {/* top */}
        <div className='bg-green-100'>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-white"></path>
        </svg>
        </div>
        <Project/>
            {/* buttom */}
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-green-100"></path>
          </svg>
        <Contact/>

    </>
  )
}
