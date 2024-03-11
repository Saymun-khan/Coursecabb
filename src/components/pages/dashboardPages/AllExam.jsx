import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DashboardNavbar from '../dashboard/dashboardNavbar'
import Footer from '../dashboard/footer'
import TableRow from './TableRow'
const AllExam = () => {
    const users = useSelector((state) => state)
    const user = users.user.user
    const id = user.existUser._id
    const [data,setData] = useState([])

    useEffect(() => {
     axios.get(`http://localhost:5000/auth/find/${id}`)
     .then((result) => {
        setData(result.data.mock_test)
     })
    }, [data])
    
    const click = () => {
        data.map((d) => {
            const c = d.Correct_answer.length
            const w = d.Wrong_answer.length
            const r = c+w
            const t = (3/r)*100
            console.log(Math.floor(t))
        })
    }

  return (
    <div className='bg-slate-100 text-neutral-900'>
        <div>
            <DashboardNavbar />
            <div className='p-8 ml-20'>
            <button onClick={click}>click</button>
                <table className='bg-slate-200 shadow-xl m-4 w-11/12'>
                    <thead>
                        <tr className='border-b-2 border-gray-200 dark:border-gray-700'>
                            <th className='p-1'>No</th>
                            <th className='p-2'>Type</th>
                            <th className='p-2'>Topic</th>
                            <th className='p-2'>Marks</th>
                            <th className='p-2'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d) => {
                                const index = data.indexOf(d) + 1
                                const dt = d.Exam_details[0][4]
                                const dtt = Array(dt)
                                const topic = d.Exam_details[0][0]
                                const number = d.Achieved_number
                                const correct = d.Correct_answer.length
                                const wrong = d.Wrong_answer.length
                                const examNumber = correct + wrong
                                const percent = (number / examNumber) * 100
                                const percentValue = Math.floor(percent)
                                
                                return(
                                    <TableRow examNumber={index} examDetails={dtt.toLocaleString()} examTopic={topic} AchievedNumber={number} PercentNumber={percentValue} ExamNumber={examNumber} />
                                )
                            })
                        }
                        
                       
                    </tbody>
                </table>
                <div className='text-center'>
                    <button className='w-10 h-6 bg-blue-300 rounded-md'>1</button>
                    <button className='w-10 h-6 m-4 bg-blue-300 rounded-md'>2</button>
                    <button className='w-10 h-6 bg-blue-300 rounded-md'>3</button>
                </div>
                <div>
                    <Footer />
                </div>
            </div>

        </div>
    </div>
  )
}

export default AllExam