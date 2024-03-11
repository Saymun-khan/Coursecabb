import { default as axios } from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { examStart } from '../../../redux/actions/userAction'
import DashboardNavbar from '../dashboard/dashboardNavbar'
import Footer from '../dashboard/footer'
import SubjectCheck from '../subjectCheck.js/subjectCheck'
import Checkbox from './checkbox'

const Mocktest = () => {
  const data = useSelector((state) => state)
  const dispatch = useDispatch()
  //const {user,isFetching,error,dispatch} = useContext(AuthContext)
  
    const checkArray = []
    let dataArray = []
    const [times,setTimes] = useState('')
    const [negmark,setNegMark] = useState('yes')
    const [exam,setExam] = useState('allExam')
    const [check,setCheck] = useState([])
    const [ids,setIds] = useState()
    const [d,setD] = useState()
    const handleNegMark = (e) => {
      setNegMark(e.target.value)
    }

    const checkExam = () => {
      /*const id = user.existUser._id
      Axios.patch(`http://localhost:5000/auth/mocktest/${id}`)
        .then((result) => {
            const obj = result.data.mock_test
            console.log(obj)
        })
        .catch((error) => console.log(error))*/
    }
    const handleChange = (e) => {
        // Destructuring
        const { value, checked } = e.target;
          
        console.log(`${value} is ${checked}`);
         
        // Case 1 : The user checks the box
        if (checked) {
          check.push(value)
          otherClick()
          /*check.push(value)
          setCheck(checkArray)*/
        }
      
        // Case 2  : The user unchecks the box
       else{
        checkArray.pop(value)
        console.log(checkArray)
       }
      };
    const handleExam = (e) => {
      setExam(e.target.value)
    }

      //handle radio



        //handle select
        const [subject,setSubject] = useState('subject')

        const handleChangess = (e) => {
            setSubject(e.target.value)
            console.log(subject);
            handleSubjectCheck()

        }
        const handleTime = (e) => {
          setTimes(e.target.value)
        }

        const otherClick = () => {
          /*const idOne = user.existUser._id
          Axios.get(`http://localhost:5000/auth/find/${idOne}`)
          .then((result) => {
            const len = result.data.mock_test.length 
            const idTwo = result.data.mock_test[len - 1]._id
            setIds(idTwo)
            console.log(idTwo)
          })
          .catch((error) => console.log(error))*/
        }
        const click = (e) => {
          dataArray = [subject,times,negmark,exam]
    const obj = {
      ExamNumber:1,
      CorrectAnswer:[],
      WrongAnswer:[],
      ExamDetails:dataArray,
      ExamCriteria:check,
      Number:25,
      UserId:data.user.user.existUser._id
    }
    axios.post('http://localhost:5000/auth/exam',obj)
    .then((result) => console.log(result,'hello'))
    .catch((error) => console.log(error))
    
    console.log(dataArray)
    console.log(check)
    dispatch(examStart(subject))
  
          /*const idOne = user.existUser._id 
          dataArray = [subject,times,negmark,exam]
          const obj = {
            dataArray : [subject,times,negmark,exam,check]
          }
          Axios.patch(`http://localhost:5000/auth/examdetails/${idOne}/${ids}`,obj)
          .then((result) => {
            console.log(result)
          })
          .catch((error) => {
            console.log(error)
          })*/
          
         /* console.log(subject)
          console.log(times)
          console.log(negmark)
          console.log(exam)
          console.log(check)*/
          console.log(dataArray)
          //mockCall(dataArray,dispatch)
        }

        //subject check
        const [subjectChecked,setSubjectChecked] = useState(false)
        const handleSubjectCheck = () => {
          if(subject){
            setSubjectChecked(true)
          }
        }


  return (
    <div className='bg-white text-neutral-900'>
        <DashboardNavbar />
    <div className='p-10 bg-green-300 w-11/12 m-12 ml-16 font-medium'>
      
        <div>
            <h1 className='text-xl font-semibold -mt-6 mb-4'>Select on your choice</h1>
        </div>
        <div>
            <h1 className='mb-2'>Types of question</h1>
            <div className='flex'>
            <h1 className='font-bold text-red-500 mb-2'>Are you ready for exam ?</h1>
            <button onClick={checkExam} className='w-16 text-white rounded-md ml-2 h-6 bg-pink-800'>OK</button>
            </div>
            <div className='flex'>
                <div>
                
                <input
                    type="radio"
                    value="allexam"
                    checked={exam === 'allExam'}
                    onChange={handleExam}
                    />
                    <span>All exam</span>
                </div>
                <div className='ml-10'>
                <input
                    type="radio"
                    value="mistakeExam"
                    checked={exam === 'mistakeExam'}
                    onChange={handleExam}
                    />
                    <span>Mistake exam</span>
                </div>
            </div>
        </div>
        <div>
            <h1 className='mt-2'>Standard of question</h1>
            <div className='grid grid-cols-2 mb-4'>
                <div>
                <Checkbox Text='Engineering' OnChange={handleChange} Name='types' />
                <Checkbox Text='Medical' OnChange={handleChange} Name='types' />
                <Checkbox Text='HSC-21-Short' OnChange={handleChange} Name='types' />
                </div>
                <div>
                    
                <Checkbox Text='Versity' OnChange={handleChange} Name='types' />
                <Checkbox Text='Academic' OnChange={handleChange} Name='types' />
                <Checkbox Text='HSC-22-Short' OnChange={handleChange} Name='types' />

                </div>
            </div>
        </div>
        <div>
          {subjectChecked ? <SubjectCheck /> : ''}
        </div>
        <div>
            <h1 className='mb-4'>Subject</h1>
            <div className="col-span-6 sm:col-span-3">
                      <select
                        value={subject}
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        onChange={handleChangess}
                      >
                        <option value='subject' selected >+Subject</option>
                        <option value='physics'>Physics</option>
                        <option value='biology'>Biology</option>
                        <option value='mathmetics'>Mathmatics</option>
                        <option value='chemistry'>Chemistry</option>
                      </select>
                    </div>
        </div>
        <div>
            <h1 className='mt-2 mb-4'>Time</h1>
            <div className="col-span-6 sm:col-span-4">
                      <input
                        type="number"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-8"
                        value={times}
                        onChange={handleTime}
                      />
                    </div>
        </div>
        <div>
            <h1 className='mt-2 mb-2'>Negative marking</h1>
            <div className='flex'>
                <div>
                    <input type="radio" checked={negmark === 'yes'} value='yes' onChange={handleNegMark} />
                    <span>Yes</span>
                </div>
                <div className='ml-10'>
                    <input type="radio" checked={negmark === 'no'} value='no' onChange={handleNegMark} />
                    <span>No</span>
                </div>
            </div>
        </div>
        <div className='text-center'>
          
            <Link to="/exam">
            <button className='mt-6 w-24 p-1 rounded-md hover:bg-blue-900 bg-red-400 hover:text-white' onClick={click}>exam</button>
            </Link>
        </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Mocktest