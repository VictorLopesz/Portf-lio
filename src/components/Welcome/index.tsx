'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import avatar from '../../../public/assets/avatar.png'
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { ImMail } from 'react-icons/im';
import { useMediaQuery } from 'react-responsive';
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs';



const Welcome = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1024px)"
    });

    return (

        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 ">
                <div className="place-self-center col-span-7 text-center sm:text-left">
                    <h1 className="text-white mb-4 text-3x1 sm:text-5x1 lg:text-5xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#574d3d] to-[#E0C997]">
                            Olá, eu sou <br /> {" "}
                        </span>

                        <TypeAnimation
                            sequence={[
                                'Victor Lopes',
                                1000,
                                'Desenvolvedor front-end',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <br /><br />
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl font-roboto">
                        <span className="font-semibold text-white">
                            Seja bem-vindo ao meu portfólio<br />
                        </span>
                        Aqui você conhecerá um pouco sobre mim e meu trabalho<br />
                        Caso se interesse, estou à disposição para entrar em contato pelas minhas redes sociais e telefone<br />
                        Sinta-se à vontade
                    </p>
                    <div className="flex items-center justify-center">
                        <button className="
                        p-4 px-5 py-3 rounded-lg uppercase
                        bg-gradient-to-br from-[#44361d]
                        to-[#E0C997] font-sansnarrow 
                        font-semibold hover:bg-gradient-to-br
                         hover:from-[#44361d] hover:to-[#8b6e3c]
                         text-[#1c1a1a] ease-in duration-300
                          active:bg-slate-800
                         ">
                            download cv
                        </button>
                    </div>
                </div>


                <div className="col-span-5 place-self-center mt-4 lg:mt-0 flex justify-evenly items-center">
                    <div className=" bg-gradient-to-r from-[#7B6435] to-[#ecd5a4] rounded-full w-[230px] h-[230px] lg:w-[380px] lg:h-[380px] ">
                        <Image
                            src={avatar}
                            alt='avatar'
                            width={400}
                            height={400}
                            className="rounded-full"
                        />
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <br />

                <div className={`flex items-center justify-center w-full text-[#d2d5d7] text-[26px]`}>
                    {isDesktopOrLaptop && (
                        <>
                            <Link rel="stylesheet" href="https://github.com/VictorLopesz" target="_blank"><FaGithubSquare className="m-1 text-[29px] hover:text-[#000000] transition duration-200 ease-in-out" /></Link>
                            <Link rel="stylesheet" href="mailto:euvictor_h@hotmail.com" target="_blank"><ImMail className="m-1 hover:text-[#BD1D1B] transition duration-200 ease-in-out" /></Link>
                            <Link rel="stylesheet" href="https://t.me/pleasevictor" target="_blank"><BsTelegram className="m-1 hover:text-[#519dbe] transition duration-200 ease-in-out " /></Link>
                            <Link rel="stylesheet" href="https://www.linkedin.com/in/lopesvictorh/" target="_blank"><FaLinkedin className="m-1 text-[28px] hover:text-[#0A66C2] transition duration-200 ease-in-out" /></Link>
                            <Link rel="stylesheet" href="https://wa.me/5521980260633" target="_blank"><FaWhatsappSquare className="m-1 text-[29px] hover:text-[#25D366] transition duration-200 ease-in-out" /></Link>
                        </>
                    )}
                </div>
        </section>
    )
};

export default Welcome;