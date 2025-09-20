import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react'

const HeroText = () => {

  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  
  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
        
        {/* Desktop */}
            <div className='flex-col hidden md:flex c-space'>
                
                <motion.h1 
                  className='[font-family:nebulax] text-5xl tracking-wider'
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.5 }}
                >
                  Hi I'm Hishirusai
                </motion.h1>

                <div className='flex flex-col items-start'>

                    <motion.p 
                      className='[font-family:montlight] text-3xl font-medium text-neutral-100'
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.5 }}
                    >
                      Multi-Disciplinary Creator 
                      <br />
                      Dedicated to Crafting 
                    </motion.p>

                    <motion.div 
                      className='mt-4'
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.8 }}
                    >

                      <FlipWords 
                      words={["Creative", "Visual", "Innovative"]}
                      className="[font-family:nebulax] font-black text-white text-7xl"
                      />

                    </motion.div>

                    <motion.p 
                      className='text-3xl font-medium text-neutral-100'
                      variants={variants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 1 }}
                    >
                      Works Across Web, Art, and Design  
                    </motion.p>

                </div>
            </div>

        {/* Phone */}
            <div className='flex flex-col items-center space-y-2 md:hidden'>

              <motion.p 
                className='[font-family:nebulax] text-2xl font-medium'
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
              >
                Hi I'm Hishirusai
              </motion.p>

              <div>
                    
                <motion.p 
                  className='[font-family:montlight] text-5xl font-medium text-neutral-100'
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.5 }}
                >
                  Creating
                </motion.p>

                <motion.div 
                className='mt-4 text-center w-full'
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 }}
                >
                  <FlipWords 
                    words={["Creative", "Visual", "Innovative"]}
                    className="[font-family:nebulax] font-black text-white text-4xl mx-auto"
                  />
                </motion.div>

                <motion.p 
                  className='[font-family:montlight] text-2xl font-medium text-neutral-100 text-center'
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1 }}
                >
                  Web, Art, and Design
                </motion.p>
                    
              </div>

            </div>

    </div>
  )
}
export default HeroText
