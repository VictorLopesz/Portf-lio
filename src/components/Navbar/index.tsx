'use client'
import React, { useState } from 'react';
import { Link } from "react-scroll";
import { BsFillPersonVcardFill, BsPersonWorkspace } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';
import { IoIosHome } from "react-icons/io";
import { MdEmail } from 'react-icons/md';
import { IoPersonSharp } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
import { Dropdown, DropdownTrigger, DropdownMenu, Button, DropdownItem } from "@nextui-org/react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';


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
                            activeClass="active"

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
                    ? "fixed left-0 top-0 w-[55%] md:z-50 sm:hidden h-screen text-white bg-[#000000] p-4 ease-in overflow-x-auto overflow-y-hidden transition duration-75" :
                    "fixed left-[100%] top-0 p-4 transition ease-out -translate-x-6 duration-200 overflow-y-auto overflow-x-hidden"
            }
            >
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer text-[#a09f9f] active:text-[#c35555]">
                        <CgCloseR size={25} />
                    </div>
                </div>
                <br />
                <br />
                <br />
                {/* <Image
                    src={logotipo}
                    alt="logot"
                    className="cursor-pointer" /> */}
                <div className="flex-col text-white text-sm">
                    <ul>
                        <Link
                            to="inicio"
                            smooth={true}
                            duration={500}
                            spy={false}
                            offset={-120}
                        >
                            <li onClick={() => setMenuOpen(false)}
                                className="py-2 flex items-center transition duration-300 font-sansnarrow text-base ease-in-out cursor-pointer active:text-[#535353]"
                            >
                                <IoIosHome className="mr-3 w-[20px] h-[20px]" /> Início
                            </li>
                        </Link>
                        <Link
                            to="sobremim"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-60}
                        >
                            <li onClick={() => setMenuOpen(false)}
                                className="py-2 flex items-center transition  duration-300 font-sansnarrow text-base ease-in-out cursor-pointer active:text-[#535353]"
                            >
                                <BsFillPersonVcardFill className="mr-3 w-[20px] h-[20px]" /> Sobre Mim
                            </li>
                        </Link>
                        <Link
                            to="projetos"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            activeClass="active"

                        >
                            <li onClick={() => setMenuOpen(false)}
                                className="py-2 flex items-center transition duration-300 font-sansnarrow text-base ease-in-out cursor-pointer active:text-[#535353]"
                            >
                                <BsPersonWorkspace className="mr-3 w-[20px] h-[20px]" /> Projetos
                            </li>
                        </Link>
                        <Link
                            to="contato"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            activeClass="active"

                        >

                            <li onClick={() => setMenuOpen(false)}
                                className="py-2 flex items-center transition duration-300 font-sansnarrow text-base ease-in-out cursor-pointer active:text-[#535353]"
                            >
                                <BiSolidContact className="mr-3 w-[20px] h-[20px]" /> Contato
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="flex justify-center items-center w-full">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                variant="bordered"
                            >
                                <span className="text-white uppercase">Mídias Sociais</span>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu>
                            <DropdownItem className="flex items-center justify-center"><MdEmail /><FaInstagram /><FaLinkedin /></DropdownItem>
                            <DropdownItem className="flex items-center justify-center"><FaTelegramPlane /><FaWhatsapp /><FaGithub /></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                </div>
            </div>
        </div >
    );

};


export default Navbar;