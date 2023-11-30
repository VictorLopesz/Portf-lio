'use client'
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import eu from '../../../public/assets/eu.jpeg';
import TabButton from '../TabButton';

const ABOUT_ME = [
  {
    title: "Linguagens",
    id: "Linguagens",
    content: (

      <div className="grid grid-cols-2 mt-4">
        <div>
          <ul className="">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Next Js</li>
            <li>React Js</li>
            <li>PHP</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "Banco de Dados",
    id: "Banco de Dados",
    content: (

      <div className="mt-4">
        <ul>
          <li>MySQL</li>
          <li>Oracle Database</li>
        </ul>
      </div>
    )
  },
  {
    title: "Versionamento",
    id: "Versionamento",
    content: (

      <div className="mt-4">
        <div>
          <ul>
            <li>Git</li>
            <li className="underline text-[#b0cadd]"> <a target="_blank" href="https://github.com/VictorLopesz">GitHub</a></li>
          </ul>
        </div>
      </div>
    )
  },
  {
    title: "QA/Tester",
    id: "QA/Tester",
    content:
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-4">
        <div className="">
          <span className="text-[#d6c49d]">
            Testes:
          </span>
          <ul>
            <li>Funcionais</li>
            <li>Automatizados</li>
          </ul>
        </div>
        <div>
          <span className="text-[#d6c49d]">Ferramentas:</span>
          <ul>
            <li>Postman</li>
            <li>Trello</li>
          </ul>
        </div>
      </div>
  },
]

export default function AboutMe() {

  const [tab, setTab] = useState("Linguagens");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section id="sobremim" className="text-white">
      <div className="md:grid md:grid-cols-2 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={eu}
          alt={'me'}
          width={500}
          height={500}
        />
        <div className="flex justify-center">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h1 className="text-[#CEB786] font-sansnarrow font-bold mb-2 text-2xl">Sobre Mim...</h1>
            <p className="text-sm font-barlow lg:text-base text-justify">
              Me chamo Victor Lopes, um entusiasta da tecnologia.
              Como desenvolvedor, busco a interseção entre criatividade e tecnologia para aprimorar
              constantemente minhas habilidades. Estudo Análise e Desenvolvimento de Sistemas,
              acreditando que o futuro é construído com inovação. Compartilho aqui minhas experiências,
              projetos e descobertas na ampla área da tecnologia e desenvolvimento.
              Convido você a explorar meu portfólio e conhecer mais sobre meu trabalho e paixões.
              Juntos, podemos desbravar o mundo da tecnologia e criar um futuro empolgante e inspirador.
            </p>

            <div id="AboutMe" className="text-white xl:gap-5 sm:py-1 xl:px-1 font-sansnarrow">
              <div className="mt-8 flex text-sm flex-row lg:text-base justify-start">
                <TabButton
                  selectTab={() => handleTabChange("Linguagens")}
                  active={tab === "Linguagens"}
                >
                  {" "}
                  <span>Linguagens</span> <br />  {" "}

                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("Banco de Dados")}
                  active={tab === "Banco de Dados"}
                >
                  {" "}
                  <span>Dados</span> <br />  {" "}

                </TabButton>


                <TabButton
                  selectTab={() => handleTabChange("QA/Tester")}
                  active={tab === "QA/Tester"}
                >
                  {" "}
                  <span>QA/Tester</span> <br />  {" "}

                </TabButton>
                <TabButton
                  selectTab={() => handleTabChange("Versionamento")}
                  active={tab === "Versionamento"}
                >
                  {" "}
                  <span>Versionamento</span> <br />  {" "}

                </TabButton>

              </div>
              {ABOUT_ME.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};