import React from 'react'
import DashboardNavbar from '../dashboard/dashboardNavbar'
import Footer from '../dashboard/footer'
import img from '../img/pic1.jpg'
import ProfileCard from './ProfileCard'

const Profile = () => {
  return (
    <div className='bg-slate-100 text-neutral-800'>
        <div>
            <DashboardNavbar />
        </div>
        <div className='flex p-10'>
            <div className='flex-3'>
                <img className='w-60 h-60 rounded-full' src={img} alt="" />
            </div>
            <div className='flex-1'>
                <div className='flex p-2 m-10'>
                    <ProfileCard Count='379' Text='Rank' />
                    <ProfileCard Count='7' Text='Exams' />
                    <ProfileCard Count='884' Text='Points' />
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Profile