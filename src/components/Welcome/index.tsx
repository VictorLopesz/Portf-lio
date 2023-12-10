'use client'
import React from 'react';
import Image from 'next/image';
import avatar from '../../../public/assets/avatar.png'
import { TypeAnimation } from 'react-type-animation';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
import { Fade } from 'react-awesome-reveal';


const Welcome = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1024px)"
    });

    return (
        <>
            <div id="inicio" className="pt-12 sm:mt-8 lg:mt-12 xl:mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 ">
                    <div className="place-self-center col-span-7 text-center sm:text-left">
                        <h1 className="text-black mb-4 text-3x1 lg:text-4xl font-extrabold">
                            <span className="text-transparent bg-clip-text bg-[#233949]">
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
                                    'Desenvolvedor back-end',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>
                        <p className="text-black text-base sm:text-lg mb-6 lg:text-xl font-roboto">
                            <Fade
                                duration={4000}
                            >
                                <span className="font-semibold text-[#233949] text-justify">
                                    Seja bem-vindo ao meu portfólio!<br />
                                </span>
                                </Fade>
                                <Fade
                                    duration={6000}
                                >
                                    Aqui você conhecerá um pouco sobre mim e meu trabalho.
                                    Sinta-se à vontade.
                                </Fade>
                        </p>

                        <div className="flex items-center justify-center">
                            <Fade
                                duration={2000}
                                direction='down'
                            >
                                <button className="
                        p-4 px-5 py-3 rounded-lg uppercase
                        bg-[#233949] font-lato 
                        font-semibold text-[#fff] hover:text-[#c5c2c2]
                          active:bg-slate-800
                         ">
                                    download cv
                                </button>
                            </Fade>
                        </div>
                    </div>


                    <div className="col-span-5 place-self-center mt-4 lg:mt-0 flex justify-evenly items-center max-w-screen-lg">
                        <Fade
                            duration={3000}
                            direction='down'
                        >
                            <div className=" bg-gradient-to-r from-[#8bb6d4] to-[#5e91b6] rounded-full w-[230px] h-[230px] lg:w-[380px] lg:h-[380px] ">
                                <Image
                                    src={avatar}
                                    alt='avatar'
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