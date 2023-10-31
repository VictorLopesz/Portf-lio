'use client'
import React, { useState, useTransition } from 'react';
import TabButton from '../TabButton';



export default function Skills() {

  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <>
      <div className="flex items-center justify-center text-white">
        <div className="flex flex-row mt-8 uppercase font-sansnarrow">
          <div>
            <span className="">
              <TabButton setTab={() => handleTabChange('HTMLCSS')} active={tab === 'HTMLCSS'}>
                HTML/CSS {" "}
              </TabButton>
            </span>
          </div>

          <div>
            <span className="">
              <TabButton setTab={() => handleTabChange('Tailwindcss')} active={tab === 'Tailwindcss'}>
                Tailwind Css {" "}
              </TabButton>
            </span>
          </div>

          <div>
            <span className="">
              <TabButton setTab={() => handleTabChange('reactjs')} active={tab === 'reactjs'}>
                React.Js {" "}
              </TabButton>
            </span>
          </div>

          <div>
            <span className="">
              <TabButton setTab={() => handleTabChange('nextjs')} active={tab === 'nextjs'}>
                Next.Js {" "}
              </TabButton>
            </span>
          </div>


          <div>
            <span className="">
              <TabButton setTab={() => handleTabChange('php')} active={tab === 'php'}>
                PHP {" "}
              </TabButton>
            </span>
          </div>

          <div>
            <span className="">
              <TabButton setTab={() => handleTabChange('sql')} active={tab === 'sql'}>
                SQL {" "}
              </TabButton>
            </span>
          </div>

        </div>
      </div>
    </>
  )
};
