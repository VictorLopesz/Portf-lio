'use client'
import React from "react";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import AboutMe from '@/components/AboutMe';
import Image from "next/image";



export default function Home() {
  return (
    <>
      <Navbar />
      {/* falta o scroll suave */}
      {/* colocar a sidebar de outra cor quando o scroll é feito */}
      <div className="
      pt-28 flex min-h-screen
      flex-col bg-gradient-to-r from-[#142742] to-[#16304E]
      ">
        <div className="container mx-auto py-4 w-[70%]">
          <Welcome />
         {/* falta uma foto melhor minha */}
        {/* adicionar o currículo para download */}
          <AboutMe />
        </div>


      </div>
    </>
  )
};
