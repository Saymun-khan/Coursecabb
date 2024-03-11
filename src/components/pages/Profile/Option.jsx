import React from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const Option = () => {
  const logout = () => {
    //destroy the cookie
    cookies.remove('token',{path:'/'})

    //redirect user to the landing page
    window.location.href = '/'
    console.log('hello cookie');
    
  }
  return (
    <div>
        
        <div className="top-10 right-4 absolute dropdown-menu h-2 w-2 border-t border-l border-gray-200 dark:border-gray-800 z-50 overflow-hidden bg-white dark:bg-gray-900 rotate-45 rounded-sm"></div>
        <div className="text-sm border border-gray-200 dark:border-gray-800 p-1 absolute top-11 right-0 dropdown-menu z-40 bg-white dark:bg-gray-900 rounded-md">
          <Link className="dropdown-item block" to="/profilehome">Profile</Link>
          <Link className="dropdown-item block" to="/settings">Settings</Link>
          
          <a className="dropdown-item block" href="/upgrade">Upgrade</a>
          
          <Link className="dropdown-item" href="/referals">Referrals</Link>
          <button className='block text-red-600' type="submit" onClick={logout}>Logout</button>
        </div>
    </div>
  )
}

export default Option