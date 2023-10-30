'use client'
import React, { useState, useEffect } from 'react';



export default function Skills() {
  const [mySkills, setMySkills] = useState([]);




  return (
    <>
      <div>
      <h1 
      className="uppercase font-sansarrow
      flex items-center font-bold justify-center
      text-4xl text-[#e7d5bd]">
        skills
      </h1>
      </div>
    <div className="flex items-center justify-center">
    <div className="
    bg-[#BB9E70] w-[80%] h-[80%] rounded-sm 
    backdrop-blur-sm shadow-xl flex items-center justify-center
    
    ">
      <div 
      className="
      flex items-center justify-between space-x-10
       text-black font-sansnarrow
       ">
          <span>HTML / CSS</span>

          <span>Tailwind CSS</span>

          <span>Next.Js</span>

          <span>PHP</span>

          <span>SQL</span>
      </div>
    </div>
    </div>
    </>
  )
};
