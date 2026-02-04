import React from 'react'
import db from './assets/dashboard_7663921.png'
const NavBar = () => {
  return (
    <div className='bg-black w-50 h-full px-3 py-5'>
        <div className='flex gap-3'>
            <div className='w-8 h-8 rounded-full bg-yellow-300'></div>
            <h1 className='italic font-bold text-white text-2xl'>TK.VP</h1>
        </div>
        <div className='text-white mt-6'>
            <div>
                <img src={db} alt="" />
                <p>
                    DashBoard
                </p>
            </div>
        </div>
    </div>
  )
}

export default NavBar