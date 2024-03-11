import React from 'react'
import Footer from '../dashboard/footer'
import AnalyzCard from './AnalyzCard'
import Card from './Card'
import Navbar from './Navbar'

import DashboardCard from '../dashboard/dashboardCard'
import Bimg from '../img/bannerimgone.jpg'
import pic1 from '../img/pic1.jpg'
import pic2 from '../img/pic2.jpg'
const Home = () => {
  return (
    <div className=''>
    <Navbar />
    <div className='homeBanner'>
      <div className='mt-16'>
        <img src={Bimg} className="w-96 h-64 rounded-md ml-6" />
      </div>
      <div style={{marginLeft:'15%'}} className="mt-16">
        <h1><span>CourseCabb</span> এ পরীক্ষা দাও</h1>
        <p>নিজের পছন্দমতো হাজার হাজার প্রশ্ন থেকে<br /> বিষয় ও অধ্যায়ভিত্তিক।লাইভ পরীক্ষা ,<br /> মক টেস্ট,কুইজ এর মাধ্যমে যাচাই করো নিজেকে</p>
      </div>
    </div>
    <div className='analyze'>
      <AnalyzCard Number='40,000+' Text='students' />
      <AnalyzCard Number='25,000+' Text='Questions' />
      <AnalyzCard Number='200,000+' Text='Exams taken' />
      <AnalyzCard Number='10,00,000+' Text='Minutes practised' />
    </div>
    <div>
      <Card ImgsrcOne={pic1} ImgsrcTwo={pic2} TextOne='Quikly Practise' TextTwo='Leaderboard' TextThree="Mock Test" />
      <Card ImgsrcOne={pic1} ImgsrcTwo={pic2} TextOne='Performance Analysis' TextTwo='Live Exam' TextThree="Riview" />
    </div>
    <div>
    <div className='flex ml-20 p-10
        '>
        <DashboardCard />
        <DashboardCard />
    </div>
    </div>
    <div>
      <Footer />
    </div>
    </div>
  )
}

export default Home