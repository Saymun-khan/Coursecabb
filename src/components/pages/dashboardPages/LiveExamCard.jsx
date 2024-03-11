import React from 'react'
import img from '../img/pic1.jpg'

const LiveExamCard = () => {
  return (
    <div>
        <div className='p-10 pt-1 -mt-4'>
        <div>
            <div className='bg-gray-100 p-6 rounded-md shadow-xl'>
            <div className='p-4 flex'>
                <div>
                    <div className='mb-2'>
                        <img className='w-16 h-16 rounded-full' src={img} alt="" />
                    </div>
                    <p>Chorcha</p>
                </div>
                <div className='ml-16'>
                    <h1 className='text-xl font-semibold mb-2'>Chorcha Quize contest</h1>
                    <p>30 Minutes,219 Questions</p>
                    <p>7.33 PM 15 October 2022 to 12.00 AM 16 October 2022</p>
                    <button className='w-20 h-8 rounded-xl text-center mt-4 -mb-4 bg-red-400'>Finished</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>

  )
}

export default LiveExamCard