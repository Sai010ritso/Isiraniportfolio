import { useScroll, useSpring, useTransform, motion } from 'motion/react'
import React from 'react'

const ParallaxBackground = () => {

    const { scrollYProgress } = useScroll();
    const x =useSpring(scrollYProgress, { damping: 50})
    const mountain1Y = useTransform(x, [0,0.5], ["0%", "70%"])
    const mountain2Y = useTransform(x, [0,0.5], ["0%", "70%"])
    const planetsX = useTransform(x, [0, 0.5], ["0%", "-30%"]);

    return ( 
    <section className='absolute inset-0 bg-black/20'>
        <div className='relative h-screen overflow-y-hidden'>

            <motion.div 
            className='absolute inset-0 w-full h-screen -z-30'
            style={{
                backgroundImage:"url(/assets/backgrounds/bg.png)",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                y: mountain1Y,
            }}
            />

            <motion.div 
            className='absolute inset-0 w-full h-screen -z-31'
            style={{
                backgroundImage:"url(/assets/backgrounds/bg2.png)",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                y: mountain2Y,
            }}
            />

            <motion.div 
            className='absolute inset-0 w-full h-screen -z-30'
            style={{
                backgroundImage:"url(/assets/backgrounds/planets.png)",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
                x: planetsX,
            }}
            />

            <div 
            className='absolute inset-0 w-full h-screen -z-40 opacity-70'
            style={{
                backgroundImage:"url(/assets/backgrounds/sky.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "bottom"
            }}
            />

            <video
                className='absolute inset-0 w-full h-screen -z-50 object-cover'
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/assets/backgrounds/videobg.mp4" type="video/mp4" />
            </video>

        </div>
    </section>
  )
}

export default ParallaxBackground