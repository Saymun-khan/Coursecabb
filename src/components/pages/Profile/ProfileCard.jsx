import React from 'react'

const ProfileCard = ({Count,Text}) => {
  return (
    <div> 
        <div className='w-80 h-28 bg-slate-50 shadow-2xl p-8 m-4'>
            <h1 className='text-2xl font-semibold'>{Count}</h1>
            <p>{Text}</p>
        </div>
    </div>
  )
}

export default ProfileCard