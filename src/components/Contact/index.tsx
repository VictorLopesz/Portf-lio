'use client'
import React from 'react'
import { BsTelephone } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { FaInstagram, FaLinkedin, FaTelegramPlane, FaWhatsapp, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';


const Contact = () => {
  return (
    <div>
        <div>
            CONTATO
        </div>
        
        {/* formulário para envio de mensagem */}
        <div>
            <form action="">
                <label htmlFor="">
                    Nome:
                    <input type="text" />
                </label>
                <label htmlFor="">
                    Email:
                    <input type="email" />
                </label>
                <input type="textarea" width={40}/>
                <input type="submit" />
            </form>
            <br />

            <br />
            <div>
            <div>
                {/* email */}
                <TfiEmail/>
                
                {/* telefones */}
                <BsTelephone/>

                {/* telefones */}
                <BsTelephone/>

            </div>
            
            {/* icones de contato */}
            <div>
                {/* instagram */}
                <div>
                <a href=""><FaInstagram/></a>
                </div>      

                {/* linkedin */}
                <div>
                <a href=""><FaLinkedin/></a>
                </div>                
                
                {/* Whatsapp */}
                <div>
                <a href=""><FaWhatsapp/></a>
                </div>        

                {/* telegram */}
                <div>
                <a href=""><FaTelegramPlane/></a>
                </div>  
            </div>
            </div>
        <hr/>
        {/* icones tecnologias usadas */}
        <div className="">
            <p className="w-full items-center justify-center ">Tecnologias utilizadas para o desenvolvimento do portfólio</p>
            <br />
            <div className="flex items-center justify-center w-full m-1">
            <FaHtml5 className="w-8 h-8 text-[#233949e8] ml-1"/>
            <FaCss3Alt className="w-8 h-8 text-[#233949e8] ml-1"/>
            <FaReact className="w-8 h-8 text-[#233949e8] ml-1"/>
            <SiNextdotjs className="w-8 h-8 text-[#233949e8] ml-1"/>
            <SiTailwindcss className="w-8 h-8 text-[#233949e8] ml-1"/>

            </div>
        </div>

        </div>
    
    </div>
  )
};



export default Contact;