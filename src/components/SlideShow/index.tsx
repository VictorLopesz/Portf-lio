'use client'
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import { Fade } from 'react-awesome-reveal';

import jogoMemoria from '../../../public/assets/imgProjetos/JogoMemoria.png';
import jogoMario from '../../../public/assets/imgProjetos/mario-game.png';
import biblioteca from '../../../public/assets/imgProjetos/biblioteca.jpeg';
import calculadoraGorjeta from '../../../public/assets/imgProjetos/calculadoraGorjetas.png';
import linktree from '../../../public/assets/imgProjetos/linktree.png';


import { FaEye, FaCode, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiPhp } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMysql } from "react-icons/si";


const data = [
    {
        titulo: `Jogo da Memória`,
        review: `Aplicação interativa de Jogo da Memória desenvolvida com as tecnologias HTML, CSS e JavaScript`,
        img: jogoMemoria,
        repositorio: <a href="https://github.com/VictorLopesz/memorygame-js" target="_blank">
            <FaCode />
        </a>,
        play: <a href="https://victor-memorygame.vercel.app/pages/game.html" target="_blank">
            <FaEye />
        </a>,
        tecnologia:
            <div className="flex justify-center">
                <FaHtml5 className=" w-5 h-5  mr-1 text-[#F56B2E]" />
                <FaCss3Alt className=" w-5 h-5 mr-1 text-[#33A1D5]" />
                <IoLogoJavascript className=" w-5 h-5 mr-1 text-[#EFD81D]" />
            </div>
    },
    {
        titulo: `Jogo do Mário Bros`,
        review: `Aplicação interativa inspirada no jogo do Mário Bros desenvolvida com as tecnologias HTML, CSS e JavaScript`,
        img: jogoMario,
        repositorio: <a href="https://github.com/VictorLopesz/mario-game" target="_blank">
            <FaCode />
        </a>,
        play: <a href="https://mariogame-js.vercel.app/" target="_blank">
            <FaEye />
        </a>,
        tecnologia:
            <div className="flex justify-center">
                <FaHtml5 className=" w-5 h-5  mr-1 text-[#F56B2E]" />
                <FaCss3Alt className=" w-5 h-5  mr-1 text-[#33A1D5]" />
                <IoLogoJavascript className=" w-5 h-5 mr-1 text-[#EFD81D]" />
            </div>
    },
    {
        titulo: `Linktree`,
        review: `Aplicação desenvolvida com as tecnologias HTML, TailwindCSS, React e Next.Js, inspirada no site 'Linktr.ee'`,
        img: linktree,
        repositorio: <a href="https://github.com/VictorLopesz/linktree" target="_blank">
            <FaCode />
        </a>,
        play: <a href="https://victor-linktree.vercel.app/" target="_blank">
            <FaEye />
        </a>,
        tecnologia:
            <div className="flex justify-center">
                <FaHtml5 className=" w-5 h-5  mr-1 text-[#F56B2E]" />
                <SiTailwindcss className="w-5 h-5  mr-1 text-[#1DC0CD] " />
                <br/>
                <FaReact className="w-5 h-5  mr-1 text-[#087EA4] "/>
                <TbBrandNextjs className="w-5 h-5  mr-1 text-[#ffffff] " />

            </div>
    },
    {
        titulo: `Sistema de Biblioteca (CRUD)`,
        review: `Sistema desenvolvido com PHP e MySQL para aplicação de Crud (Criar, ler, atualizar e Deletar)`,
        img: biblioteca,
        repositorio: <a href="https://github.com/VictorLopesz/biblioteca" target="_blank">
            <FaCode />
        </a>,
        play: <a href="https://www.youtube.com/watch?v=tO6cmc-UGJM&ab_channel=VictorLopes" target="_blank">
            <FaEye />
        </a>,
        tecnologia:
            <div className="flex justify-center">
                <FaHtml5 className=" w-5 h-5  mr-1 text-[#F56B2E]" />
                <SiPhp className=" w-5 h-5 mr-1 text-[#7B7FB5]" />
                <br/>
                <FaCss3Alt className=" w-5 h-5  mr-1 text-[#33A1D5]" />
                <SiMysql className="w-7 h-7 mr-1 text-[#c9d7de]"/>

            </div>
    },
    {
        titulo: `Calculadora de Gorjetas`,
        review: `Aplicação front-end onde o funcionário digita
         o valor da conta e escolhe a porcentagem da gorjeta,
          tendo como retorno o valor total e a divisão.`,
        img: calculadoraGorjeta,
        repositorio: <a href="https://github.com/VictorLopesz/calculadoradegorjetas" target="_blank">
            <FaCode />
        </a>,
        play: <a href="https://calculadoradegorjetasjs.vercel.app/" target="_blank">
            <FaEye />
        </a>,
        tecnologia:
            <div className="flex justify-center">
                <FaHtml5 className=" w-5 h-5  mr-1 text-[#F56B2E]" />
                <FaCss3Alt className=" w-5 h-5  mr-1 text-[#33A1D5]" />
                <IoLogoJavascript className=" w-5 h-5  mr-1 text-[#EFD81D]" />
            </div>
    },
];

export default function SlideShow() {
    const isTablet = useMediaQuery({ maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true

    };

    return (
        <Fade
            direction="down"
            duration={1000}
        >
            <div className="w-3/4 m-auto">
                <div className="mt-20">
                    <Slider {...settings}>

                        {data.map((d: any, index) => (
                            <div key={index} className="bg-[#111111] h-[480px] text-white rounded-md">
                                <div className=" h-56 flex justify-center items-center rounded-md">
                                    <Image src={d.img} alt="image1" className=" h-48 p-1" />
                                </div>
                                <div className="flex flex-col justify-center items-center gap-10 p-2">
                                    <p className="text-[15px] font-semibold text-[#89B3D1]">{d.titulo}</p>
                                    <p className="text-xs flex items-center justify-center font-lato">{d.review}</p>

                                    <div className="flex items-center w-full justify-between
                                    mb-5
                                ">

                                        <div className="text-white flex justify-start items-center ml-6">
                                            {d.tecnologia}
                                        </div>


                                        <div className="grid grid-cols-2 p-2 gap-x-2 lg:grid-cols-2 xl:grid-cols-2">

                                            <button className="
                                                bg-[#89B3D1] shadow-md text-black text-sm p-2
                                                rounded-md hover:shadow-xl hover:text-[#ffffff]
                                                hover:bg-[#2a2a74] transition ease-in-out delay-150
                                                hover:-transition-y-1 hover:scale-110 duration-300
                                                active:delay-75 
                                                ">
                                                {d.play}
                                            </button>
                                            <button className="
                                            bg-[#89B3D1] shadow-md text-black text-sm p-2
                                                rounded-md hover:shadow-xl hover:text-[#ffffff]
                                                hover:bg-[#253e59] transition-transition ease-in-out delay-150
                                                hover:-transition-y-1 hover:scale-110 duration-300
                                                active:delay-75 
                                                ">

                                                {d.repositorio}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    <br />
                    <br />
                </div>
            </div>
        </Fade>
    )
};