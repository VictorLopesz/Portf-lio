import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import boostrap from '../../../public/assets/bootstrap.png';
import html from '../../../public/assets/html5.png';
import css from '../../../public/assets/css3.png';
import js from '../../../public/assets/js.png';
import php from '../../../public/assets/php.png';
import nextjs from '../../../public/assets/nextjs.png';
import react from '../../../public/assets/react.png';
import tailwindcss from '../../../public/assets/tailwindcss.png';
import mysql from '../../../public/assets/mysql.png';
import git from '../../../public/assets/git.png';
import github from '../../../public/assets/github.png';

const SkillData = [
    html, css, js, php, nextjs, react, html, css, js, php, nextjs, react
];

const SkillTecnology = [
    tailwindcss, boostrap, mysql, git, github, tailwindcss, boostrap, mysql, git, github

];

export default function Skills() {
    return (
        <div>
            <div>
                <div>
                    <Swiper
                        slidesPerView={5}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false
                        }}
                        speed={4000}
                        modules={[Autoplay]}
                        className='max-w-[100%]'
                    >
                        {SkillData.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center">
                                    <img src={img.src} alt={`Skill ${index + 1}`} width={40} height={40} className="mb-2" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        slidesPerView={5}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            reverseDirection: true
                        }}
                        speed={4000}
                        modules={[Autoplay]}
                        className='max-w-[100%]'
                        
                    >
                        {SkillTecnology.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center">
                                    <img src={img.src} alt={`Skill ${index + 1}`} width={40} height={40} className="mb-2" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
