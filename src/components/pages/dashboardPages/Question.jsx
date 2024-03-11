import Axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Question = ({QNumber,Question,optionOne,optionTwo,optionThree,optionFour,Answer,Params,MainId,SecondId}) => {
/*const user = useSelector((state) => state)
    console.log(user.user.user.existUser._id)*/
    const users = useSelector((state) => state)
    const user = users.user.user
    const userId = user.existUser._id
    const obj = user.existUser.mock_test
    const findData = () => {
        console.log(obj.length)
    }

 const [state,setState] = useState(true)
 const [answer,setAnswer] = useState([])

 
    /*//handle post request
    var correctAnswer = [answer]
    var wrongAnswer = []
    const answerObject = {
        correctAnswer,
        wrongAnswer
    }
    const post = () => {
        Axios.post('http://localhost:4500/auth/answer',answerObject)
        .then((result) => {
            console.log('answer submitted')
        })
        .catch((error) => {
            console.log('answer not submitted')
        })
    }
    var arr = []*/
     //send data answer array
 const correctanswerArray = async() => {
    await Axios.patch(`http://localhost:5000/auth/correct/${MainId}/${SecondId}`)
 }
  //send data answer array
  const wronganswerArray = async() => {
    await Axios.patch(`http://localhost:5000/auth/wrong/${MainId}/${SecondId}`)
 }
    //handle post request
    const handleOne = (e) => {
        const {value} = e.target
        console.log(e.target.value)
        console.log(Answer)
        if(state){
            setAnswer('a')
            setState(false)
            if(Answer === value){
                console.log('correct answer')
                correctanswerArray()
            }else{
                wronganswerArray()
            }
        }
    }

 
    const handleTwo = (e) => {
        const {value} = e.target
        console.log(e.target.value)
        console.log(Answer)
        if(state){
            setAnswer('b')
            setState(false)
            if(Answer === value){
                console.log('correct answer')
                correctanswerArray()
            }else{
                wronganswerArray()
            }
        }

    }
    const handleThree = (e) => {
        const {value} = e.target
        console.log(e.target.value)
        console.log(Answer)
        if(state){
            setAnswer('c')
            setState(false)
            if(Answer === value){
                console.log('correct answer')
                correctanswerArray()
            }else{
                wronganswerArray()
            }
        }

    }
    const handleFour = (e) => {
        const {value} = e.target
        console.log(e.target.value)
        console.log(Answer)
        if(state){
            setAnswer('d')
            setState(false)
            if(Answer === value){
                console.log('correct answer')
                correctanswerArray()
            }else{
                wronganswerArray()
            }
        }
    }

  return (
    <div className='p-10 pt-1 -mt-4'>
        <div className='bg-gray-100 p-6 rounded-md shadow-xl'>
            <h1 className='mb-4'><span className='mr-2'>{QNumber}</span>{Question}</h1>
            <div>
                <button onClick={findData}>click</button>
                <div className='grid grid-cols-2'>
                    <button className={`flex w-3/4 shadow-md rounded-md p-2 mb-6 ${state ? 'hover:bg-green-500' : ''} cursor-pointer ${answer === 'a' ? 'bg-red-300' : ''}`}  onClick={handleOne} value={optionOne}>
                        <div className='w-5 h-5 bg-green-600 rounded-full text-center text-sm mr-2'>ক</div>
                        <div className='text-sm'>{optionOne}</div>
                    </button>
                    <button className={`flex w-3/4 shadow-md rounded-md p-2 mb-6  ${state ? 'hover:bg-green-500' : ''} cursor-pointer ${answer === 'b' ? 'bg-red-300' : ''}`}  onClick={handleTwo} value={optionTwo}>
                        <div className='w-5 h-5 bg-slate-300  rounded-full text-center text-sm mr-2'>খ</div>
                        <div className='text-sm'>{optionTwo}</div>
                    </button>
                </div>
                <div className='grid grid-cols-2'>
                <button className={`flex w-3/4 shadow-md rounded-md p-2 mb-6 ${state ? 'hover:bg-green-500' : ''} cursor-pointer ${answer === 'c' ? 'bg-red-300' : ''}`}  onClick={handleThree} value={optionThree}>
                        <div className='w-5 h-5 bg-green-600 rounded-full text-center text-sm mr-2'>গ</div>
                        <div className='text-sm'>{optionThree}</div>
                    </button>
                    <button className={`flex w-3/4 shadow-md rounded-md p-2 mb-6  ${state ? 'hover:bg-green-500' : ''} cursor-pointer ${answer === 'd' ? 'bg-red-300' : ''}`}  onClick={handleFour} value={optionFour}>
                        <div className='w-5 h-5 bg-white rounded-full text-center text-sm mr-2'>ঘ</div>
                        <div className='text-sm'>{optionFour}</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Question