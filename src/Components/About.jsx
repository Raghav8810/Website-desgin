import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-[#000] '>
        <h1 className='font-["Neue_Montreal"] text-[3vw] leading-[3.5vw] tracking-tight '>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
           <div className='w-full flex gap-5 border-t-[2px] pt-20 border-[#75863e] mt-24'>
                <div className='w-1/2 '>
                    <h1 className='text-7xl'>Our approach:</h1>
                    <button className=' uppercase flex items-center gap-10 px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>
                    Read More  
                    <div className='w-3 h-3 bg-zinc-100 rounded-full'>
                    </div>
                    </button>
                </div>
                <div className='w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]  '>
                   
                </div>

           </div>
        </div>
  )
}

export default About
