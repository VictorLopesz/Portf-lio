'use client'
import React, { useState, useTransition } from 'react';
import TabButton from '../TabButton';



export default function Skills() {

  const [tab, setTab] = useState("HTMLCSS");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <>
      <div className="flex items-center justify-center text-white py-8 px-4 xl:gap-5 sm:py-16 xl:px-16 font-sansnarrow">
       
        <div className="flex flex-row mt-8">
          <TabButton
           selectTab={() => handleTabChange("HTMLCSS")}
            active={tab === "HTMLCSS"}
          >
            {" "}
            HTML / CSS {" "}
          </TabButton>

          <TabButton 
          selectTab={() => handleTabChange('Tailwindcss')}
          active={tab === 'Tailwindcss'}
          >
            {" "}
            Tailwind CSS {" "}
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
      </div>
    </>
  )
};
