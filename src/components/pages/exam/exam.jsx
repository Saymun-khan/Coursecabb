import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import DashboardNavbar from '../dashboard/dashboardNavbar'
import Footer from '../dashboard/footer'
import Question from '../dashboardPages/Question'
import AuthoButton from '../homePages/AuthoButton'
import Data from './data'



const Exam = () => {
    const users = useSelector((state) => state)
    const user = users.user.user
    const id = user.existUser._id
    const [datas,setDatas] = useState([])
    const [params,setParams] = useState('')
    const [mainId,setMainId] = useState('')
    const [secondId,setSecondId] = useState('')
    const [sub,setSub] = useState('')

    //handle answer 
    const clicks = () => {
        console.log(sub)
    }
    

    //axios post request for displaying question
   const click = () => {/*
        Axios.get(`http://localhost:5000/auth/find/${id}`)
        .then((result) => {
            const r = result.data.mock_test
            const rs = r.length
           setSub(r[rs - 1].Exam_details[0][0])
        })
        Axios.get(`http://localhost:5000/auth/find/${id}`)
        .then((result) => {
            const obj = result
            const len = obj.data.mock_test.length
            const id = obj.data._id
            setMainId(id)
            setSecondId(obj.data.mock_test[len - 1]._id)
            console.log(mainId)
            console.log(secondId)
        })
        /*console.log(mainId)
        Axios.patch(`http://localhost:5000/auth/correct/${mainId}/${secondId}`)
        console.log(datas.map((d) => d.correctAnswer))*/
    }
    useEffect(() => {
        const subjects = users.exam.subject

        console.log('this is',subjects)

        Axios.get(`http://localhost:4500/auth/${subjects}`)
            .then((response) => {
                const data = response.data
                setDatas(data)
            })
            .catch((error) => {
                console.log(error)
            })
       /* Axios.patch(`http://localhost:5000/auth/mocktest/${id}`)
        .then((result) => {
            const obj = result.data.mock_test
            console.log(obj.length)
        })
        .catch((error) => console.log(error))*/
        /*Axios.post('http://localhost:4500/auth/answer',{
            correctAnswer:[],
            wrongAnswer:[]
        })
        .then((response) => {
            setParams(response.data._id)
        })*/
  },[])


    return (
    <div className='bg-white text-neutral-900'>
        <DashboardNavbar />
        <div className='p-10'>
            <h1 className='text-neutral-900 font-bold text-3xl ml-2 text-center'>Exam start</h1>
            <button onClick={clicks}>click</button>
        </div>
        <div>
            <Data />
        </div>

        {datas.map((d) => {
            let index = datas.indexOf(d) + 1
            console.log(d)
            return <Question QNumber={index} Question={d.question} optionOne={d.answer[0]} optionTwo={d.answer[1]} optionThree={d.answer[2]} optionFour={d.answer[3]} Answer={d.correctAnswer} Params={params} MainId={mainId} SecondId={secondId} />
                })}
        <div>
            <Link to='/showans'>
            <AuthoButton AuthButton='Submits' />
            </Link>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Exam