import React from 'react'

import { Phone } from 'lucide-react';
import { Video } from 'lucide-react';
import { MessageSquareText } from 'lucide-react';
const Card = ({title,para,buttonName,colourStyle:{bgColour,textColour}}) => {
  return (
    <div className='bg-transparent px-3 py-5 rounded-2xl  bg-white/5  backdrop-blur-xl  border border-white/10 shadow-xl space-y-3'>
          <div className='flex justify-between'>
              <div className='flex gap-x-5'>
                <h2 className='font-semibold text-lg tracking-wide'>{title}</h2>
                <button className={` px-3 py-1 rounded-lg ${bgColour} ${textColour} hover:cursor-pointer hover:text-white text-xs `}>{buttonName}</button>
              </div>
              <div className='space-y-0.5 hover:cursor-pointer py-0.5 px-0.5'>
                <div className='w-1 h-1 bg-white rounded-full'></div>
                <div className='w-1 h-1 bg-white rounded-full'></div>
                <div className='w-1 h-1 bg-white rounded-full'></div> 
              </div>
          </div>
            <p className='text-sm tracking-wide'>{para}</p>
            <div className='flex justify-between'>
               <div className='relative h-8'>
                    <div className='bg-blue-400 w-8 h-8 text-center pt-0.5 rounded-full absolute cursor-pointer hover:w-8.5 hover:h-8.5 hover:z-50' >1</div>
                    <div className='bg-amber-400 w-8 h-8 text-center pt-0.5 rounded-full absolute left-5 cursor-pointer hover:w-8.5 hover:h-8.5 hover:z-50'>2</div>
                    <div className='bg-red-400 w-8 h-8 text-center pt-0.5 rounded-full absolute left-10 cursor-pointer hover:w-8.5 hover:h-8.5 hover:z-50'>3</div>
                    <div className='bg-green-400 w-8 h-8 text-center pt-0.5 rounded-full absolute left-15 cursor-pointer hover:w-8.5 hover:h-8.5 hover:z-50'>4</div>
                    <div className='bg-gray-400 w-8 h-8 text-center pt-0.5 rounded-full absolute left-20 cursor-pointer hover:w-8.5 hover:h-8.5 hover:z-50'>+</div>
               </div>
               <div className='flex gap-x-2'>
                    <div className='bg-white p-2 rounded-full hover:cursor-pointer hover:outline-1 outline-white outline-offset-2'><Phone color="black" size={20}/></div>
                    <div className='bg-white p-2 rounded-full hover:cursor-pointer hover:outline-1 outline-white outline-offset-2'><Video color="black" size={20}/></div>
                    <div className='bg-white p-2 rounded-full hover:cursor-pointer hover:outline-1 outline-white outline-offset-2'><MessageSquareText color="black" size={20}/></div>
               </div>
            </div>
        </div>
  )
}

export default Card