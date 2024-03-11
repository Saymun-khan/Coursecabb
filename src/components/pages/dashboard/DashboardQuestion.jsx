import React from 'react'

const DashboardQuestion = () => {
  return (
    <div>
        <div className='ml-16 mt-8 rounded-md w-11/12 bg-slate-200 shadow-xl h-auto'>
            <h1 className='p-2 font-semibold text-neutral-900 text-2xl'>Quickly practise</h1>
            <p className='p-3 text-neutral-700'>Value of 2 + 2?</p>
            <div>
            <div className='grid grid-cols-2 gap-4 mb-2'>
                <div className='h-10 rounded-md bg-red-300 mb-3 text-center p-2 ml-4'>
                    <h1>06</h1>
                </div>
                <div className='h-10 rounded-md bg-green-300 mb-3 text-center p-2 ml-4'>
                    <h1>09</h1>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='h-10 rounded-md bg-red-300 mb-3 text-center p-2 ml-4'>
                    <h1>04</h1>
                </div>
                <div className='h-10 rounded-md bg-green-300 mb-3 text-center p-2 ml-4'>
                    <h1>05</h1>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardQuestion