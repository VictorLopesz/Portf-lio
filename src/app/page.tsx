'use client'
import React from "react";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import AboutMe from '@/components/AboutMe';
import Skills from "@/components/Skills";
import Image from "next/image";



export default function Home() {
  return (
    <>
      <Navbar />
      <div className="
      pt-28 flex min-h-screen
      flex-col bg-gradient-to-r from-[#142742] to-[#16304E]
      ">

        <div className="container mx-auto py-4 w-[70%]">
          <Welcome />
          {/* falta colocar um avatar melhor e mais parecido comigo */}
        {/* adicionar o currículo para download */}
        </div>

          <div className="container mx-auto py-4 w-[70%]">
         {/* falta uma foto melhor minha */}
          <AboutMe />
          </div>

        <div>
        <Skills />
        </div>

      </div>
    </>
  )
};
