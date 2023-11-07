'use client'
import React, { useState, useTransition } from 'react';
import TabButton from '../TabButton';


const DATA_SKILLS = [
  {
    title: "HTML",
    id: "HTML",
    content:
      <ul className="mt-10 text-justify flex items-center justify-center bg-[#ffffff6b] p-2 m-10 rounded-md shadow-lg">
        <li>
          <p>HTML, sigla para HyperText Markup Language, é a linguagem fundamental da web.</p>
          <p>Ele permite a criação e estruturação de páginas da internet, definindo elementos como textos,</p>
          <p>imagens e links. Como uma linguagem de marcação, o HTML usa tags para indicar como o conteúdo</p>
          <p>deve ser apresentado no navegador, tornando-o acessível e interativo.</p>

          <p>HTML foi a primeira linguagem que eu tive contato, assim que comecei a estudar desenvolvimento web.</p>
          <p>Sua simplicidade e importância na construção de sites me proporcionaram uma base sólida para aprofundar</p>
          <p>meus conhecimentos na área.</p>
        </li>
      </ul>
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

        <div className="mt-8">
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
