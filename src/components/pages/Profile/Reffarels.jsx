import React from 'react'
import Footer from '../dashboard/footer'
import img from '../img/pic1.jpg'

const Reffarels = () => {
  return (
    <div className='p-6 bg-slate-200 text-neutral-900 justify-center'>
        <h1 className='text-3xl font-bold font-serif first-letter:text-red-600 mt-20 mb-10 text-center'>Invite with refferals</h1>
        <div className='w-11/12 justify-center bg-white h-1/4'>
            <div>
                <img className='w-80 h-40 p-4 justify-center text-center ml-96 mt-24' src={img} alt="" />
            </div>
            <div>
                <h1 className='font-semibold text-xl text-center mt-20'>Invite your friends</h1>
            </div>
            <div className='ml-96 mt-6 w-80 rounded-md bg-slate-400 p-2 text-center'>
                <h1>https://www.chorcha.com</h1>
            </div>
            <div>
                <h1 className='text-center mt-6 mb-10'>Invite your friends to use your link ,you and your friend will be get a chorcha free excess</h1>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Reffarels