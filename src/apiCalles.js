import axios from "axios";
export const loginCall = async (userCredentials,dispatch) => {
    try {
        const res = await axios.post("http://localhost:5000/auth/login",userCredentials)
        dispatch({type:"LOGIN_SUCCESS",payload:res.data})
    } catch (error) {
        dispatch({type:"LOGIN_FAILURE",payload:error})
    }
}
