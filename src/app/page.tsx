'use client'
import React from "react";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import AboutMe from '@/components/AboutMe';
import Projetos from '@/components/Projetos';

export default function Home() {
  return (
    <>

      <Navbar />
      <div className="
      flex min-h-screen
      flex-col bg-[#ededee]
      ">
        <div className="w-full h-full flex items-center pt-10 md:pt-8 lg:pt-9 xl:pt-10 justify-center">
          <div className="container mx-auto py-4 w-[80%]">
            <Welcome />
            {/* adicionar o currículo para download */}
          </div>
        </div>
        <br />
        <br />        
        <br />
        <div className="bg-[#000000] w-full h-full flex items-center justify-center">
          <div className="container mx-auto py-4 w-[80%]">
            <AboutMe />
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-black to-[#233949]">
          <div className="container py-4 w-[90%]">
            <Projetos />
            {/* falta colocar links e imagens corretas, além de completar a página */}
            <br />
          </div>
        </div>
      </div>
    </>
  )
};
