import React from 'react'
import img from '../img/pic1.jpg'

const Slider = () => {
  return (
    <>
       <div className='flex mt-16 p-8'>
            <div className='flex-1'>
                <img src={img} />
            </div>
            <div className='flex-1 mt-10'>
                <h1 className='font-semibold text-3xl mb-8 text-black'>Easily Create Live exam</h1>
                <p className='font-sm mb-6'>Create Live Exams using questions from our database in seconds or add your own questions manually and easily share using link or QR code. If that sounds like old School we got you covered. Create a batch and give it access to your exams. Students in that batch will get the exams automatically from thier interface.</p>
                <button className='w-24 bg-blue-700 h-9 bord rounded-md font-bold text-medium hover:bg-blue-600'>Learn more</button>
            </div>
        </div> 
    </>
  )
}

export default Slider