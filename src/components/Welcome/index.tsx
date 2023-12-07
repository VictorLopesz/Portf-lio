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
            <div id="inicio">
                <div className="grid grid-cols-1 lg:grid-cols-12 ">
                    <div className="place-self-center col-span-7 text-center sm:text-left">
                        <h1 className="text-white mb-4 text-3x1 sm:text-6x1 lg:text-4xl font-extrabold">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9e7f4c] to-[#c3a971]">
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
                        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl font-roboto">
                            <Fade
                                duration={4000}
                            >
                                <span className="font-semibold text-white text-justify">
                                    Seja bem-vindo ao meu portfólio!<br />
                                </span>
                                </Fade>
                                <Fade
                                    duration={8000}
                                >
                                    Aqui você conhecerá um pouco sobre mim e meu trabalho.
                                    Sinta-se à vontade.
                                </Fade>
                        </p>

                        <div className="flex items-center justify-center">
                            <Fade
                                duration={2000}
                                direction='up'
                            >
                                <button className="
                        p-4 px-5 py-3 rounded-lg uppercase
                        bg-gradient-to-br from-[#aa8441]
                        to-[#c7a761] font-sansnarrow 
                        font-semibold hover:bg-gradient-to-br
                         hover:from-[#44361d] hover:to-[#8b6e3c]
                         text-[#1c1a1a] ease-in duration-300
                          active:bg-slate-800
                         ">
                                    download cv
                                </button>
                            </Fade>
                        </div>
                    </div>


                    <div className="col-span-5 place-self-center mt-4 lg:mt-0 flex justify-evenly items-center max-w-screen-lg">
                        <Fade
                            duration={2000}
                            direction='up'
                        >
                            <div className=" bg-gradient-to-r from-[#7B6435] to-[#ecd5a4] rounded-full w-[230px] h-[230px] lg:w-[380px] lg:h-[380px] ">
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
            </div>
            <br />
        </>
    )
};

export default dynamic(() => Promise.resolve(Welcome), { ssr: false });