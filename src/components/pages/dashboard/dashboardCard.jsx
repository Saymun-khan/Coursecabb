import React from 'react'

const dashboardCard = () => {
  return (
    <div className='p-10 rounded-lg hover:shadow-lg'>
        <div className='w-11/12 h-11/12 ml-20 p-10 bg-white rounded-sm drop-shadow-lg  text-black'>
        <div className='mb-6'>
            <h1 className='text-3xl'>Basic</h1>
            <h1 className='font-bold mt-2 text-4xl'>Free</h1>
            <button className='bg-neutral-700 w-60 h-10 text-blue-300 font-bold text-medium mt-6 drop-shadow-lg hover:bg-blue-600 hover:text-white rounded-md'>GET STARTED</button>
        </div>
        <div className='border-t-2 border-red-50 border-solid'>
            <h1 className='mt-6 font-medium mb-6'>What's included</h1>
            <ul className='list-disc text-md'>
                <li>Get full access to our database of %x questins</li>
                <li>Create your own question</li>
                <li>Create 1 personal database to store your question</li>
                <li>Take 5 mcq exams/months</li>
                <li>take 2 written exams per month</li>
                <li>Create 2 Batches</li>
                <li>Add up to 5 students in each batch for free</li>
            </ul>
            <p className='mt-4 text-indigo-300'>Add more students</p>
        </div>
    </div>
    </div>
  )
}

export default dashboardCard