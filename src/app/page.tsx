'use client'
import React from "react";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Image from "next/image";



export default function Home() {
  return (
    <>
  <Navbar/>
    <div className="
      pt-32 flex min-h-screen
      flex-col bg-gradient-to-r from-[#142742] to-[#16304E] container mx-auto py-4 px-12
      ">
        <Welcome/>
      
      
      </div>
    </>
  )
};
