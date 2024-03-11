import Axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/authContext'

const ShowAnswer = () => {
     //set score
  const [score,setScore] = useState(0)
  const [wrong,setWrong] = useState(0)
  const [ids,setIds] = useState('')
  const {user} = useContext(AuthContext)
  const id = user.existUser._id
  const showAnswer = () => {
    Axios.get(`http://localhost:5000/auth/showanswer/${id}`)
    .then((result) => {
        const obj = result
        const len = obj.data.mock_test.length
        setIds(result.data.mock_test[len - 1]._id)
        const correct = result.data.mock_test[len - 1].Correct_answer.length
        const wrong = result.data.mock_test[len - 1].Wrong_answer.length
        setScore(correct)
        setWrong(wrong)
        console.log(correct)
        console.log(wrong)
        
        
    })
    .catch((error) => {
        console.log(error)
    })
    return (
        <showAnswer Score={score} Wrong={wrong} />
    )
  }
  useEffect(() => {
    showAnswer()
  })
  const click = () => {
    const obj = {
        number:score
    }
    Axios.patch(`http://localhost:5000/auth/number/${id}/${ids}`,obj)
    .then((result) => {
        console.log(result)
        
        
    })
    .catch((error) => {
        console.log(error)
    })
  }
  return (
    <div className='bg-slate-100 text-neutral-800 p-20'>
        <div className='w-1/2 bg-slate-300 justify-center m-auto p-4 rounded-md shadow-lg shadow-slate-400'>
            <h1 className='text-red-500 font-extralight text-xl text-center'>Hurrah!Your exam is successfully done</h1>
            <h1 className='text-2xl font-bold text-neutral-600 text-center mt-4'>Congratulations</h1>
            <button onClick={click}>click</button>
            <h1 className='text-center mt-2 font-extrabold text-green-800'>Your score is</h1>
            <div className='flex mt-4'>
                <div>
                    <h1 className='mt-2 text-gray-600'>Correct Answer is : <span className='text-xl font-semibold text-teal-700'>{score}</span></h1>
                    <h1 className='mt-1 text-gray-500'>Wrong Answer is : <span className='text-xl font-semibold text-red-700'>{wrong}</span></h1>
                </div>
                <div className='ml-28'>
                    <button className='w-40 h-8 mt-2 rounded-lg shadow-md shadow-slate-500 bg-cyan-500 block'>Explain Question</button>
                    <Link to='/dashboard'>
                        <button className='w-40 h-8 mt-4 rounded-lg shadow-md shadow-slate-500 bg-orange-500 block'>Back to home</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowAnswer