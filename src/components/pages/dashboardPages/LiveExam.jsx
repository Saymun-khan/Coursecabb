import React, { useContext } from 'react'
import { AuthContext } from '../../../context/authContext'
import DashboardNavbar from '../dashboard/dashboardNavbar'
import Footer from '../dashboard/footer'
import LiveExamCard from './LiveExamCard'

const LiveExam = () => {
  const {user} = useContext(AuthContext)
  console.log(user.existUser)
  return (
    <div className='bg-slate-100 text-neutral-900'>
        <DashboardNavbar />
        <div className='p-10'>
            <h1 className='text-neutral-900 font-bold text-3xl ml-2'>Live Exam</h1>
        </div>
        <div className='grid grid-cols-2'>
          <LiveExamCard />
          <LiveExamCard />
        </div>
        <div className='grid grid-cols-2'>
          <LiveExamCard />
          <LiveExamCard />
        </div>
        <div className='grid grid-cols-2'>
          <LiveExamCard />
          <LiveExamCard />
        </div>
        <div className='grid grid-cols-2'>
          <LiveExamCard />
          <LiveExamCard />
        </div>
        <div className='grid grid-cols-2'>
          <LiveExamCard />
          <LiveExamCard />
        </div>
        <div className='grid grid-cols-2'>
          <LiveExamCard />
          <LiveExamCard />
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default LiveExam