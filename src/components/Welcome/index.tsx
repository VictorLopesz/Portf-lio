'use client'
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
import { Fade } from 'react-awesome-reveal';
import gif from '../../../public/assets/video.gif'
import { FaFilePdf } from 'react-icons/fa';


const Welcome = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1024px)"
    });

    return (
        <>
            <div id="inicio" className="pt-8 sm:mt-8 lg:mt-12 xl:mt-16 z-[50]">
                <div className="grid grid-cols-1 lg:grid-cols-12 ">
                    <div className="place-self-center col-span-7 text-center sm:text-left">
                        <h1 className="text-white mb-4 text-[20px] xl:text-5xl lg:text-5xl font-extrabold">
                            <span className="text-transparent font-extrabold md:mt-10 bg-clip-text bg-[#2b6b98]">
                                Olá, eu sou
                                <p>
                                    {" "}
                                </p>
                            </span>

                            <TypeAnimation
                                sequence={[
                                    'Victor Lopes',
                                    1000,
                                    'Desenvolvedor front-end',
                                    1000,
                                    'Quality Assurance',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>
                        <p className="text-white text-base sm:text-lg mb-6 lg:text-xl font-roboto">
                            <Fade
                                duration={2000}
                            >
                                <span className="font-semibold text-[#2b6b98]">
                                    Seja bem-vindo ao meu portfólio!<br />
                                </span>
                            </Fade>
                            <Fade
                                duration={2000}
                            >
                                Aqui você conhecerá um pouco sobre mim e meu trabalho.
                                Sinta-se à vontade.
                            </Fade>
                        </p>

                        <div className="flex items-center justify-center">
                            <Fade
                                duration={3000}
                            >
                                <button
                                    className="bg-[#0254ab85] hover:bg-[#2b466394] active:bg-[#5a8dc385] text-[#e2e2e3] hover:text-[#c0c0c0] active:text-[#777777] transition duration-150 items-center flex justify-center px-4 py-2 font-semibold text-sm shadow-2xl rounded-md">
                                    <a
                                        href="https://drive.google.com/file/d/1m8LamQmuB4rT5QxwvkxWa-6RInTf267t/view?usp=sharing"

                                        className="no-underline text-current flex justify-evenly items-center mt-2"
                                        target="_blank"
                                    >
                                        <FaFilePdf size={25} className="mr-1"/>
                                        <span className="uppercase">
                                            Download CV
                                        </span>
                                    </a>
                                </button>
                            </Fade>
                        </div>
                    </div>


                    <div className="col-span-5 place-self-center mt-4 lg:mt-0 flex justify-evenly items-center max-w-screen-lg">
                        <Fade
                            duration={2000}
                        >
                            <div className="rounded-full w-[230px] h-[230px] lg:w-[380px] lg:h-[380px] ">
                                <Image
                                    src={gif}
                                    alt='gif'
                                    width={400}
                                    height={400}
                                    className="rounded-full"
                                />
                            </div>
                        </Fade>
                        <div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
        </>
    )
};

export default dynamic(() => Promise.resolve(Welcome), { ssr: false });