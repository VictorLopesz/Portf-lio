'use client'
import React, { useState, useEffect } from 'react';



export default function Skills() {
  const [mySkills, setMySkills] = useState([]);

  


  return (
    <>
    <div className="flex items-center justify-center">
    <div className="
    bg-[#D2B48C] w-[80%] h-[80%] rounded-sm 
    backdrop-blur-sm shadow-xl
    
    ">
      <h1 className="uppercase font-sansarrow flex items-center justify-center">skills</h1>
      <div 
      className="
      flex items-center justify-evenly
       text-white font-sansnarrow
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
