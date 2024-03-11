import React from 'react'
import DashboardNavbar from '../dashboard/dashboardNavbar'
import InputHome from './InputHome'
import InputProfile from './InputProfile'

const Settings = () => {
  
                    
  return (
    <div className='bg-slate-100 text-neutral-700'>
         <div className="mt-10 sm:mt-0">
        <div>
          <div>
            <DashboardNavbar />
          </div>
          <InputHome>
                    <InputProfile Text='Name' />
                    <InputProfile Text='School/College' />
                    <InputProfile Text='Level' />
                    <InputProfile Text='About' />
          </InputHome>
        </div>
      </div>
    </div>
  )
}

export default Settings