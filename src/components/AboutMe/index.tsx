'use client'
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from '../TabButton';
import eu from '../../../public/assets/eu.jpeg';


function AboutMe() {
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
          <h2 className="font-sansnarrow text-[40px] font-bold mb-4 uppercase text-[#bb9e70]">Sobre Mim...</h2>
          <p className="text-lg font-sansnarrow lg:text-base text-justify ">
            Me chamo Victor Lopes, um apaixonado por tecnologia natural de Duque de Caxias, RJ.
            Como desenvolvedor front-end, mergulho na interseção entre criatividade e tecnologia,
            buscando constantemente aprimorar minhas habilidades. Como estudante de Análise e
            Desenvolvimento de Sistemas, acredito que o futuro é o que construímos, e estou
            determinado a moldá-lo com inovação. Este é o espaço onde compartilho minhas experiências,
            projetos e descobertas na vasta área da tecnologia e desenvolvimento.
            Convido você a explorar meu portfólio e conhecer mais sobre meu trabalho e paixões.
            Juntos, podemos desbravar o mundo da tecnologia e criar um futuro empolgante e inspirador.
            Fique à vontade para explorar!
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;