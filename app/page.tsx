"use client"
import Hero from "./components/Hero"
import Project from "./components/Project";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollBar from "./components/ScrollBar";
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
