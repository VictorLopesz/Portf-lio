import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import boostrap from '../../../public/assets/bootstrap.png';
import html from '../../../public/assets/html.png';
import css from '../../../public/assets/css.png';
import js from '../../../public/assets/js.png';
import php from '../../../public/assets/php.png';
import nextjs from '../../../public/assets/next.png';
import react from '../../../public/assets/react.png';
import tailwindcss from '../../../public/assets/tailwindcss.png';
import mysql from '../../../public/assets/mysql.png';
import git from '../../../public/assets/git.png';
import github from '../../../public/assets/github.png';

const SkillData = [
    html, css, js, php, nextjs, react, tailwindcss, boostrap, mysql, git, github
];

const SkillData2 = [
    html, css, js, php, nextjs, react, tailwindcss, boostrap, mysql, git, github
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
                        speed={5000}
                        modules={[Autoplay]}
                        className='max-w-[100%]'
                    >
                        {SkillData.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div>
                                    <Image src={img} alt={`Skill ${index + 1}`} className="flex w-14 h-15 items-center justify-center" />
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
                        speed={5000}
                        modules={[Autoplay]}
                        className='max-w-[100%]'
                    >
                        {SkillData2.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div>
                                    <Image src={img} alt={`Skill ${index + 1}`} className="flex w-12 h-13 items-center justify-center" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
