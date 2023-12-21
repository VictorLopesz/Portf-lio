'use client'
import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import Welcome from "@/components/Welcome"
import AboutMe from "@/components/AboutMe"
import Projetos from "@/components/Projetos"
import Contact from "@/components/Contact"


const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const changeNavbarCollor = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY >= 3) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeNavbarCollor);
  }

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <div className="flex min-h-screen flex-col bg-[#ededee]">
        <div className="w-full h-full flex items-center pt-10 md:pt-8 lg:pt-9 xl:pt-7 justify-center">
          <div className="container mx-auto w-[80%]">
            <Welcome />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="bg-[#000000] w-full h-full flex items-center justify-center">
          <div className="container mx-auto py-3 w-[80%]">
            <AboutMe />
          </div>
        </div>
        <div className="w-full flex items-center justify-center bg-gradient-to-b from-black to-[#233949]">
          <div className="container py-2 w-[90%]">
            <Projetos />
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-[#233949] to-[#000000]">
            <Contact />
        </div>
      </div>
    </>
  )
};

export default Home;