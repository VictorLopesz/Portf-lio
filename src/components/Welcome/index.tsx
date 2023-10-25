'use client'
import React from 'react';
import Image from 'next/image';
import avatar from '../../../public/assets/avatar.png'
import { Link } from 'react-scroll';

const Welcome = () => {
    return (

        <section>
            <div className="grid grid-cols-1 ">
                <div className="place-self-center col-span-7 text-center sm:text-left">
                    <h1 className="text-white mb-4 text-7xl sm:text-5x1 lg:text-6xl font-extrabold">
                        Olá, eu sou Victor!
                        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                            Lorem ipsum dolor sit amet consectuter adpsicing elit. Quisquis,
                            voluptatum.
                        </p>
                    </h1>

                    <div>
                        <button className="
                        p-4 px-5 py-3 rounded-sm uppercase
                        bg-gradient-to-br from-[#44361d]
                        to-[#E0C997] font-sansnarrow 
                        font-semibold hover:bg-gradient-to-br
                         hover:from-[#44361d] hover:to-[#8b6e3c]
                         text-[#0d0c0c]
                         ">
                            download cv
                        </button>
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
            </div>
        </section>
    )
};

export default Welcome;

