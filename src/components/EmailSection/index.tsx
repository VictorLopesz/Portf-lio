import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const EmailSection = () => {
    return (
        <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 z-[40]">
            <div>
                <h5 className="text-2xl font-bold text-white my-2">Contato</h5>
            </div>
            <p className="text-[#ADB7BE] max-w-md">
                Entre em contato comigo, minha inbox está sempre aberta.
                Se tiver alguma dúvida ou sugestão, envie-me.
            </p>
            <div className="socials flex flex-row gap-2">
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
            </div>
            <div>
                <form action="" className="flex flex-col gap-4">
                    <input
                        type="email"
                        id="email"
                        required
                        className='bg-[#000000] border border-[#adadad21] placeholder-[#b8b7b7] text-gray-200 text-sm rounded-sm w-full p-2'
                        placeholder="exemplo@email.com"
                    />
                    <textarea
                        id="assunto"
                        required
                        className='bg-[#000000] border border-[#adadad21] placeholder-[#b8b7b7] text-gray-200 text-sm rounded-sm w-full p-2'
                        placeholder="Escreva aqui!"
                        rows={4} cols={50}
                    />
                </form>
            </div>
        </section>
    )
}

export default EmailSection;
