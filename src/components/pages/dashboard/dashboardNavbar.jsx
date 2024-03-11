import React from 'react'
import { AiFillBank, AiFillBulb, AiFillFileAdd, AiFillSignal } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const DashboardNavbar = () => {
  const users = useSelector((state) => state)
  
  
  
  return (
    <div className='h-14 p-2 bg-slate-100 shadow-lg text-neutral-900 flex'>
        <div className='grid grid-cols-3 gap-2'>
            <h1 className='pl-10 p-2'>Chorcha</h1>
        </div>
        <div className='flex'>
            <ul className='flex'>
                <li className='ml-6 flex cursor-pointer p-2'><AiFillBank /><Link to='/dashboard'>Dashboard</Link></li>
                <li className='ml-6 flex cursor-pointer p-2'><AiFillFileAdd /><Link to='/mocktest'>Mock Test</Link></li>
                <li className='ml-6 flex cursor-pointer p-2'><AiFillSignal /><Link to='/allexam'>All Exam</Link></li>
                <li className='ml-6 flex cursor-pointer p-2'><AiFillBank /><Link to='/review'>Review</Link></li>
                <li className='ml-6 flex cursor-pointer p-2'><AiFillFileAdd /><Link to='/liveexam'>Live Exam</Link></li>
                <li className='ml-6 flex cursor-pointer p-2'><AiFillFileAdd />Performance Analysis</li>
            </ul>
        </div>
        <div className='ml-16'>
            <ul className='flex'>
                <li className='ml-2 p-2'><AiFillBulb /></li>
                <li className='ml-2 p-2'><AiFillBank /></li>
                <li className='ml-2 p-2'><Link to='/profile'>

                <button class="flex items-center space-x-2 focus:outline-none dropdown">
          <img src="https://www.gravatar.com/avatar/77c81490dcc34e10caba9121cf64bc74?d=robohash" class="h-8 w-8 rounded-sm object-cover" />
          <div class="text-sm hidden xl:flex flex-col justify-start items-start">
            <div class="text-gray-700 dark:text-gray-200 font-medium">{/*{users.user.user.existUser.name}*/}Shovon</div>
            <div class="text-xs text-gray-500">Catagory: basic</div>
          </div>
        </button>
                
                </Link></li>
            </ul>
        </div>
    </div>
  )
}

export default DashboardNavbar