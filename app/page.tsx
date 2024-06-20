"use client"
import Hero from "./components/Hero"
import Project from "./components/Project"
import Header from "./components/Header"
import MidSection from './components/MidSection'
import About from './components/About'
import ScrollBar from './components/ScrollBar'
import { useState, useEffect } from "react"
import Contact from "./components/Contact"
import { Toaster } from 'react-hot-toast';






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
      <MidSection/>
      <About/>
      {/* top */}
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-green-100"></path>
      </svg>
      <Project/>
          {/* buttom */}
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-green-100"></path>
        </svg>
      <Contact/>
    </>
  )
}
