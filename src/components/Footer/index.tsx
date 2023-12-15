import React from 'react'
import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

function Footer() {
    return (
        <div className="w-full flex items-center justify-end p-2 bg-[#000]">
            <FaHtml5 className="w-7 h-7" />
            <FaCss3Alt className="w-7 h-7" />
            <FaReact className="w-7 h-7" />
            <TbBrandNextjs className="w-7 h-7" />
            <SiTailwindcss className="w-7 h-7" />
        </div>
    )
}

export default Footer;