'use client';
import React from "react";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import AboutMe from '@/components/AboutMe';
import SocialNetwork from '../components/SocialNetwork';
import Projects from "@/components/Projetos";


export default function Home() {
  return (
    <>

      <Navbar />
      <div className="
      pt-28 flex min-h-screen
      flex-col bg-[#ededee]
      ">
        <div className="container mx-auto py-4 w-[70%]">
          <Welcome />
          {/* falta colocar um avatar melhor e mais parecido comigo */}
          {/* adicionar o currículo para download */}
        </div>

        <br />
        <br />
        <br />
        <div className="bg-[#000000] w-full h-screen flex items-center justify-center">
        <div className="container mx-auto py-4 w-[70%]">
          {/* falta uma foto minha*/}
          <AboutMe />
        </div>
        </div>
        <br />
        <div>
          <Projects />
        </div>
      </div>
    </>
  )
};
