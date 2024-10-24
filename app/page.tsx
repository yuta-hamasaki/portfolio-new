"use client"
import dynamic from 'next/dynamic';
import Hero from "./components/Hero"
const Project = dynamic(() => import("./components/Project"), { ssr: false });
const Header = dynamic(() => import("./components/Header"), { ssr: false });
const About = dynamic(() => import("./components/About"), { ssr: false });
const Contact = dynamic(() => import("./components/Contact"), { ssr: false });
const ScrollBar = dynamic(() => import("./components/ScrollBar"), { ssr: false });
import { useState, useEffect } from "react"
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer'




export default function Home() {
  const [header, setHeader] = useState(false)

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
        <About/>
        <Project/>
        <Contact/>
        <Footer/>

    </>
  )
}
