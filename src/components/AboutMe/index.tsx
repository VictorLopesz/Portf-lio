'use client'
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import eu from '../../../public/assets/eu.jpeg';
import TabButton from '../TabButton';

const ABOUT_ME = [
  {
    title: "SobreMim",
    id: "SobreMim",
    content: 
    <div className="flex items-center justify-center w-full">
    <p className="text-lg font-sansnarrow lg:text-base text-justify ">
      Me chamo Victor Lopes, um apaixonado por tecnologia natural de Duque de Caxias, RJ.
      Como desenvolvedor, mergulho na interseção entre criatividade e tecnologia,
      buscando constantemente aprimorar minhas habilidades. Como estudante de Análise e
      Desenvolvimento de Sistemas, acredito que o futuro é o que construímos, e estou
      determinado a moldá-lo com inovação. Este é o espaço onde compartilho minhas experiências,
      projetos e descobertas na vasta área da tecnologia e desenvolvimento.
      Convido você a explorar meu portfólio e conhecer mais sobre meu trabalho e paixões.
      Juntos, podemos desbravar o mundo da tecnologia e criar um futuro empolgante e inspirador.
      Fique à vontade para explorar!
    </p>
  </div>
  },
  {
    title: "Linguagens",
    id: "Linguagens",
    content:
    <div>
      <div className="grid grid-cols-">
      <span className="">Programação:</span>
    <ul>
      <li>HTML5</li>
      <li>CSS3/TailwindCSS</li>
      <li>Next.Js</li>
      <li>React.Js</li>
      <li>PHP</li>
    </ul>
      </div>
      <div>
<span>Banco de Dados:</span>
    <ul>
      <li>MySQL</li>
      <li>Oracle Database</li>
    </ul>
      </div>
      <div>
        <span>Versionamento:</span>
        <ul>
          <li>Git</li>
          <li> <a href="#">GitHub</a></li>
        </ul>
      </div>
    </div>
  },
  {
    title: "QA/Tester",
    id: "QA/Tester",
    content:
    <div>
      <div>
        <span>
        Testes:
        </span>
      <ul>
        <li>Testes funcionais</li>
        <li>Testes automatizados</li>
      </ul>
      </div>
<div>
  <span>Ferramentas:</span>
  <ul>
    <li>Postman</li>
    <li>Trello</li>
  </ul>
</div>
    </div>
  },
]

export default function AboutMe() {

const [tab, setTab] = useState("SobreMim");
const [isPending, startTransition] = useTransition();

const handleTabChange = (id:any) => {
  startTransition(() => {
    setTab(id);
  });
}

  return (
    <section id="sobremim" className="text-white pt-28">

    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={eu}
          alt={'me'}
          width={500}
          height={500}
        />
        <div>
          <div id="AboutMe" className="items-center justify-center text-white py-8 px-4 xl:gap-5 sm:py-16 xl:px-16 font-sansnarrow">
          <div className="mt-8 flex justify-center items-center">
            <TabButton
            selectTab={() => handleTabChange("SobreMim")}
            active={tab === "SobreMim"}
>

            {" "}
  Sobre Mim <br/> {" "}
</TabButton>

<TabButton
    selectTab={() => handleTabChange("Linguagens")}
    active={tab === "Linguagens"}
>
    {" "}
    Linguagens <br/>  {" "}
    
</TabButton>

<TabButton
    selectTab={() => handleTabChange("QA/Tester")}
    active={tab === "QA/Tester"}
>
  {" "}
  QA/Tester <br/>  {" "}
    
</TabButton>

          </div>
          {ABOUT_ME.find((t) => t.id === tab)?.content}
          </div>
      </div>
      </div>
    </section>
  )
};