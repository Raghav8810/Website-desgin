import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion"


const LandingPage = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-2'>
         <div className='textstructure mt-32 px-20  '>
            {["We Create", "Eye Opening", "Presentation"].map((item,index) => {
              return(
                <div className='masker' key={index}>
                     <div className='w-fit flex items-center'>
                       {index === 1 && (<motion.div 
                        initial={{width: 0}} 
                        animate={{width: "9vw"}} 
                        transition={{ease: [0.45, 0, 0.55, 1], duration: 1}}
                        className='w-[7vw] mr-4 h-[5vw] relative rounded-md bg-red-600'></motion.div>)}
                        <h1 className='uppercase text-[7vw] leading-[6vw] tracking-tight font-["Neue_Montreal"] font-extralight'>{item}</h1>
                     </div>
                    
               </div>
              )   
            })}
              
              
         </div>
           {/* border div */}
          <div className='border-t-2 border-zinc-700 mt-32 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center  py-5 px-20'>
               {["For public and private companies", "From the first pitch to IPO"].map((item,index) => {
                  return <p key={index} className='text-base md:text-lg lg:text-[1.30] xl:text-2xl font-light tracking-tight leading-none'>{item}</p>
               })}
                {/* button div */}
               <div className='start flex items-center gap-3'>
                    <div className='px-4 py-2 border-[2px] rounded-full border-zinc-500 font-light text-[1.25rem] uppercase'>
                        <p className='text-base md:text-lg lg:text-[1.30] xl:text-2xl'>Start the project</p>
                   </div>
                   <div className='w-3 p-4 h-3 flex items-center justify-center border-[2px] rounded-full'>
                      <span className='rotate-[60deg]'>
                          <FaArrowUpLong />
                      </span>
                   </div>
               </div>
          </div>

          
          
    </div>
  )
}

export default LandingPage
