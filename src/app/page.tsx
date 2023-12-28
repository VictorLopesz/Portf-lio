'use client'
import React, { useState } from "react"
import Navbar from "@/components/Navbar"
import Welcome from "@/components/Welcome"
import AboutMe from "@/components/AboutMe"
import Projetos from "@/components/Projetos"
import Contact from "@/components/Contact"
import StarsCanvas from "@/components/StarsBackground"
import Footer from "@/components/Footer"


const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const changeNavbarCollor = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY >= 630) {
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
      <div className="flex min-h-screen flex-col bg-black">
        <div className="w-full h-full flex items-center pt-10 md:pt-8 lg:pt-9 xl:pt-7 justify-center">
          <div className="container mx-auto w-[80%] z-[40]">
            <Welcome />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="bg-[#000000] w-full h-full flex items-center justify-center">
          <StarsCanvas />
          <div className="container mx-auto py-3 w-[80%] z-[40]">
            <AboutMe />
          </div>
        </div>
        <div className="w-full flex items-center justify-center bg-gradient-to-b from-black to-[#233949]">
          <div className="container w-[90%] h-screen mt-10 z-[40]">
            <Projetos />
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-[#233949] z-[40] to-[#000000]">
          <div className="container mx-auto w-[90%]">
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
};

export default Home;
