import React from 'react'
import { FaAddressBook } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const InputHome = (props) => {

  return (
    <div>
            <form action="#" className='w-11/12' method="POST">
                
              <div className="overflow-hidden mt-10 mr-2 flex p-4 shadow sm:rounded-md">
              <div className='w-60 p-4 m-10 rounded-xl h-auto bg-white shadow-3xl border border-slate-50 border-t-2 text-md font-md'>
              <div className='flex p-2 m-2 active:bg-green-300 active:width-40 font-semibold cursor-pointer'>
                <FaAddressBook />
                <h1 className='ml-4 -mt-1'>
                    <Link to='/settings/profile'>Profile</Link>
                </h1>
            </div>
            <div className='flex p-2 m-2 active:bg-green-300 active:width-40 font-semibold cursor-pointer'>
                <FaAddressBook />
                <h1 className='ml-4 -mt-1'>
                    <Link to='/settings/password'>Password</Link>
                </h1>
            </div>
            <div className='flex p-2 m-2 active:bg-green-300 active:width-40 font-semibold cursor-pointer'>
                <FaAddressBook />
                <h1 className='ml-4 -mt-1'>Plan</h1>
            </div>
            <div className='flex p-2 m-2 active:bg-green-300 active:width-40 font-semibold cursor-pointer'>
                <FaAddressBook />
                <h1 className='ml-4 -mt-1'>Logout</h1>
            </div>
          </div>
                <div className="bg-white px-4 py-5 sm:p-6">
                    <div>
                        <h1 className='font-semibold text-xl'>Profile</h1>
                        <p className='mt-2 mb-6'>This information will be displayed publicly</p>
                    </div>
                    <div>
                    {props.children}
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                    <div>
                        <h1>Phone</h1>
                        <p>01824599641</p>
                    </div>
                    </div>

                   <div>
                   <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                   </div>
                </div>
              </div>
            </form>
    </div>
  )
}

export default InputHome