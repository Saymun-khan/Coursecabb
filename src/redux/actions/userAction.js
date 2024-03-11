import { ActionTypes } from "../constants/userTypes"
export const loginStart = (userCredential) => {
    return {
        type:ActionTypes.LOGIN_START,
        payload:userCredential
    }
}

export const loginSuccess = (user) => {
    return {
        type:ActionTypes.LOGIN_SUCCESS,
        payload:user
    }
}

export const loginFailure = (error) => {
    return {
        type:ActionTypes.LOGIN_FAILURE,
        payload:error
    }
}

export const examStart = (data) => {
    return{
        type:ActionTypes.EXAM_START,
        payload:data
    }
}