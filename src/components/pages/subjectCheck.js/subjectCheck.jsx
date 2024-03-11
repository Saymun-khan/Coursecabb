import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { subData } from '../../js/DummyData'
import Checkbox from '../dashboardPages/checkbox'

const SubjectCheck = () => {
    const chekArray = []
    const [data,setData] = useState([])
    const handleChange = (e) => {
        const {value,checked} = e.target
        console.log(`${value} is ${checked}`)
        if(checked){
            chekArray.push(value)
            console.log(chekArray)
        }
        
    }
    useEffect(() => {
        Axios.get('http://localhost:5000/read')
        .then((response) => {
            let data = response.data
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])
    
    const handbutton = () => {
        
    }
    
  return (
    <div className='w-11/12 h-auto bg-green-200 shadow-2xl border-gray-300 border-dotted  rounded-md p-4 m-2'>
        <div className='grid grid-cols-2 justify-center ml-16'>
            <div>
                <div>
                    {<Checkbox Text={subData.SubjectName[0]} />}
                </div>
                <div className='ml-6'>
                        {subData.ChapterName.map((data) => <Checkbox Text={data} OnChange={handleChange} />)}
                </div>
            </div>
            <div>
                <div>
                    {<Checkbox Text={subData.SubjectName[1]} />}
                </div>
                <div className='ml-6'>
                        {subData.ChapterName.map((data) => <Checkbox Text={data} />)}
                </div>
            </div>
        </div>
        <div>
            <h1>{data.map((datas) => datas.name)}</h1>
        </div>
        <button onClick={handbutton}>hello</button>
    </div>
  )
}

export default SubjectCheck