import React from 'react'
import { FaHtml5, FaReact } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io5'
import { SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import brasil from '../../../public/assets/brasil.png';


function Footer() {
    return (
        <footer className="w-[90%] grid grid-cols-3 sm:grid-cols-3 xl:grid-cols-3 gap-5">
            <div>
                <p className="text-sm xl:ml-10 md:ml-1">
                    Portfólio desenvolvido por Victor Lopes
                </p>
            </div>
            <div>
                <p className="grid xl:grid-cols-5 md:grid-cols-3 gap-1 xl:visible md:invisible">
                    <IoLogoCss3 size={25} />
                    <FaHtml5 size={25} />
                    <FaReact size={25} />
                    <TbBrandNextjs size={25} />
                    <SiTailwindcss size={25} />
                </p>
            </div>
            <div className="flex items-center justify-center text-sm">
                <p>&copy; 2024</p> <img src={brasil.src} alt="brasil" className="ml-1 mr-1 -mt-4" /> <p>| Todos os direitos reservados</p>
            </div>
        </footer>
    )
}

export default Footer
