import React from 'react'
import img from '../img/pic1.jpg'

const LeaderBoardComponent = () => {
  return (
    <div className='w-3/4 mb-2 rounded-md p-2 bg-slate-100 text-neutral-700'>
        <div className='grid grid-cols-2'>
        <div className='flex'>
            <span className='p-2'>21</span>
            <img className='w-16 h-8 pl-2 pr-3' src={img} alt="pic" />
            <div>
                <h1 className='text-md font-semibold text-neutral-900'>Shovon</h1>
                <p className='text-neutral-500'>Rajshahi Govt. Model College,Rajshahi</p>
            </div>
        </div>
        <div className='justify-items-end'>
            <h1 className='mt-2 ml-40'>16.7k</h1>
        </div>
    </div>
    </div>
    
  )
}

export default LeaderBoardComponent