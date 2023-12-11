'use client'
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import { Fade } from 'react-awesome-reveal';

import jogoMemoria from '../../../public/assets/imgProjetos/JogoMemoria.png';
import jogoMario from '../../../public/assets/imgProjetos/mario-game.png';
import quiz from '../../../public/assets/imgProjetos/quiz.png';
import formularioCadastro from '../../../public/assets/imgProjetos/formulario-cadastro.png';
import calculadoraGorjeta from '../../../public/assets/imgProjetos/calculadoraGorjetas.png';


import { FaEye, FaCode, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiPhp } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

{/* <SiTailwindcss className=" text-[#1DC0CD] m-2" />
<SiPhp className=" text-[#7B7FB5] m-2" /> */}

const data = [
    {
        titulo: `Jogo da Memória`,
        img: jogoMemoria,
        review: `Jogo interativo desenvolvido com as tecnologias necessárias para o frontend,
         utilizando HTML, CSS e JavaScript. Assim que a página é aberta,
         é necessário preenchê-la com seu nome para iniciar o jogo.`,
        repositorio: <a href="https://github.com/VictorLopesz/memorygame-js" target="_blank">
            <FaCode />
        </a>,
        play: <a href="https://google.com.br" target="_blank">
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
        img: jogoMario,
        review: `Implementação básica de um jogo inspirado no Mario Bros,
        criado com HTML, CSS e JavaScript. Inclui elementos interativos,
        como a capacidade de salto do personagem principal (Mario),
        proporcionando uma base para desenvolvimentos mais complexos.`,
        repositorio: <a href="https://github.com/VictorLopesz/mario-game" target="_blank">
            <FaCode />
        </a>,
        play: <a href="https://google.com.br" target="_blank">
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
        titulo: `Quiz`,
        img: quiz,
        review: ` 
        Quiz sobre o coronavírus, desenvolvido com HTML,
        CSS e JavaScript. Os usuários respondem a perguntas, recebem feedback no final
         com base no desempenho e têm a opção de reiniciar o quiz.`,
        repositorio: <a href="https://github.com/VictorLopesz/AP3-SISTEMAS-QUIZ" target="_blank">
            <FaCode />
        </a>,
        play: <a href="https://google.com.br" target="_blank">
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
        titulo: `Formulário de Cadastro`,
        img: formularioCadastro,
        review: `Este formulário de cadastro HTML/CSS oferece uma interface responsiva e atraente para usuários.`,
        repositorio: <a href="https://github.com/VictorLopesz/formulariodecadastro" target="_blank">
            <FaCode />
        </a>,
        play: <a href="https://google.com.br" target="_blank">
            <FaEye />
        </a>,
        tecnologia:
            <div className="flex justify-start">
                <FaHtml5 className=" w-5 h-5  mr-1 text-[#F56B2E]" />
                <FaCss3Alt className=" w-5 h-5  mr-1 text-[#33A1D5]" />
            </div>
    },
    {
        titulo: `Calculadora de Gorjetas`,
        img: calculadoraGorjeta,
        review: `Este código representa uma calculadora de gorjetas HTML/CSS/JavaScript.
         Os usuários inserem o valor da conta, escolhem a porcentagem da gorjeta, 
         e têm a opção de dividir a conta entre um número específico de pessoas.
          A interface é responsiva e atualiza dinamicamente os valores da gorjeta, 
          total e divisão com base nas entradas dos usuários.`,
        repositorio: <a href="https://github.com/VictorLopesz/calculadoradegorjetas" target="_blank">
            <FaCode />
        </a>,
        play: <a href="https://google.com.br" target="_blank">
            <FaEye />
        </a>,
        tecnologia:
            <div className="flex justify-start">
                <FaHtml5 className=" w-5 h-5  mr-1 text-[#F56B2E]" />
                <FaCss3Alt className=" w-5 h-5  mr-1 text-[#33A1D5]" />
                <IoLogoJavascript className=" w-5 h-5  mr-1 text-[#EFD81D]" />
            </div>
    }

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
        pauseOnHover: false

    };

    return (
        <Fade
            direction="up"
            duration={500}
        >
            <div className="w-3/4 m-auto">
                <div className="mt-20">
                    <Slider {...settings}>

                        {data.map((d: any, index) => (
                            <div key={index} className="bg-[#111111] h-[480px] text-white rounded-md">
                                <div className=" h-56 flex justify-center items-center rounded-md">
                                    <Image src={d.img} alt="image1" className=" h-48 p-1" />
                                </div>
                                <div className="flex flex-col justify-center items-center gap-4 p-2">
                                    <p className="text-[15px] font-semibold text-[#89B3D1]">{d.titulo}</p>
                                    <p className="text-xs text-center">{d.review}</p>

                                    <div className="flex items-center w-full justify-between
                                    mb-5
                                ">

                                        <div className="text-white ml-10">
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

                        <div>
                        </div>
                    </Slider>

                    <br />
                    <br />
                </div>
            </div>
        </Fade>
    )
};