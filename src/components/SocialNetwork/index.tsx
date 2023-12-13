'use client';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { PiGithubLogoFill } from "react-icons/pi";
import { IoIosMailUnread } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';


export default function socialNetwork() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
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
                                <PiGithubLogoFill size={20}
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
                                <IoIosMailUnread size={22}
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
                                <FaTelegramPlane size={22}
                                    className="
                m-1 hover:text-[#519dbe]
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
                                <FaWhatsapp size={21}
                                    className="
            m-1 text-[29px] hover:text-[#278b4c]
             hover:transition transition hover:duration-150 duration-150 hover:ease-in-out ease-in-out "/>
                            </Link>
                        </div>
                        <div>
                            <Link
                                rel="stylesheet"
                                href="https://www.linkedin.com/in/lopesvictorh/"
                                target="_blan
            k">
                                <FaLinkedinIn size={21}
                                    className="
            m-1 text-[28px] hover:text-[#0A66C2]
             hover:transition transition hover:duration-150 duration-150 hover:ease-in-out ease-in-out 
             "/>
                            </Link>
                        </div>
                    </>
                </div>
            )
            }
        </div >
    )
};