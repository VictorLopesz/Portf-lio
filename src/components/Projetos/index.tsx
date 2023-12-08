'use client'
import React, { Component } from 'react'
import Cards from './Cards'
import Projects from '../../../constants'
import Slider from "react-slick";

const Projetos = () => {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

    return (
      <div id="projetos" className="flex itens-center justify-center">
        <div className="gap-x-8 gap-y-4 lg:gap-x-8 lg:gap-y-4 xl:gap-x-8 xl:gap-y-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-6">
          {Projects.map((project: any, index: any) => {
            return (
              <Cards
                key={index}
                title={project.title}
                text={project.text}
                image={project.image.src}
                
              />
            )
          })} 
        </div>
      </div>
    )
  }

  export default Projetos;