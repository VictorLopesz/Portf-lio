'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

interface Props {
    image: string;
    title: string;
    text: string;

}

const Cards = ({ image, title, text }: Props) => {
    const [virada, setVirada] = useState(false)
    const [animation, setAnimation] = useState(false)

    function handleAnima() {
        if (!animation) {
            setVirada(!virada)
            setAnimation(true)
        }
    }

    return (
        <div
            onClick={handleAnima}
            className="w-[225px] h-[160px] md:w-[225px] md:h-[160px] lg:w-[450px] lg:h-[280px] xl:w-[450px] xl:h-[280px] rounded-md cursor-pointer">
            <motion.div
                className="flip-card-inner h-full w-full"
                initial={false}
                animate={{ rotateY: virada ? 180 : 360 }}
                transition={{ duration: 0.6, animationDirection: 'normal' }}
                onAnimationComplete={() => setAnimation(false)}
            >
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className="w-full h-full flip-card-front bg-cover bg-center text-white rounded-lg p-4">
                    <div className="absolute insert-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
                    <div className="absolute insert-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
                        Learn more &gt;
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className="w-full h-full flip-card-back bg-cover bg-center text-white rounded-lg p-4">
                    <div className="absolute insert-0 w-full h-full rounded-md bg-black opacity-50" />
                    <div className="flex flex-col gap-20 py-3 z-[30]">
                        <h1 className="text-whote text-2xl font-semibold">{title}</h1>
                        <p className="text-gray-200 text-[20px]">
                            {text}
                        </p>
                    </div>
                </div>
            </motion.div>

        </div >
    )
}

export default Cards;