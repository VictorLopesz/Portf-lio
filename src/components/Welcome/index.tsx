'use client'
import React from 'react';
import Image from 'next/image';
import avatar from '../../../public/assets/avatar.png'
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';



const Welcome = () => {
    return (

        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12 ">
                <div className="place-self-center col-span-7 text-center sm:text-left">
                    <h1 className="text-white mb-4 text-3x1 sm:text-5x1 lg:text-4xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#574d3d] to-[#E0C997]">
                            Olá, eu sou <br /> {" "}
                        </span>

                        <TypeAnimation
                            sequence={[
                                'Victor',
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
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Lorem ipsum dolor sit amet consectuter adpsicing elit. Quisquis,
                        voluptatum.
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
        </section>
    )
};

export default Welcome;

