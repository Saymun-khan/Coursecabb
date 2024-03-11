import React from 'react'
import InputHome from './InputHome'
import InputProfile from './InputProfile'

const Passsword = () => {
  return (
    <div className='bg-slate-100 text-neutral-800'>
        <InputHome>
            <InputProfile Text='New Password' />
            <InputProfile Text='Confirm New Password' />
        </InputHome>
    </div>
  )
}

export default Passsword