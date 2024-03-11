import Axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AuthHeader from './AuthHeader'
import AuthText from './AuthText'
import Input from './Input'
const Singup = () => {
  const init = {
    name:'',
    mobile:'',
    level:'',
    password:''
  }
  const [value,setValue] = useState({...init})
  const [errors,setErrors] = useState({...init})
  const [suc,setSuc] = useState(false)
  const [signed,setSigned] = useState(false)
  const [upsign,setUpSign] = useState(false)

  const clickHandler = (e) => {
    setValue((prev) =>({
      ...prev,
      [e.target.name]:e.target.value 
    }))
   }

  const formSubmit = () =>{ 
    const userObject = {
      name:value.name,
      mobile:value.mobile,
      level:value.level,
      password:value.password
    }
    Axios.post('http://localhost:5000/auth/signup',userObject)
  .then((result) => {
    setUpSign(true)
  })
  .catch((error) => {
    error =new Error
  })
  }

/*useEffect(() => {
  Axios.get('http://localhost:3500/read')
  .then((response) => {
    setData(response.data)
  })
},[])*/

//handle errors

//handle submit
 const handleClick = (e) => {
  e.preventDefault()
  console.log("first")
  const {isValid,errors} = checkValidity(value)
  if(isValid){
    console.log(value);
    setErrors('')
    formSubmit()
    
  }else{
    setErrors({...errors})
  }
  setSigned(true)

 }

 //handle errors function 
 const checkValidity = (value) => {
  const errors = {}
  const {name,mobile,level,password} = value
  if(!name){
    errors.name = 'Invalid name'
  }
  if(!mobile){
    errors.mobile = 'Invalid mobile'
  }
  if(!level){
    errors.level = 'Invalid level'
  }
  if(!password){
    errors.password = 'Invalid password'
  }

  return{
    errors,
    isValid:Object.keys(errors).length === 0
  }
 }


  return (
    <>
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
      <AuthHeader AuthHeader="Sign up to your account" />
      {upsign ? (<h1 className='text-center text-semibold text-xl text-green-500'>Form submitted successfully</h1>) : <h1 className='text-center text-semibold text-xl text-red-500'>form not submited</h1>}
      <form className="mt-8 space-y-6" onSubmit={handleClick}>
        <Input 
          Label='Name' 
          Type='text' 
          Placeholder="Enter your name"
          clickHandler={clickHandler}
          Value={value.name}
          Name='name'
          Errors={errors.name}
        />

        <Input 
          Label='Mobile' 
          Type='number' 
          Placeholder="Enter your mobile"
          Value={value.mobile}
          Name='mobile'
          clickHandler={clickHandler}
          Errors={errors.mobile}
        />
        <Input 
          Label='Level' 
          Type='Level' 
          Placeholder="Enter your Level"
          Value={value.level}
          Name='level'
          clickHandler={clickHandler}
          Errors={errors.level}
        />
        <Input 
          Label='Password' 
          Type='password' 
          Placeholder="Enter your password"
          Value={value.password}
          Name='password'
          clickHandler={clickHandler}
          Errors={errors.password}
        />
      </form>
        <AuthText AuthText="Have you an account ? please Log in" />
          <button onClick={handleClick} className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
           <Link to='/Signin'>Signup</Link>
          </button>
      </div>
    </div>
  </>
  )
}

export default Singup