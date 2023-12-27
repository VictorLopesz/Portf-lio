import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { MdEmail } from "react-icons/md";
import { PiSubtitlesFill, PiTelegramLogoDuotone } from 'react-icons/pi';
import Footer from '../Footer';

const EmailSection = () => {
    return (
        <div className="h-screen">
            <section id="contato" className="grid md:grid-cols-2 mt-24 my-12 md:my-12 z-[40] h-screen">
                <div>
                    <h5 className="text-2xl font-bold text-white my-2">Contato</h5>
                </div>
                <div className="items-center justify-center flex">
                    <h6 className="text-[#ADB7BE] max-w-md text-justify mb-8 xl:mb-10 text-sm xl:text-">
                        Entre em contato comigo, minha inbox está sempre aberta.
                        Se tiver alguma dúvida ou sugestão, envie-me.
                    </h6>
                </div>

                <div className="gap-2">

                    <div>
                        <div className="text-white mb-4">
                            <div className="grid grid-cols-1 ">
                                <a href="mailto:euvictor_h@hotmail.com" target="_blank" className="no-underline text-current">
                                    <div className="w-full flex items-center mb-2">
                                        <IoMailOutline className="w-[20px] h-[20px] mr-4 ml-2 -m-12 text-[#88c2df]" />
                                        <span className="text-[#939393] text-[13px] hover:text-white">euvictor_h@hotmail.com</span>
                                    </div>
                                </a>

                                <a href="https://api.whatsapp.com/send?phone=5521980260633" target="_blank" className="no-underline text-current">
                                    <div className="w-full flex items-center mb-2">
                                        <FaWhatsapp className="w-[20px] h-[20px] mr-4 ml-2 -m-12 text-[#88c2df]" />
                                        <span className="text-[#939393] text-[13px] hover:text-white">+55 21 9 8026-0633</span>
                                    </div>
                                </a>

                                <a href="https://t.me/pleasevictor" target="_blank" className="no-underline text-current">
                                    <div className="w-full flex items-center mb-2">
                                        <PiTelegramLogoDuotone className="w-[20px] h-[20px] mr-4 ml-2 -m-12 text-[#88c2df]" />
                                        <span className="text-[#939393] text-[13px] hover:text-white">@pleasevictor</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className=" flex items-center justify-start ml-6 mt-2 gap-x-2.5 mb-2">
                            <a href="https://github.com/VictorLopesz" className="no-underline text-current">
                                <FaGithub className="w-6 h-6 mt-1 text-[#8899de] hover:text-[#b0c0ff]" />
                            </a>
                            <a href="https://www.linkedin.com/in/lopesvictorh/" className="no-underline text-current">
                                <FaLinkedinIn className="w-6 h-6 mt-1 text-[#58baeb] hover:text-[#9ddeff]" />
                            </a>
                            <a href="https://www.instagram.com/_pleasevictor/" className="no-underline text-current">
                                <FaInstagram className="w-6 h-6 mt-1 text-[#c17e40] hover:text-[#e5bb93]" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <form action="" className="flex flex-col gap-4">
                        <div className="grid xl:grid-cols-1 gap-2">
                            <div className="relative">
                                <input type="email"
                                    id="email"
                                    className="pl-10 h-9 text-white bg-black w-full text-sm"
                                    placeholder="exemplo@email.com" />
                                <div className="absolute inset-y-0 left-0 pl-3  
                    flex items-center border border-[#5E91B6] placeholder-[#000000] text-gray-200 text-sm rounded-sm w-full p-2'
                    pointer-events-none">
                                    <MdEmail size={20} className="text-[#a8d8f1] active:text-[#fff]" />
                                </div>
                            </div>

                            <div className="relative">
                                <input type="text"
                                    id="assunto"
                                    className="pl-10 h-9 text-white bg-black w-full text-sm "
                                    placeholder="assunto" />
                                <div className="absolute inset-y-0 left-0 pl-3  
                    flex items-center border border-[#5E91B6] placeholder-[#000000] text-gray-200 text-sm rounded-sm w-full p-2'
                    pointer-events-none">
                                    <PiSubtitlesFill size={20} className="text-[#a8d8f1] active:text-[#fff]" />
                                </div>
                            </div>
                        </div>

                        <textarea
                            id="mensagem"
                            required
                            className='bg-[#000000] border border-[#5E91B6] placeholder-[#b8b7b7] text-gray-200 text-sm rounded-sm w-full p-2'
                            placeholder="Escreva aqui!"
                            rows={4} cols={50}
                        />

                        <div className='justify-end items-center flex'>
                            <button
                                type='submit'
                                className="bg-[#2B6B98] rounded-sm w-20 border border-slate-800 active:bg-[#1a415d] hover:bg-[#192730] hover:text-[#cdcdcd] p-1 text-white font-medium"
                            >
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default EmailSection;
