import React from 'react'
import DahboardNavbar from '../dashboard/dashboardNavbar'
import Option from './Option'

const ProfileHome = () => {
  return (
    <div className='bg-slate-100 text-neutral-800'>
        <div>
            <DahboardNavbar />
        </div>
        <div className=''>
            <Option />
        </div>
    </div>
  )
}

export default ProfileHome