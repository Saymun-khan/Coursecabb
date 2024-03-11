import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaAddressBook, FaBook } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import img from '../img/profile.png'

const Navbar = () => {
  return (
    <div style={{display:'block'}}>
        <div className='navbar h-12'>
        <div>
            <Link to='/'>
            <img src={img} className="w-40 h-40 ml-10 -mt-16" alt="img" />
            </Link>
        </div>
        <div>
            <ul>
                <li className='flex'>
                    <FaBook className='mt-1 mr-2' />
                    <Link to='/userprofile'> সেবা সমূহ</Link>
                </li>
                <li className='flex'>
                    <FaAddressBook className='mt-1 mr-2' />
                    <Link to='/leaderboard'>
                    লিডারবোরড
                    </Link>
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li className='flex'>
                    <CgProfile className='mt-1 mr-2' />
                    <Link to='/signin'>লগ ইন</Link>
                </li>
                <li>
                    <Link to='/Signup' className='w-10 h-6 bg-gray-300 rounded-2xl text-gray-800 p-2 hover:bg-gray-700 hover:text-gray-300'>রেজিস্টার</Link>
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar