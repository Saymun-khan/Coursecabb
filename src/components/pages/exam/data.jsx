import { useEffect, useState } from "react"

const Data = () => {
const [second,setSecond] = useState(0)
const [minute,setMinute] = useState(0)

useEffect(() => {
    let interval = setInterval(() => {
        setSecond(second+1)
        if(second >= 59){
            setMinute(minute + 1)
            setSecond(0)
        }
    },1000)
    return () => clearInterval(interval)
    
})
  return (
    <h1 className="text-2xl font-bold text-center -mt-6 mb-6"><span>{minute < 10 ? "0"+minute : minute}</span>:<span>{second < 10 ? "0"+second : second}</span></h1>
  )
}

export default Data