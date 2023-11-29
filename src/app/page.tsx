'use client';
import React from "react";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import AboutMe from '@/components/AboutMe';
import Skills from "@/components/Skills";
import SocialNetwork from '../components/SocialNetwork';


export default function Home() {
  return (
    <>

      <Navbar />
      <div className="
      pt-28 flex min-h-screen
      flex-col bg-gradient-to-r from-[#1B1B1B] to-[#000000]
      ">
        <div className="container mx-auto py-4 w-[70%]">
          <Welcome />
          {/* falta colocar um avatar melhor e mais parecido comigo */}
          {/* adicionar o currículo para download */}
        </div>
        <div>
          <SocialNetwork />
        </div>
        <div className="container mx-auto py-4 w-[70%]">
          {/* falta uma foto melhor minha */}
          <AboutMe />
        </div>
      </div>
    </>
  )
};
