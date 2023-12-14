'use client'
import React, { useState } from "react"
import Navbar from "@/components/Navbar/index"
import Welcome from "@/components/Welcome/index"
import AboutMe from '@/components/AboutMe/index'
import Projetos from '@/components/Projetos/index'


const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const changeNavbarCollor = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY >= 3){
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  if (typeof window !== 'undefined'){
    window.addEventListener('scroll', changeNavbarCollor);
  }

  return (
    <>
      <Navbar isScrolled={isScrolled}/>
      <div className="flex min-h-screen flex-col bg-[#ededee]">
        <div className="w-full h-full mt-3 flex items-center pt-10 md:pt-8 lg:pt-9 xl:pt-10 justify-center">
          <div className="container mx-auto py-1 w-[80%]">
            <Welcome/>
          </div>
        </div>
        <br />
        <br />        
        <br />
        <div className="bg-[#000000] w-full h-full flex items-center justify-center">
          <div className="container mx-auto py-3 w-[80%]">
            <AboutMe/>
          </div>
        </div>
        <div className="w-full flex items-center justify-center bg-gradient-to-b from-black to-[#233949]">
          <div className="container py-2 w-[90%]">
            <Projetos/>
            <br />
          </div>
        </div>
      </div>
    </>
  )
};

export default Home;