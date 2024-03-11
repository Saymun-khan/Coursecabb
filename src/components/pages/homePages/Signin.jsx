import Axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import { loginFailure, loginStart, loginSuccess } from '../../../redux/actions/userAction'
import AuthHeader from './AuthHeader'
import AuthText from './AuthText'
import Input from './Input'

const Signin = () => {
  const data = useSelector((state) => state)
  const dispatch = useDispatch()
  console.log(data)

  const initLogIn = {
    mobile:'',
    password:''
  }

  const cookies = new Cookies()
  const [value,setValue] = useState({...initLogIn})
  const [errors,setErrors] = useState({...initLogIn})
  const [msg,setMsg] = useState('')
  const [login,setLogin] = useState(false)
  const clickHandler = (e) => {
    setValue((prev) => ({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }

  //find data
  /*const find = () => {
    Axios.post('http://localhost:5000/auth/getuser',value.mobile)
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })
  }*/
  //post request handle
const signin = () => {
  const data = {
    mobile:value.mobile,
    password:value.password
  }
  dispatch(loginStart())
  
  Axios.post('http://localhost:5000/auth/login',data)
  .then((result) => {
    setLogin(true)
    dispatch(loginSuccess(result.data))
    
       // set the cookie
       cookies.set("token", result.data.token, {
        path: "/",
      });
      console.log('this is',result)
      
        // redirect user to the auth page
  
    
  })
  .catch((error) => {
    dispatch(loginFailure(error))
    error = new Error
    console.log('form not find')
  })
}

    // redirect user to the auth page
    //window.location.href = "/signup";
    /*localStorage.setItem('token',data.mobile)
    window.location = '/dashboard'*/
  //handle click submit function 
  const handleSubmit = (e) =>{
    e.preventDefault()
    const {errors,isValid} = checkValidity(value)
    if(isValid){
      setErrors('')
      signin()
      console.log(value)
      setMsg('')

    }else{
      setErrors({...errors})
      setMsg('Please fill all required field')
    }
  }

  //handle errors function
  const checkValidity = (value) => {
    const errors = {}
    const {mobile,password} = value
    if(!mobile){
      errors.mobile = 'Invalid mobile'
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
      <AuthHeader AuthHeader="Sign in to your account" />
      {login ? <h1>Logged in succesfully</h1> : <h1>{msg}</h1>}
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <Input 
          Label='mobile' 
          Type='number' 
          Placeholder="Enter your mobile number" 
          Value={value.mobile}
          clickHandler={clickHandler}
          Name='mobile'
          Errors={errors.mobile}
        />
        <Input 
          Label='Password' 
          Type='password' 
          Placeholder="Enter your password"
          Value={value.password} 
          clickHandler={clickHandler}
          Name='password'
          Errors={errors.password}
        />
      </form>
       
          <div className=''>
          <button onClick={handleSubmit} className='w-36 h-8 border-r-2 bg-red-700 text-slate-300 text-xl font-semibold mb-1'><Link to='/dashboard'>submit</Link></button>

        {/* signup route */}
        <AuthText AuthText="Forgot your password" />
        <Link to='/Signup'>
        <AuthText AuthText="Don't have any account?please sign up..." />
        </Link>
          </div>
      </div>
    </div>
  </>
  )
}

export default Signin