import AnalyzCard from '../homePages/AnalyzCard'
import Navbar from '../homePages/Navbar'
import img from '../img/pic1.jpg'
import DashboardCard from './dashboardCard'
import Footer from './footer'
import Slider from './slider'
const userProfile = () => {
  return (
    <>
    <Navbar />
    <div className='bg-blue-400'>
      <div className='mt-14 flex p-10'>
      <div className='flex-1 p-6 mt-8'>
        <img className='w-1/2 h-60' src={img} />
      </div>
      <div className='flex-1 p-5 mt-8 -ml-40'>
        <h1 className='font-bold text-4xl text-neutral-800 mt-10'>
          <span className='text-red-500'>E</span>xam <span className='text-red-500'>M</span>anagement <span className='text-red-500'>S</span>ystem
          </h1>
          <p className='text-center mt-10'>
          Easily create and manage live MCQ and Written exams for your online and offline batches, maintain multiple batches and keep track of your students' performances
all from one place
          </p>
      </div>
      </div>
      <div className='flex mt-14 ml-10'>
      <AnalyzCard Number='100000+' Text='Students' />
      <AnalyzCard Number='100000+' Text='Students' />
      <AnalyzCard Number='100000+' Text='Students' />
      <AnalyzCard Number='100000+' Text='Students' />
      </div>
      <div>
        <Slider />
        <Slider />
        <Slider />
      </div>
      <div>
        <h1 className='text-center font-semibold text-4xl mt-8 text-black'>Our <span className='text-blue-800'>Pricing</span> Plan</h1>
        <p className='mt-6 text-center text-xl'>Choose the plan that best suits your needs</p>
        <div className='flex ml-20 p-10
        '>
        <DashboardCard />
        <DashboardCard />
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-2xl text-neutral-900'>Built to make your cause bigger and better</h1>
          <p className='font-semibold text-xl p-4 ml-36 mr-36'>Teachers are the assets of our country. On the mission of developing our <br></br>country we need your help. Here we try to offer you the best service<br></br> possible so that you can teach the whole nation. Are you ready?</p>
          <button className='bg-blue-800 w-24 h-10 rounded-md'>Get started</button>
          <Footer />
        </div>
      </div>
    </div>
    </>
  )
}

  
export default userProfile