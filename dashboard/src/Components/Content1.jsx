import React from 'react'
import { Cookie } from 'lucide-react';
import { Rocket } from 'lucide-react';
import ProjectCard from './ProjectCard';
import Card from './Card';
const Content1 = () => {
  return (
    <div className='px-6 py-4 bg-black grid grid-cols-2 text-white gap-x-3 gap-y-4'>
        <Card title="Design Meeting" para="Development task Assign for the product Page Project collaboration with the design product." buttonName="High" colourStyle={{textColour:"text-red-800",bgColour:"bg-red-500"}}/>
        <Card title="Client Meeting" para="Updating the current user interface of header in the picko Design Project" buttonName="Medium"  colourStyle={{textColour:"text-yellow-800",bgColour:"bg-yellow-500"}}/>
        <Card title="Dripple Shot" para="Creating the main UI Assets and illustration for the upcoming landing page screens" buttonName="Low"  colourStyle={{textColour:"text-green-800",bgColour:"bg-green-500"}}/>
        <div className='flex flex-col gap-3 justify-center items-center bg-transparent px-3 py-5 rounded-2xl  bg-white/5  backdrop-blur-xl  border border-white/10 shadow-xl space-y-3'>
            <div className='pt-1.5 rounded-full bg-white text-black w-10 h-10 text-center hover:cursor-pointer hover:outline-1 outline-white outline-offset-4'>+</div>
            <div>Add New Task</div>
        </div>

        <div className='col-span-2 bg-transparent px-3 py-5 rounded-2xl  bg-white/5  backdrop-blur-xl  border border-white/10 shadow-xl space-y-3'>
           <div className='flex justify-between'>
            <div className='font-semibold text-lg tracking-wide'>
            Project
           </div>
           <div className='space-x-3'>
            <button className='rounded-md bg-orange-300 px-3 py-1.5 cursor-pointer outline-white hover:outline-2 outline-offset-2'>Ongoing</button>
            <button className='px-3 py-1 rounded border-2 border-white cursor-pointer hover:border-0 hover:outline-red-800 hover:outline-2 outline-offset-2'>Pending</button>
           </div>
           </div>
           <div className='grid grid-cols-2 gap-x-4'>
            <ProjectCard image={Rocket} title="StartUp web with Responsive" time="12.00Pm-8.30Pm"/>
            <ProjectCard image={Cookie} title="Product Design and App Design" time="13.00Pm-9.30Pm"/>
           </div>
        </div>
    </div>
  )
}

export default Content1