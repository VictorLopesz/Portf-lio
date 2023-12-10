import React from 'react'
import SlideShow from '../SlideShow';
import InformButton from './../InformButton';

function Projetos() {
  return (
    <div id="projetos">
      <div>
        <h1 className="text-black font-semibold text-lg">
          Projetos
        </h1>
      </div>
      <div>
        <InformButton/>
      </div>
      <div>
        <SlideShow/>
      </div>
    </div>
  )
}

export default Projetos;