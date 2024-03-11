import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Question from './pages/dashboardPages/Question'

const Read = () => {
    const [datas,setDatas] = useState([])
  
    useEffect(() => {
        Axios.get('http://localhost:4500/auth/showquestion')
            .then((response) => {
                const data = response.data
                setDatas(data)
            })
            .catch((error) => {
                console.log(error)
            })
  },[])
  return (
    <div className='text-black'>
        <Question Question='hello' />
    </div>
  )
}

export default Read