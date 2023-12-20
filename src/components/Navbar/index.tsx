'use client'
import React, { useState } from 'react';
import { Link } from "react-scroll";
import { BsPersonWorkspace } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';
import { IoIosHome } from "react-icons/io";
import { IoHomeOutline, IoMailOutline, IoPersonOutline, IoPersonSharp } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import { FaCode, FaGithub, FaInstagram, FaLinkedinIn, FaRegFileCode, FaTelegram, FaTelegramPlane, FaWhatsapp, } from 'react-icons/fa';
import { TiContacts } from 'react-icons/ti';
import { PiTelegramLogoDuotone } from 'react-icons/pi';


const Navbar = ({ isScrolled }: any) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("inicio");


    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = (link: any) => {
        setActiveLink(link);
        setMenuOpen(false);
    };

    return (
        <div id="nav" className={` ${isScrolled ? 'bg-[#000000] text-white text-3xl fixed z-50 transition duration-150 ease-in'
            :
            'bg-[#F2F2F2] text-black transition duration-300 ease-out'} 
        fixed z-50 w-full h-12 text-3xl`}
        >
            <div className="flex justify-evenly items-center h-full sm:flex">
                <div className="flex w-full justify-center items-center pb-2 pt-4">
                    <ul className="hidden sm:flex text-sm">

                        <Link
                            to="inicio"
                            smooth={true}
                            duration={500}
                            spy={false}
                            offset={-130}
                        >
                            <li
                                onClick={() => handleLinkClick("inicio")}
                                className={`p-2 md:px-6 text-center cursor-pointer 
                                        ${activeLink === "inicio" ? "" : ""}
                                        hover:text-[#6375b6] transition duration-500 ease-in-out`}>
                                <div className="flex items-center justify-evenly">
                                    <IoIosHome className="mr-3" />
                                    Início
                                </div>
                            </li>
                        </Link>

                        <Link
                            to="sobremim"
                            smooth={true}
                            duration={500}
                            spy={false}
                            offset={-45}
                        >
                            <li
                                onClick={() => handleLinkClick("sobremim")}
                                className={`p-2 md:px-6 text-center cursor-pointer 
                                        ${activeLink === "sobremim" ? "" : ""}
                                        hover:text-[#6375b6] transition duration-500 ease-in-out`}>
                                <div className="flex items-center justify-evenly">
                                    <IoPersonSharp className="mr-3" />
                                    Sobre Mim
                                </div>
                            </li>
                        </Link>
                        <Link
                            to="projetos"
                            smooth={true}
                            duration={500}
                            spy={false}
                            offset={-80}
                        >
                            <li
                                onClick={() => handleLinkClick("projetos")}
                                className={`p-2 md:px-6 text-center cursor-pointer 
                                        ${activeLink === "projetos" ? "" : ""}
                                        hover:text-[#6375b6] transition duration-500 ease-in-out`}>
                                <div className="flex items-center justify-evenly">
                                    <BsPersonWorkspace className="mr-3" />
                                    Projetos
                                </div>
                            </li>
                        </Link>
                        <Link
                            to="contato"
                            smooth={true}
                            duration={500}
                            spy={false}
                            offset={-80}
                            activeClass="link-ativo"
                        >

                            <li
                                onClick={() => handleLinkClick("cursos")}
                                className={`p-2 md:px-6 text-center cursor-pointer 
                                        ${activeLink === "cursos" ? "" : ""}
                                        hover:text-[#6375b6] transition duration-500 ease-in-out`}>
                                <div className="flex items-center justify-evenly">
                                    <BiSolidContact className="mr-1" />
                                    Contato
                                </div>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="md:hidden cursor-pointer mr-8">
                    <GiHamburgerMenu size={25} className=" transition duration-300 ease-in-out text-[#a09f9f] active:text-[#c35555]" />
                </div>
            </div>
            <div className={
                menuOpen
                    ? "fixed left-0 top-0 w-[93%] md:z-50 p-3 rounded-r-lg sm:hidden h-screen transform -translate-x-0 text-white bg-[#000000] ease-in-out overflow-x-auto overflow-y-hidden transition duration-150" :
                    "fixed left-[100%] top-0 p-4 rounded-r-lg ease-in-out transition -translate-x-6 duration-200 overflow-y-hidden overflow-x-auto"
            }
            >
                <div className="flex pr-2 w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer text-[#c1bfbf] pt-2 active:text-[#c35555]">
                        <CgCloseR size={25} />
                    </div>
                </div>
                <br />
                <br />
                <h1 className="w-full flex text-[#aab6b9] -mt-16 justify-center text-xl items-center font-semibold">
                    <FaCode className="mr-2 text-[#33b0cc]" />
                    Portfólio
                </h1>
                <div className="flex-col mt-9 text-white text-xs pl-5">
                    <ul>
                        <Link
                            to="inicio"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-120}
                            activeClass="link-ativo"

                        >
                            <li onClick={() => setMenuOpen(false)}
                                className="mt-4 mb-3 flex items-center text-[#cfcccc] transition duration-300 justify-start  text-[14px] ease-in-out cursor-pointer active:text-[#535353]"
                            >
                                <IoHomeOutline className=" -ml-6 text-[#88c2df] mr-4 w-[20px] h-[20px]" />
                                <span className="mt-1">
                                    Início
                                </span>
                            </li>
                        </Link>
                        <Link
                            to="sobremim"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-60}
                            activeClass="link-ativo"

                        >
                            <li onClick={() => setMenuOpen(false)}
                                className="mt-2 mb-3  flex items-center text-[#cfcccc] transition justify-start duration-300 text-[14px] ease-in-out cursor-pointer active:text-[#535353]"
                            >
                                <IoPersonOutline className=" -ml-6 text-[#88c2df] mr-4 w-[20px] h-[20px]" />
                                <span 
                                className="mt-1">
                                    Sobre Mim
                                </span>
                            </li>
                        </Link>
                        <Link
                            to="projetos"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            activeClass="link-ativo"
                        >
                            <li onClick={() => setMenuOpen(false)}
                                className="mt-2 mb-3  flex items-center text-[#cfcccc] transition duration-300 justify-start  text-[14px] ease-in-out cursor-pointer active:text-[#535353]"
                            >
                                <FaRegFileCode className="-ml-6 text-[#88c2df] mr-4 w-[20px] h-[20px]" />
                                <span className="mt-1">
                                    Projetos
                                </span>
                            </li>
                        </Link>
                        <Link
                            to="contato"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            activeClass="link-ativo"

                        >

                            <li onClick={() => setMenuOpen(false)}
                                className="mt-2 mb-3  flex items-center text-[#cfcccc] transition duration-300 justify-start  text-[14px] ease-in-out cursor-pointer active:text-[#535353]"
                            >
                                <TiContacts className="-ml-[26px] text-[#88c2df] mr-3 w-[22px] h-[22px]" />
                                <span className="mt-1 ml-0.5">
                                    Contato
                                </span>
                            </li>
                        </Link>
                    </ul>
                </div>
                <hr />
                <span className="text-[#939393] ml-6 text-[12px] font-bold uppercase -pl-2">contato</span>

                <div className="grid grid-cols-1 ml-6">
                    <div className="w-full flex items-center">
                        <IoMailOutline className="w-[20px] h-[20px] mr-4 ml-2 text-[#88c2df]" />
                        <span className="text-[#939393] text-[13px]">euvictor_h@hotmail.com</span>
                    </div>
                    <div className="w-full flex items-center">
                        <FaWhatsapp className="w-[20px] h-[20px] mr-4 ml-2 text-[#88c2df]" />
                        <span className="text-[#939393] text-[13px]">+55 21 9 8026-0633</span>
                    </div>
                    <div className="w-full flex items-center">
                        <PiTelegramLogoDuotone className="w-[20px] h-[20px] mr-4 ml-2 text-[#88c2df]" />
                        <span className="text-[#939393] text-[13px]">@pleasevictor</span>
                    </div>
                </div>
                <hr />
                <span className="ml-6 text-[#939393] text-[12px] font-bold uppercase -pl-2">mídias sociais</span>

                <div className=" flex items-center justify-center mt-2 gap-x-2.5">
                    <a href="https://github.com/VictorLopesz" className="no-underline text-current">
                        <FaGithub className="w-6 h-6 mt-1 text-[#8899de]" />
                    </a>
                    <a href="https://www.linkedin.com/in/lopesvictorh/" className="no-underline text-current">
                        <FaLinkedinIn className="w-6 h-6 mt-1 text-[#58baeb]"/>
                    </a>
                    <a href="https://www.instagram.com/_pleasevictor/" className="no-underline text-current">
                        <FaInstagram className="w-6 h-6 mt-1 text-[#c17e40]" />
                    </a>
                </div>
                <span className="text-[#939393] mt-6 ml-4 text-[13px] flex items-center justify-center">
                    Desenvolvido por Victor Lopes
                </span>
            </div>
        </div >
    );

};


export default Navbar;