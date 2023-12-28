import React from 'react';
import { FaHtml5, FaReact } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io5';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import brasil from '../../../public/assets/brasil.png';

function Footer() {
    return (
        <footer className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mx-4 my-4 sm:mx-6 md:mx-10 text-[#b7b7b7c4]">
            <div className="text-center sm:text-left">
                <p className="text-xs">
                    Portfólio desenvolvido por Victor Lopes
                </p>
            </div>
<br/>
            <div className="text-center sm:text-center text-xs">
                <p className="-mt-2 mb-2">
                    Teconologias usadas
                </p>
                <p className="grid grid-cols-5 ">
                    <IoLogoCss3 size={25} />
                    <FaHtml5 size={25} />
                    <FaReact size={25} />
                    <TbBrandNextjs size={25} />
                    <SiTailwindcss size={25} />
                </p>
            </div>
            <div className="text-center sm:text-right">
                <p className="text-xs">
                    &copy; {new Date().getFullYear()} <img src={brasil.src} alt="brasil" className="inline h-4 w-4 -mt-1 mx-1" /> Todos os direitos reservados
                </p>
            </div>
        </footer>
    );
}

export default Footer;
