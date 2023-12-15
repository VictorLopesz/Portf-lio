'use client'
import React, { useState } from 'react';
import { Link } from "react-scroll";
import Image from 'next/image';
import { BsFillPersonVcardFill, BsPersonWorkspace } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';
import logotipo from '../../../public/assets/logotipo.png';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { PiGithubLogoFill } from "react-icons/pi";
import { IoIosHome, IoIosMailUnread } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";



const Navbar = ({ isScrolled }:any) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("inicio");



    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = (link:any) => {
        setActiveLink(link);
        setMenuOpen(false);
    };


    return (
        <div id="nav" className={` ${isScrolled ? 'bg-[#000000] text-white text-3xl font-barlow fixed z-50 transition duration-150 ease-in'
            :
            'bg-[#F2F2F2] text-black transition duration-300 ease-out'} 
                    fixed z-50 w-full h-12 text-3xl font-barlow`}
        >
            <div className="flex justify-evenly items-center h-full sm:flex">
                <div className="flex w-full justify-center items-center">
                    <ul className="hidden sm:flex text-sm">

                        <Link
                            to="inicio"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-120}
                        >
                            <li
                                onClick={() => handleLinkClick("inicio")}
                                className={`p-2 md:px-6 text-center cursor-pointer 
                                        ${activeLink === "inicio" ? "border-b-2 border-[#457191] text-semibold text-[#457191]" : ""}
                                        hover:text-[#6375b6] transition duration-500 ease-in-out`}>
                                <div className="flex items-center justify-evenly">
                                    <IoIosHome className="mr-1" />
                                    Início
                                </div>
                            </li>
                        </Link>

                        <Link
                            to="sobremim"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-45}
                        >
                            <li
                                onClick={() => handleLinkClick("sobremim")}
                                className={`p-2 md:px-6 text-center cursor-pointer 
                                        ${activeLink === "sobremim" ? "border-b-2 border-[#457191] text-semibold text-[#457191]" : ""}
                                        hover:text-[#6375b6] transition duration-500 ease-in-out`}>
                                <div className="flex items-center justify-evenly">
                                    <IoPersonSharp className="mr-1" />
                                    Sobre Mim
                                </div>
                            </li>
                        </Link>
                            <Link
                                to="projetos"
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                            >
                                <li
                                    onClick={() => handleLinkClick("projetos")}
                                    className={`p-2 md:px-6 text-center cursor-pointer 
                                        ${activeLink === "projetos" ? "border-b-2 border-[#457191] text-semibold text-[#457191]" : ""}
                                        hover:text-[#6375b6] transition duration-500 ease-in-out`}>
                                    <div className="flex items-center justify-evenly">
                                        <BsPersonWorkspace className="mr-1" />
                                        Projetos
                                    </div>
                                </li>
                            </Link>
                            <li
                                onClick={() => handleLinkClick("cursos")}
                                className={`p-2 md:px-6 text-center cursor-pointer 
                                        ${activeLink === "cursos" ? "border-b-2 border-[#457191] text-semibold text-[#457191]" : ""}
                                        hover:text-[#6375b6] transition duration-500 ease-in-out`}>
                                <div className="flex items-center justify-evenly">
                                    <BiSolidContact className="mr-1" />
                                    Contato
                                </div>
                            </li>
                    </ul>
                </div>
                <div onClick={handleNav} className="md:hidden cursor-pointer mr-8">
                    <GiHamburgerMenu size={25} className=" transition duration-300 ease-in-out text-[#a09f9f] active:text-[#c35555]" />
                </div>
            </div>
            <div className={
                menuOpen
                    ? "fixed left-0 top-0 w-[55%] md:z-50 sm:hidden h-screen text-white bg-[#000000] p-10 ease-in overflow-x-auto overflow-y-hidden transition duration-75" :
                    "fixed left-[100%] top-0 p-10 transition ease-out -translate-x-6 duration-200 overflow-y-auto overflow-x-hidden "
            }
            >
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer text-[#a09f9f] active:text-[#c35555]">
                        <CgCloseR size={25} />
                    </div>
                </div>
                <br />
                <Image
                    src={logotipo}
                    alt="logot"
                    className="cursor-pointer" />
                <div className="flex-col text-white text-sm">
                    <ul>
                        <Link href="/"
                            to="inicio"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-120}
                        >
                            <li onClick={() => setMenuOpen(false)}
                                className="py-1 flex items-center transition duration-300 ease-in-out cursor-pointer active:text-[#535353]"
                            >
                                <IoIosHome className="m-2" /> Início
                            </li>
                        </Link>
                        <Link href="/"
                            to="sobremim"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-60}
                        >
                            <li onClick={() => setMenuOpen(false)}
                                className="py-1 flex items-center transition  duration-300 ease-in-out cursor-pointer active:text-[#535353]"
                            >
                                <BsFillPersonVcardFill className="m-2" /> Sobre Mim
                            </li>
                        </Link>
                        <Link href="/"
                            to="projetos"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                        >
                            <li onClick={() => setMenuOpen(false)}
                                className="py-1 flex items-center transition duration-300 ease-in-out cursor-pointer  active:text-[#535353]"
                            >
                                <BsPersonWorkspace className="m-2" /> Projetos
                            </li>
                        </Link>
                        <a href="/">
                            <li onClick={() => setMenuOpen(false)}
                                className="py-1 flex items-center transition duration-300 ease-in-out cursor-pointer active:text-[#535353]"
                            >
                                <BiSolidContact className="m-2" /> Contato
                            </li>
                        </a>
                    </ul>
                </div>

                <br />
                <br />
                <hr />
                <br />

                <div className="flex items-center justify-center w-full text-white font-NotoKawi py-1 pt-10">
                    <span className="text-sm ">CONTATO</span>
                </div>
                <div className="items-center flex justify-center">
                    <div className="flex items-center text-white mt-5 text-2xl">
                        <a href={'https://github.com/VictorLopesz'}>
                            <PiGithubLogoFill className="m-1 text-[28px] active:text-[#4a4949] transition duration-200 ease-in-out" />
                        </a>

                        <a href={'mailto:euvictor_h@hotmail.com'}>
                            <IoIosMailUnread className="m-1 text-[30px] active:text-[#BD1D1B] transition duration-200 ease-in-out" />
                        </a>


                        <a href={'https://t.me/pleasevictor'}>
                            <FaTelegramPlane className="m-1 text-[29px] active:text-[#0A66C2] transition duration-200 ease-in-out " />
                        </a>

                        <a href={'https://www.linkedin.com/in/lopesvictorh/'}>
                            <FaLinkedinIn className="m-1 text-[28px] active:text-[#0A66C2] transition duration-200 ease-in-out " />
                        </a>

                        <a href={'https://wa.me/5521980260633'}>
                            <FaWhatsapp className="m-1 text-[28px] active:text-[#25D366] transition duration-200 ease-in-out" />
                        </a>

                    </div>
                </div>
            </div>
        </div >
    );
    
};


export default Navbar;