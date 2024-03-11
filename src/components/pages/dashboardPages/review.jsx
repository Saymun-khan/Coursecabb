import React from 'react'
import DashboardNavbar from '../dashboard/dashboardNavbar'
import Footer from '../dashboard/footer'
import Question from './Question'

const Review = () => {
  
  return (
    <div className='bg-white text-neutral-900'>
        <DashboardNavbar />
        <div className='p-10'>
            <h1 className='text-neutral-900 font-bold text-3xl ml-2'>Review</h1>
        </div>
        <div>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Review