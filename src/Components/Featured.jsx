import React, { useState } from 'react'
import { motion, useAnimate, useAnimation, useScroll } from "framer-motion"
import { Power4 } from 'gsap/all';

const Featured = () => {
  // const[isHovering,setHovring] = useState(false);
   const cards = [useAnimation(), useAnimation()];

   const handleHover = (index) =>{
        cards[index].start({y: "0"})
   }

   const handleHoverEnd = (index) =>{
    cards[index].start({y: "100%"})
   }

  return (
    <div className=' w-full py-20  '>
        <div className='w-full px-20 border-b-[1px] pb-20 border-zinc-700  '>
             <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight '>Featured Projects</h1>   
        </div>
        <div className='px-20'>
            <div className='cards w-full flex gap-20 mt-10'>
            
                <motion.div  onHoverStart={()=> handleHover(0)} onHoverEnd={()=> handleHoverEnd(0)} className='cardcontainer relative w-1/2 h-[60vh] rounded-xl bg-red-500'>
                       <h1 className='absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl leading-none tracking-tight'>
                       {"VISE".split('').map((item, index)=>(
                        <motion.span 
                        initial={{y: "100%"}}
                        animate={cards[0]}
                        transition={{ease: [0.22,1,0.36,1], delay: index*.01 }}
                        className='inline-block '>{item}</motion.span>
                       ))}
                       </h1>
                      <div className='w-full h-full rounded-xl  overflow-hidden'>
                           <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'/>
                       </div>
                </motion.div>
                <motion.div onHoverStart={()=> handleHover(1)} onHoverEnd={()=> handleHoverEnd(1)}  className='cardcontainer relative w-1/2 h-[60vh] rounded-xl bg-red-500'>
                <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] text-8xl leading-none tracking-tight'>
                {"FYDE".split('').map((item, index)=>(
                  <motion.span 
                  initial={{y: "100%"}}
                  animate={cards[1]}
                  transition={{ease: [0.22,1,0.36,1], delay: index*.01 }}
                  className='inline-block '>{item}</motion.span>
                ))}
                </h1> 
                  <div className='w-full h-full rounded-xl overflow-hidden '>
                        <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'/>
                    </div>
               </motion.div>

             </div>
        </div>
       
    </div>
  )
}

export default Featured
