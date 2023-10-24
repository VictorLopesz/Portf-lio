'use client'
import React from 'react';
import Image from 'next/image';
import avatar from '../../../public/assets/avatar.png'

const Welcome = () => {
    return(
        <section>
            <div className="flex items-center justify-center md:w-full">
            {/* <div className="grid grid-cols-1 lg:grid-cols-12"> */}
            <div className="col-span-7 place-self-center">
            <h1 className="text-white mb-4 text-4xl lg:text-8xl font-extrabold">
                 Olá, eu sou Victor!
            </h1>
            <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                Lorem ipsum dolor sit amet consectuter adpsicing elit. Quisquis,
                voluptatum.
            </p>
            <div>
                <button className="px-6 py-3 uppercase font- transition duration-300 ease-in-out rounded-[3px] border-[#564626] active:bg-[#564626] hover:bg-[#7B6435] mr-4 bg-[#dedede] text-black">
                    Currículo
                </button>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className=" bg-gradient-to-r md:z-10 from-[#7B6435] to-[#ecd5a4] rounded-full w-[230px] h-[230px] lg:w-[380px] lg:h-[380px] ">
            <Image 
                src={avatar}
                alt='avatar'
                width={480}
                height={480}
                className=""
                />
                </div>
                </div>
            </div>
            {/* </div> */}
            </div>
        </section>
    )
};

export default Welcome;