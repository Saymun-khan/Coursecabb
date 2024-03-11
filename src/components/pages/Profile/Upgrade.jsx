import React from 'react'
import DashboardNavbar from '../dashboard/dashboardNavbar'
import Footer from '../dashboard/footer'
import SignItem from './SignItem'
const Upgrade = () => {
  return (
    <div className='bg-slate-100 text-neutral-900 text-center'>
        <DashboardNavbar />
        <div>
            <h1 className='font-bold text-4xl mt-8'>CHORCHA</h1>
            <h2 className='font-semibold text-2xl mt-6'>Upgrade to premium</h2>
            <div className='grid grid-cols-2'>
                <div>
                    <SignItem />
                    <SignItem />
                    <SignItem />
                </div>
                <div>
                    <SignItem />
                    <SignItem />
                    <SignItem />
                </div>
            </div>
            <div className='grid grid-cols-3'>
            <div className='w-60 shadow-2xl rounded-md bg-slate-50 p-4 m-6'>
                <h1 className='font-semibold text-md mb-2'>Monthly</h1>
                <h1 className='text-md font-bold'>1999 TK / Month</h1>
                <button className='w-40 bg-black rounded-md p-2 mt-6 text-slate-50'>Buy now</button>
            </div>
            <div className='w-60 shadow-2xl rounded-md bg-slate-50 p-4 m-6'>
                <h1 className='font-semibold text-md mb-2'>Monthly</h1>
                <h1 className='text-md font-bold'>1999 TK / Month</h1>
                <button className='w-40 bg-black rounded-md p-2 mt-6 text-slate-50'>Buy now</button>
            </div>
            <div className='w-60 shadow-2xl rounded-md bg-slate-50 p-4 m-6'>
                <h1 className='font-semibold text-md mb-2'>Monthly</h1>
                <h1 className='text-md font-bold'>1999 TK / Month</h1>
                <button className='w-40 bg-black rounded-md p-2 mt-6 text-slate-50'>Buy now</button>
            </div>
            </div>
            <div>
                <h1>Have a copon ? enter here copon</h1>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    </div>
  )
}

export default Upgrade