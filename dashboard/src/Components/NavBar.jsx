import React from 'react'
import { LayoutDashboard, LogOut, MessageSquare, Calendar, Contact2Icon, FilesIcon, ShoppingCartIcon, UserIcon, SunIcon, MoonIcon, PlusIcon } from "lucide-react";

const NavBar = () => {
    return (
        <div className='bg-black w-50 h-screen px-4 py-5'>
            <div className='flex gap-3'>
                <div className='w-8 h-8 rounded-full bg-yellow-300'></div>
                <h1 className='italic font-bold text-white text-2xl'>TK.VP</h1>
            </div>
            <div className='flex flex-col gap-6 mt-8'>
                {/* Menu Items */}
                <div className='flex flex-col gap-6'>
                    {menuItems.map((item, index) => (
                        <div key={index} className={`flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity ${item.active ? 'text-yellow-200' : 'text-white'}`}>
                            <item.icon className="h-5 w-5" />
                            <span className="font-medium">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className='h-px bg-black my-2'></div>

                {/* Logout */}
                <div className='flex items-center gap-3 text-white cursor-pointer hover:opacity-80 transition-opacity'>
                    <LogOut className="h-5 w-5" />
                    <span className="font-medium">Logout</span>
                </div>

                <div className='flex items-center gap-3 text-white cursor-pointer hover:opacity-80 transition-opacity'>
                    <SunIcon className="h-5 w-5" />
                    <span className="font-medium">Day mode</span>
                </div>
                <div className='flex items-center gap-3 text-white cursor-pointer hover:opacity-80 transition-opacity'>
                    <MoonIcon className="h-5 w-5" />
                    <span className="font-medium">Night mode</span>
                </div>

                <div className="bg-black text-white rounded-xl p-6 flex flex-col items-center text-center gap-4 mt-4">
                    <div className="bg-yellow-300 rounded-full p-3 text-black">
                        <PlusIcon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="font-semibold">Add new project</span>
                        <span className="text-xs text-gray-400">or invite link</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: UserIcon, label: 'Team' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: Calendar, label: 'Calendar' },
    { icon: FilesIcon, label: 'Files' },
    { icon: ShoppingCartIcon, label: 'Product' },
    { icon: Contact2Icon, label: 'Contacts' },
]

export default NavBar