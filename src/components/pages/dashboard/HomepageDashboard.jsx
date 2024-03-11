import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import DashboardNavbar from './dashboardNavbar'
import DashboardQuestion from './DashboardQuestion'
import Footer from './footer'
import LeaderBoardComponent from './leaderboardComponent'
const HomepageDashboard = () => {
    const user = useSelector((state) => state)
  return (
    <div className='bg-white'>
        <div>
            <DashboardNavbar />
        </div>
        <div className='bg-slate-50 text-neutral-900 p-6 grid grid-cols-2 gap-4'>
            <span className='text-2xl font-bold ml-6'>Dashboard</span>
            <button className='w-24 p-2 bg-green-400 rounded-md mx-96'><Link to='/exam'>New Exam</Link></button>
        </div>
        <div className=''>
            <DashboardQuestion />
        </div>
        <div className='text-neutral-900 flex p-10 ml-6'>
            <div className='bg-neutral-300 w-96 rounded-md flex-2 h-48'>
                accurance
            </div>
            <div className='flex-1 ml-40'>
                <h1 className='text-xl font-semibold mb-4'>Weekly leaderboard</h1>
                <LeaderBoardComponent />
                <LeaderBoardComponent />
                <LeaderBoardComponent />
            </div>
            
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default HomepageDashboard