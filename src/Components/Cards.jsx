import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 px-32 flex items-center gap-5'>
         <div className='cardcontainer h-[50vh] w-1/2'>
              <div className='card relative rounded-xl w-full h-full flex items-center justify-center  bg-[#004D43]'>
                 <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' />
                <button className='absolute px-5 py-2 border-[1px] rounded-full left-10 bottom-10'>hey</button>
                 </div>
         </div>
         <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full  bg-[#3e5552]'>
               <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' />
               <button className='absolute px-5 py-2 border-[1px] rounded-full left-10 bottom-10'>hey</button>
            </div>
            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full  bg-[#2c5551]'>
               <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' />
               <button className='absolute px-5 py-2 border-[1px] rounded-full left-10 bottom-10'>hey</button>
            </div>          </div>
    </div>
  )
}

export default Cards
