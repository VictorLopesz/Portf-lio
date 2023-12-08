'use client';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaGithubSquare, FaTelegram, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';
import { RiMailFill } from "react-icons/ri";
import Link from 'next/link';

export default function socialNetwork() {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1024px)"
    });

    return (
        <div>

            {isDesktopOrLaptop && (
                <div className="
                text-[#5f7d92] justify-center flex items-center
                     ">
                    <>
                        <div>
                            <Link
                                rel="stylesheet"
                                href="https://github.com/VictorLopesz"
                                target="_blank
                ">
                                <FaGithubSquare size={25}
                                    className="
                            m-1 text-[29px] hover:text-[#777777] 
                             hover:transition transition hover:duration-150 duration-150 hover:ease-in-out ease-in-out "
                                />
                            </Link>
                        </div>
                        <div>
                            <Link
                                rel="stylesheet"
                                href="mailto:euvictor_h@hotmail.com"
                                target="_blank
         ">
                                <RiMailFill size={25}
                                    className="
                m-1 hover:text-[#BD1D1B]
                 hover:transition transition hover:duration-150 duration-150 hover:ease-in-out ease-in-out 
            "/>
                            </Link>
                        </div>
                        <div>
                            <Link
                                rel="stylesheet"
                                href="https://t.me/pleasevictor"
                                target="_blank"
                            >
                                <FaTelegram size={25}
                                    className="
                m-1 hover:text-[#519dbe]
                 hover:transition transition hover:duration-150 duration-150 hover:ease-in-out ease-in-out 
            "/>
                            </Link>
                        </div>
                        <div>
                            <Link
                                rel="stylesheet"
                                href="https://www.linkedin.com/in/lopesvictorh/"
                                target="_blan
            k">
                                <FaLinkedin size={25}
                                    className="
            m-1 text-[28px] hover:text-[#0A66C2]
             hover:transition transition hover:duration-150 duration-150 hover:ease-in-out ease-in-out 
             "/>
                            </Link>
                        </div>
                        <div>

                            <Link
                                rel="stylesheet"
                                href="https://wa.me/5521980260633"
                                target="_blank
                            ">
                                <FaWhatsappSquare size={25}
                                    className="
            m-1 text-[29px] hover:text-[#278b4c]
             hover:transition transition hover:duration-150 duration-150 hover:ease-in-out ease-in-out "/>
                            </Link>
                        </div>
                    </>
                </div>
            )
            }
        </div >
    )
};