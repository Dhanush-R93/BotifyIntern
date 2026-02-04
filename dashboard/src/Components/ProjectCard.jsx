import React from 'react';

import { Clock2 } from 'lucide-react';

const ProjectCard = ({image:Icon,title,time}) => {
  return (
    <div className='bg-transparent px-5 py-7 rounded-2xl  bg-white/5  backdrop-blur-xl  border border-white/10 shadow-xl space-y-3 '>
        <div className='flex gap-x-4 items-baseline'>
              <Icon color="white" size={20} className="my-auto"/>
            <div className='space-y-1.5'>
                <h2 className='text-md font-semibold tracking-wide'>{title}</h2>
                <div className='flex gap-x-1'>
                    <Clock2 size={14}/>
                   <h2 className='text-xs'>{time}</h2>
                </div>
            </div>
        </div>
        <div>
          <p>6 days Left</p>
         <div className='flex gap-2 items-baseline'>
           <div className='w-full h-3 bg-white rounded-2xl'>
            <div className='w-4/5 bg-yellow-500 h-3 rounded-2xl'></div>
          </div>
            80%
         </div>
        </div>

       <div className='flex justify-between'>
           <div className='relative h-8'>
           <div className='bg-blue-400 w-8 h-8 text-center pt-0.5 rounded-full absolute cursor-pointer hover:w-8.5 hover:h-8.5 hover:z-50' >1</div>
                    <div className='bg-amber-400 w-8 h-8 text-center pt-0.5 rounded-full absolute left-5 cursor-pointer hover:w-8.5 hover:h-8.5 hover:z-50'>2</div>
                    <div className='bg-red-400 w-8 h-8 text-center pt-0.5 rounded-full absolute left-10 cursor-pointer hover:w-8.5 hover:h-8.5 hover:z-50'>3</div>
                   <div className='absolute left-22 top-1'>
                     T:Will
                   </div>
           </div>
           <div className='text-yellow-500 hover:underline underline-offset-1 cursor-pointer'>
            View Project
           </div>
       </div>
    </div>
  )
}

export default ProjectCard