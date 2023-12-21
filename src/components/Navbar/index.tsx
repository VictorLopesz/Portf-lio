'use client'
import React, { useState } from 'react';
import { Link } from "react-scroll";
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';
import { IoHome, IoHomeOutline, IoMailOutline, IoPersonOutline, IoPersonSharp } from "react-icons/io5";
import { FaCode, FaFileCode, FaGithub, FaInstagram, FaLinkedinIn, FaRegFileCode, FaWhatsapp } from 'react-icons/fa';
import { TiContacts } from 'react-icons/ti';
import { PiTelegramLogoDuotone } from 'react-icons/pi';
import { BiSolidMessage } from 'react-icons/bi';


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
        <div id="nav" className={` ${isScrolled ? 'bg-[#000000] text-[#7f7f82] fixed z-50 transition duration-150 ease-in'
            :
            'bg-[#F2F2F2] text-[#333334] transition duration-300 ease-out'} 
        fixed z-50 w-full h-12 text-3xl`}
        >

            <div className="flex justify-evenly items-center h-full sm:flex">
                <h1 className="flex text-[#5e6364] ml-12 mt-2 justify-center text-xl items-center font-semibold">
                    <FaCode className="mr-2 text-[#33b0cc]" />
                    <span className="justify-self-center">
                        Portfólio
                    </span>
                </h1>

                <div className="flex w-full justify-end mr-52 items-center mt-3">
                    <ul className="hidden sm:flex text-sm">

                        <Link
                            to="inicio"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-130}
                            activeClass="link-ativo"
                            scrolling='false'
                        >
                            <li
                                onClick={() => handleLinkClick("inicio")}
                                className={`p-2 md:px-6 text-center cursor-pointer 
                                        ${activeLink === "inicio" ? "no-underline text-current" : ""}
                                        hover:text-[#6375b6] transition duration-500 ease-in-out`}>
                                <div className="text-[12px] grid grid-cols-1">
                                    <IoHome size={16} className=" justify-self-center" />
                                    <span>
                                        Início
                                    </span>
                                </div>
                            </li>
                        </Link>

                        <Link
                            to="sobremim"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-45}
                            activeClass="link-ativo"
                            scrolling='false'
                        >
                            <li
                                onClick={() => handleLinkClick("sobremim")}
                                className={`p-2 md:px-6 text-center cursor-pointer 
                                        ${activeLink === "sobremim" ? "" : ""}
                                        hover:text-[#6375b6] transition duration-500 ease-in-out`}>
                                <div className="text-[12px] grid grid-cols-1">
                                    <IoPersonSharp size={16} className=" justify-self-center" />
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
                            activeClass="link-ativo"
                            scrolling='false'
                        >
                            <li
                                onClick={() => handleLinkClick("projetos")}
                                className={`p-2 md:px-6 text-center cursor-pointer 
                                        ${activeLink === "projetos" ? "" : ""}
                                        hover:text-[#6375b6] transition duration-500 ease-in-out`}>
                                <div className="text-[12px] grid grid-cols-1">
                                    <FaFileCode size={16} className="justify-self-center" />
                                    Projetos
                                </div>
                            </li>
                        </Link>
                        <Link
                            to="contato"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            activeClass="link-ativo"
                            scrolling='false'
                        >

                            <li
                                onClick={() => handleLinkClick("contato")}
                                className={`p-2 md:px-6 text-center cursor-pointer 
                                        ${activeLink === "contato" ? "" : ""}
                                        hover:text-[#6375b6] transition duration-500 ease-in-out`}>
                                <div className="text-[12px] grid grid-cols-1">
                                    <BiSolidMessage size={16} className="justify-self-center" />
                                    Contato
                                </div>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="md:hidden cursor-pointer mr-8">
                    <GiHamburgerMenu size={25} className="mr-16 mt-2 transition duration-300 ease-in-out text-[#a09f9f] active:text-[#c35555]" />
                </div>
            </div>
            <div className={
                menuOpen
                    ? "fixed left-0 top-0 w-[100%] md:z-50 p-4 sm:hidden h-screen transform translate-x-0 text-white bg-[#000000] ease-in overflow-x-auto overflow-y-hidden transition duration-150" :
                    "fixed left-[100%] top-0 p-4 ease-in transition -translate-x-6 duration-200 overflow-y-hidden overflow-x-auto"
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
                            scrolling='false'
                        >
                            <li onClick={() => setMenuOpen(false)}
                                className="mt-4 mb-3 flex items-center text-[#cfcccc] transition duration-300 justify-start text-[14px] ease-in-out cursor-pointer active:text-[#535353]"
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
                            scrolling='false'

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
                            scrolling='false'
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
                            scrolling='false'

                        >

                            <li onClick={() => setMenuOpen(false)}
                                className="mt-2  flex items-center text-[#cfcccc] transition duration-300 justify-start  text-[14px] ease-in-out cursor-pointer active:text-[#535353]"
                            >
                                <TiContacts className="-ml-[26px] text-[#88c2df] mr-3 w-[22px] h-[22px]" />
                                <span className="ml-0.5">
                                    Contato
                                </span>
                            </li>
                        </Link>
                    </ul>
                    <hr />
                    <br />

                    <span className="text-[#939393] ml-6 text-[12px] font-bold uppercase -pl-2">contato</span>
                    <div className="grid grid-cols-1 ml-6">
                        <br />
                        <a href="mailto:euvictor_h@hotmail.com" target="_blank" className="no-underline text-current">
                            <div className="w-full flex items-center">
                                <IoMailOutline className="w-[20px] h-[20px] mr-4 ml-2 text-[#88c2df]" />
                                <span className="text-[#939393] text-[13px]">euvictor_h@hotmail.com</span>
                            </div>
                        </a>
                        <br />

                        <a href="https://api.whatsapp.com/send?phone=5521980260633" target="_blank" className="no-underline text-current">
                            <div className="w-full flex items-center">
                                <FaWhatsapp className="w-[20px] h-[20px] mr-4 ml-2 text-[#88c2df]" />
                                <span className="text-[#939393] text-[13px]">+55 21 9 8026-0633</span>
                            </div>
                        </a>
                        <br />

                        <a href="https://t.me/pleasevictor" target="_blank" className="no-underline text-current">
                            <div className="w-full flex items-center">
                                <PiTelegramLogoDuotone className="w-[20px] h-[20px] mr-4 ml-2 text-[#88c2df]" />
                                <span className="text-[#939393] text-[13px]">@pleasevictor</span>
                            </div>
                        </a>
                    </div>


                    <hr />

                    <span className="ml-6 text-[#939393] text-[12px] font-bold uppercase -pl-2">mídias sociais</span>
                    <br />
                    <br />

                    <div className=" flex items-center justify-center mt-2 gap-x-2.5">
                        <a href="https://github.com/VictorLopesz" className="no-underline text-current">
                            <FaGithub className="w-6 h-6 mt-1 text-[#8899de]" />
                        </a>
                        <a href="https://www.linkedin.com/in/lopesvictorh/" className="no-underline text-current">
                            <FaLinkedinIn className="w-6 h-6 mt-1 text-[#58baeb]" />
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
        </div>

    );

};


export default Navbar;