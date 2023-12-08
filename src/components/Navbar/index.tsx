'use client'
import { Link } from 'react-scroll';
import Image from 'next/image';
import react, { useState } from 'react';
import { BiBookBookmark, BiBrain } from 'react-icons/bi';
import { BsFillPersonVcardFill, BsPersonWorkspace, BsTelegram } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg';
import logotipo from '../../../public/assets/logotipo.png';
import { ImMail } from 'react-icons/im';
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 7) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav id="nav" className={` ${color ? 'bg-[#000000] text-white fixed z-50 transition duration-150 ease-in'
            :
            'bg-[#F2F2F2] text-black transition duration-300 ease-out'} 
                    fixed z-50 w-full h-12 font-sansnarrow`}
        >
            <div className="flex justify-evenly items-center h-full sm:flex">
                <div className="flex w-full justify-center items-center">
                    <ul className="hidden sm:flex text-sm">
                        <Link
                            to="inicio"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={50}
                        >
                            <li className=" p-2
                            md:px-6 text-center 
                             text-bold cursor-pointer
                             hover:text-[#e8e7e5] hover:bg-[#304E63]
                             active:text-[#535353] active:bg-[#1818188e] 
                             transition duration-500 ease-in-out">Início</li>
                        </Link>
                        <Link
                            to="sobremim"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={50}
                        >
                            <li className="p-2
                            md:px-6 text-center 
                             text-bold cursor-pointer
                             hover:text-[#e8e7e5] hover:bg-[#304E63]
                             active:text-[#535353] active:bg-[#1818188e] 
                             transition duration-500 ease-in-out">Sobre Mim</li>
                        </Link>
                        <a href="/">
                            <Link
                                to="projetos"
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={50}
                            >
                                <li className="p-2
                            md:px-6 text-center 
                             text-bold cursor-pointer
                             hover:text-[#e8e7e5] hover:bg-[#304E63]
                             active:text-[#535353] active:bg-[#1818188e] 
                             transition duration-500 ease-in-out">Projetos</li>
                            </Link>
                        </a>
                        <a href="/">
                            <li className="p-2
                            md:px-6 text-center 
                             text-bold cursor-pointer
                             hover:text-[#e8e7e5] hover:bg-[#304E63]
                             active:text-[#535353] active:bg-[#1818188e] 
                             transition duration-500 ease-in-out">Cursos</li>
                        </a>
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
                            offset={50}
                        >
                            <li onClick={() => setMenuOpen(false)}
                                className="py-1 flex items-center transition duration-300 ease-in-out cursor-pointer active:text-[#535353]"
                            >
                                <BsFillPersonVcardFill className="m-2" /> Início
                            </li>
                        </Link>
                        <Link href="/"
                            to="sobremim"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={50}
                        >
                            <li onClick={() => setMenuOpen(false)}
                                className="py-1 flex items-center transition  duration-300 ease-in-out cursor-pointer active:text-[#535353]"
                            >
                                <BsFillPersonVcardFill className="m-2" /> Sobre mim
                            </li>
                        </Link>
                        <Link href="/"
                            to="projetos"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={50}
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
                                <BiBookBookmark className="m-2" /> Cursos
                            </li>
                        </a>
                    </ul>
                </div>

                <br />
                <br />
                <hr />
                <br />

                <div className="flex items-center justify-center w-full text-white font-sansnarrow py-1 pt-10">
                    <span className="text-sm ">CONTATO</span>
                </div>
                <div className="items-center flex justify-center">
                    <div className="flex items-center text-white mt-5 text-2xl">
                        <a href={'https://github.com/VictorLopesz'}>
                            <FaGithubSquare className="m-1 text-[29px] active:text-[#4a4949] transition duration-200 ease-in-out" />
                        </a>

                        <a href={'mailto:euvictor_h@hotmail.com'}>
                            <ImMail className="m-1 active:text-[#BD1D1B] transition duration-200 ease-in-out" />
                        </a>


                        <a href={'https://t.me/pleasevictor'}>
                            <BsTelegram className="m-1 active:text-[#0A66C2] transition duration-200 ease-in-out " />
                        </a>

                        <a href={'https://www.linkedin.com/in/lopesvictorh/'}>
                            <FaLinkedin className="m-1 text-[28px] active:text-[#0A66C2] transition duration-200 ease-in-out " />
                        </a>

                        <a href={'https://wa.me/5521980260633'}>
                            <FaWhatsappSquare className="m-1 text-[29px] active:text-[#25D366] transition duration-200 ease-in-out" />
                        </a>

                    </div>
                </div>
            </div>
        </nav >
    );
};


export default Navbar;