'use client'
import React from 'react'
import SlideShow from '../SlideShow';
import Skills from '../Skills';

const Projetos = () => {
  return (
    <div id="projetos">

      <div className="h-screen">
        <Skills />
        <SlideShow />
      </div>
    </div>
  )
}

export default Projetos;