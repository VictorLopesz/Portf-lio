'use client'
import React from 'react'
import SlideShow from '../SlideShow';

const Projetos = () => {
  return (
    <div id="projetos">

      <div className="mt-2 h-screen">
      <h2 className="text-[#5e91b6] ml-3 mb-3 sm:mt-3 font-lato font-bold text-2xl mt-3">Projetos</h2>
        <SlideShow />
      </div>
    </div>
  )
}

export default Projetos;