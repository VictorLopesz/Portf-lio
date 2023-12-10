'use client'
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import img1 from '../../../public/assets/imgTeste/img1.jpg';
import img2 from '../../../public/assets/imgTeste/img2.jpeg';
import img3 from '../../../public/assets/imgTeste/img3.jpg';
import img4 from '../../../public/assets/imgTeste/img4.jpg';
import img5 from '../../../public/assets/imgTeste/img5.webp';
import img6 from '../../../public/assets/imgTeste/img6.jpg';
import {FaEye, FaCode, FaHtml5, FaCss3Alt, FaReact} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTailwindcss, SiPhp } from 'react-icons/si';
import {TbBrandNextjs} from 'react-icons/tb';

const data = [
    {
        titulo: `Mário Bros`,
        img: img1,
        review: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
        repositorio: <a href="https://google.com.br" target="_blank"><FaEye/></a>,
        play: <a href="https://google.com.br" target="_blank"><FaCode/></a>,
        tecnologia:
            <div className="flex justify-center">
            <FaHtml5 className="w-7 h-7 text-[#E7562E] m-2"/>
            <SiTailwindcss className="w-7 h-7 text-[#1DC0CD] m-2" />
            <SiPhp className="w-7 h-7 text-[#7B7FB5] m-2" />
            </div>
    },
    {
        titulo: `Mário Bros`,
        img: img2,
        review: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
        repositorio: <a href="https://google.com.br" target="_blank"><FaEye/></a>,
        play: <a href="https://google.com.br" target="_blank"><FaCode/></a>,
        tecnologia:             
        <div className="flex justify-center">
                <FaHtml5 className="w-7 h-7 text-[#E7562E] m-2 "/>
            <SiTailwindcss className="w-7 h-7 text-[#1DC0CD] m-2" />
            <FaReact className="w-7 h-7 text-[#66DBFB] m-2" />
            <TbBrandNextjs className="w-7 h-7 text-[#efebeb] m-2"/>
        </div>
    },
    {
        titulo: `Mário Bros`,
        img: img3,
        review: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
        repositorio: <a href="https://google.com.br" target="_blank"><FaEye/></a>,
        play: <a href="https://google.com.br" target="_blank"><FaCode/></a>,
        tecnologia:
            <div className="flex justify-center">
            <FaHtml5 className="w-7 h-7 text-[#E7562E] m-2"/>
            <FaCss3Alt className="w-7 h-7 text-[#37ADDE] m-2" />
            <IoLogoJavascript className="w-7 h-7 text-[#F1C026] m-2" />
            </div>
    },
    {
        titulo: `Mário Bros`,
        img: img4,
        review: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
        repositorio: <a href="https://google.com.br" target="_blank"><FaEye/></a>,
        play: <a href="https://google.com.br" target="_blank"><FaCode/></a>,
        tecnologia:
            <div className="flex justify-start">
            <FaHtml5 className="w-7 h-7 text-[#E7562E] m-2"/>
            <FaCss3Alt className="w-7 h-7 text-[#37ADDE] m-2" />
            <IoLogoJavascript className="w-7 h-7 text-[#F1C026] m-2" />
            </div>
    },
    {
        titulo: `Mário Bros`,
        img: img5,
        review: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
        repositorio: <a href="https://google.com.br" target="_blank"><FaEye/></a>,
        play: <a href="https://google.com.br" target="_blank"><FaCode/></a>,
        tecnologia:
            <div className="flex justify-start">
            <FaHtml5 className="w-7 h-7 text-[#E7562E] m-2"/>
            <FaCss3Alt className="w-7 h-7 text-[#37ADDE] m-2" />
            <IoLogoJavascript className="w-7 h-7 text-[#F1C026] m-2" />
            </div>
    },
    {
        titulo: `Mário Bros`,
        img: img6,
        review: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
        repositorio: <a href="https://google.com.br" target="_blank"><FaEye/></a>,
        play: <a href="https://google.com.br" target="_blank"><FaCode/></a>,
        tecnologia:
            <div className="flex justify-start">
            <FaHtml5 className="w-7 h-7 text-[#E7562E] m-2"/>
            <FaCss3Alt className="w-7 h-7 text-[#37ADDE] m-2" />
            </div>
    },
    {
        titulo: `Mário Bros`,
        img: img6,
        review: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
        repositorio: <a href="https://google.com.br" target="_blank"><FaEye/></a>,
        play: <a href="https://google.com.br" target="_blank"><FaCode/></a>,
        tecnologia:
            <div className="flex justify-start">
            <FaHtml5 className="w-7 h-7 text-[#E7562E] m-2"/>
            <FaCss3Alt className="w-7 h-7 text-[#37ADDE] m-2" />
            <IoLogoJavascript className="w-7 h-7 text-[#F1C026] m-2" />
            </div>
    }

];

export default function SlideShow() {
    const isMobile = useMediaQuery({ maxWidth: 767 }); 

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    
  };
  
    return (
        <div className="w-3/4 m-auto">
            <div className="mt-20">
                <Slider {...settings}>

                {data.map((d:any, index) => (
                    <div key={index} className="bg-black h-[500px] text-white rounded-md">
                        <div className=" h-56 flex justify-center items-center rounded-md">
                            <Image src={d.img} alt="image1" className="h-56 rounded-md"/>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-4 p-4">
                            <p className="text-xl font-semibold">{d.titulo}</p>
                            <p className="text-sm text-justify">{d.review}</p>

                            <div className="flex justify-start text-white">
                                <div className="">
                                   {d.tecnologia}
                                </div>
                            </div>

                                <div className="flex items-center w-full justify-end font-medium mb-5">
                                    <div className="grid grid-cols-2 gap-x-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 -mb-4">
                                        <button className="
                                            bg-[#2a5c8e] shadow-md text-white text-sm p-2
                                                rounded-md hover:shadow-xl hover:text-[#ffffff]
                                                hover:bg-[#253e59] transition-transition ease-in-out delay-150
                                                hover:-transition-y-1 hover:scale-110 duration-300 flex items-center justify-evenly
                                                active:delay--150 
                                                ">

                                                {d.repositorio}
                                        </button>
                            
                                        <button className="
                                            bg-[#3c45c6] shadow-md text-white text-sm p-2
                                                rounded-md hover:shadow-xl hover:text-[#ffffff]
                                                hover:bg-[#2a2a74] transition ease-in-out delay-150
                                                hover:-transition-y-1 hover:scale-110 duration-300 flex items-center justify-evenly
                                                active:delay--150 
                                                "> 
                                                {d.play}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                ))}
                <div>
                </div>
                        </Slider>
            <br />
            <br />
            </div>
        </div>
    )
};