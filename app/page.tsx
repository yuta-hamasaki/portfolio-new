"use client"
import Hero from "./components/Hero"
import Project from "./components/Project"
import Header from "./components/Header"
import { useState, useEffect } from "react"
import Contact from "./components/Contact"


export default function Home() {
  const [header, setHeader] = useState(false)

  const scrollHeader = () =>{
    if(window.scrollY >= 500){
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
    {header? <Header/>
    :
    <></>
    }
    <Hero/>
    <Project/>
    <Contact/>
    </>
  )
}
