'use client'
import Link from 'next/link';
import Image from 'next/image';
import react, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="fixed w-full h-24 shadow-xl bg-white ">
            <div className="flex justify-between items-center h-full px-4 2x1:px-16">
                <Link href='/'>
                <Image
                src={'/'}
                alt="logo"
                width="205"
                height="75"
                className="cursor-pointer"
                priority
                />
                </Link>
                <div className="hidden sm:flex">
                    <ul className="hidden sm:flex">
                        <Link href="/">
                        <li className="pb-2 text-xl text-black uppercase font-sansarrow font-sm py-2
                            md:px-6 text-center border-b-2
                             md:border-b-0 border-[#2c4f5e] 
                            md:hover:text-[#e0e7eb] hover:text-[#38bff84d]
                             active:text-[#0f0d3ae1]  md:hover:bg-transparent
                             transition duration-300 ease-in-out ">Sobre mim</li>
                        </Link>
                        <Link href="/">
                        <li className="pb-2 text-xl text-black uppercase font-sansarrow font-sm py-2
                            md:px-6 text-center border-b-2
                             md:border-b-0 border-[#2c4f5e] 
                            md:hover:text-[#e0e7eb] hover:text-[#38bff84d]
                             active:text-[#0f0d3ae1]  md:hover:bg-transparent
                             transition duration-500 ease-in-out ">Skills</li>
                        </Link>
                        <Link href="/">
                        <li className="pb-2 text-xl text-black uppercase font-sansarrow font-sm py-2
                            md:px-6 text-center border-b-2
                             md:border-b-0 border-[#2c4f5e] 
                            md:hover:text-[#e0e7eb] hover:text-[#38bff84d]
                             active:text-[#0f0d3ae1]  md:hover:bg-transparent
                             transition duration-500 ease-in-out ">Portfólio</li>
                        </Link>
                        <Link href="/">
                        <li className="pb-2 text-xl text-black uppercase font-sansarrow font-sm py-2
                            md:px-6 text-center border-b-2
                             md:border-b-0 border-[#2c4f5e] 
                            md:hover:text-[#e0e7eb] hover:text-[#38bff84d]
                             active:text-[#0f0d3ae1]  md:hover:bg-transparent
                             transition duration-500 ease-in-out ">Cursos</li>
                        </Link>
                        <Link href="/">
                        <li className="pb-2 text-xl text-black uppercase font-sansarrow font-sm py-2
                            md:px-6 text-center border-b-2
                             md:border-b-0 border-[#2c4f5e] 
                            md:hover:text-[#e0e7eb] hover:text-[#38bff84d]
                             active:text-[#0f0d3ae1]  md:hover:bg-transparent
                             transition duration-500 ease-in-out ">Contato</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} className=" transition duration-300 ease-in-out text-[#38BDF8] hover:text-[#2c4f5e]"/>
                </div>
            </div>
            <div className={
                menuOpen
                ? "fixed left-0 overflow-hidden top-0 w-[45%] sm:hidden h-screen bg-[#2c4f5ee4] p-10 ease-in transition duration-500" :
                "fixed left-[100%] top-0 p-10 transition ease-out translate-x-1 overflow-hidden duration-500 "
            }
                >

            <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer  text-[#38BDF8] hover:text-[#000]">
                    <AiOutlineClose size={25}/>
            </div>
                </div>
                <br/>
                <br/>
                <div className="flex-col py-4 uppercase text-white">
                    <ul>
                    <Link href="/">
                        <li onClick={() => setMenuOpen(false)}
                        className="py-4 transition duration-300 ease-in-out cursor-pointer hover:text-[#b3b9bb] active:text-[#0f0d3ae1]"
                        >
                            Sobre mim
                        </li>
                    </Link>
                    <Link href="/">
                        <li onClick={() => setMenuOpen(false)}
                        className="py-4 transition duration-300 ease-in-out cursor-pointer hover:text-[#b3b9bb] active:text-[#0f0d3ae1]"
                        >
                            Skills
                        </li>
                    </Link>
                    <Link href="/">
                        <li onClick={() => setMenuOpen(false)}
                        className="py-4 transition duration-300 ease-in-out cursor-pointer hover:text-[#b3b9bb] active:text-[#0f0d3ae1]"
                        >
                            Portfólio
                        </li>
                    </Link>
                    <Link href="/">
                        <li onClick={() => setMenuOpen(false)}
                        className="py-4 transition duration-300 ease-in-out cursor-pointer hover:text-[#b3b9bb] active:text-[#0f0d3ae1]"
                        >
                            Cursos
                        </li>
                    </Link>
                    <Link href="/">
                        <li onClick={() => setMenuOpen(false)}
                        className="py-4 transition duration-300 ease-in-out cursor-pointer hover:text-[#b3b9bb] active:text-[#0f0d3ae1]"
                        >
                            Contato
                        </li>
                    </Link>

                    </ul>
                </div>
                </div>
        </nav>
    );
};


export default Navbar;