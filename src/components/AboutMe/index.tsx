import React from 'react';
import Image from 'next/image';

function AboutMe() {
  return (
<section className="text-white">
  <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
<Image
    src="/"
    alt={'me'}
    width={500}
    height={500}
/>
<div>
  <h2 className="font-sansnarrow text-[40px] font-bold text-white mb-4">Sobre Mim</h2>
  <p className="text-base lg:text-lg ">
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
  <div className="flex flex-row mt-8">
    <span>Educação</span>
    <span>Profissional</span>
  </div>
</div>
  </div>
</section>
  )
}

export default AboutMe;