'use client'
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from '../TabButton';

// const TAB_DATA = [
//   {
//     title: "educação",
//     id: "educação",
//     content: (
//       <ul className="font-sansnarrow">
//         <li>HTML</li>
//         <li>CSS</li>
//         <li>Tailwind CSS</li>
//         <li>JavaScript</li>
//         <li>React.Js</li>
//         <li>Next.Js</li>
//         <li>MySQL</li>
//       </ul>
//     )
//   }
// ]

function AboutMe() {

  // const [tab, setTab] = useState("educação");
  // const [isPendent, startTransition] = useTransition();

  // const handleTabChange = (id: any) => {
  //   if (typeof startTransition === 'function') {
  //     startTransition(() => {
  //       setTab(id);
  //     });
  //   }
  // };

  return (
    <section className="text-white pt-28">

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/"
          alt={'me'}
          width={500}
          height={500}
        />
        <div>
          <h2 className="font-sansnarrow text-[40px] font-bold text-white mb-4 uppercase">Sobre Mim...</h2>
            <p className="text-base font-sansnarrow lg:text-lg ">
              Sou um desenvolvedor front end end end end end
              Sou um desenvolvedor front end end end end end
              Sou um desenvolvedor front end end end end end
              Sou um desenvolvedor front end end end end end
              Sou um desenvolvedor front end end end end end
              Sou um desenvolvedor front end end end end end
              Sou um desenvolvedor front end end end end end
              Sou um desenvolvedor front end end end end end
              Sou um desenvolvedor front end end end end end
            </p>
          {/* <div className="flex font-sansnarrow flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("educacao")}
              active={tab === "educacao"}
            >{" "}
              Educação{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("profissional")}
              active={tab === "profissional"}
            >{" "}
              Profissional{" "}
            </TabButton>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default AboutMe;