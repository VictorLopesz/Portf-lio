'use client'
import React, { useState, useTransition } from 'react';
import TabButton from '../TabButton';
import html from '../../../public/assets/html.png';


const DATA_SKILLS = [
  {
    title: "HTML",
    id: "HTML",
    content:
      <div className="flex items-center justify-center w-full bg-[#4744446b] rounded-sm ">
        <div className=" p-2 shadow-lg justify-center items-center grid grid-cols-1 lg:grid-cols-3">
          <div className="justify-center items-center flex">
            <img src={html.src} alt="HTML" className="w-40 p-3" />
          </div>
          <div className="text-justify">
            <p>HTML, sigla para HyperText Markup Language, é a linguagem fundamental da web.
              Ele permite a criação e estruturação de páginas da internet, definindo elementos como textos,
              imagens e links. Como uma linguagem de marcação, o HTML usa tags para indicar como o conteúdo
              deve ser apresentado no navegador, tornando-o acessível e interativo.
              <br />
              HTML foi a primeira linguagem que eu tive contato, assim que comecei a estuda desenvolvimento web.
              Sua simplicidade e importância na construção de sites me proporcionaram uma base sólida para aprofundar
              meus conhecimentos na área.</p>
          </div>
          <div className="text-xs font-semibold uppercase text-[#fff] justify-center items-center flex p-3">
            <span>Nível de Conhecimento
              <br />
              <br />
            </span>
          </div>
        </div>
      </div>
  },
  {

  },
  {

  },
  {

  },
  {

  },
]

export default function Skills() {

  const [tab, setTab] = useState("HTML");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <>
      <div id="skills" className="items-center justify-center text-white py-8 px-4 xl:gap-5 sm:py-16 xl:px-16 font-sansnarrow">

        <div className="mt-8 flex justify-center items-center">
          <TabButton
            selectTab={() => handleTabChange("HTML")}
            active={tab === "HTML"}
          >
            {" "}
            HTML {" "}
          </TabButton>

          <TabButton
            selectTab={() => handleTabChange('css')}
            active={tab === 'css'}
          >
            {" "}
            CSS / Tailwind Css {" "}
          </TabButton>

          <TabButton selectTab={() => handleTabChange('reactjs')}
            active={tab === 'reactjs'}
          >
            {" "}
            React.Js {" "}
          </TabButton>

          <TabButton selectTab={() => handleTabChange('nextjs')}
            active={tab === 'nextjs'}
          >
            {" "}
            Next.Js {" "}
          </TabButton>

          <TabButton selectTab={() => handleTabChange('php')}
            active={tab === 'php'}
          >
            {" "}
            PHP {" "}
          </TabButton>

          <TabButton selectTab={() => handleTabChange('sql')}
            active={tab === 'sql'}
          >
            {" "}
            SQL {" "}
          </TabButton>

        </div>
        <div>
          {DATA_SKILLS.find((t) => t.id === tab)?.content}
        </div>
      </div>
    </>
  )
};
