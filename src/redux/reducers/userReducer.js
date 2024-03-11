import { ActionTypes } from "../constants/userTypes";

const initialState = {
    isLoading:false,
    user:null,
    error:false
}
const initialExam = {
    subject:null
}

export const userReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case ActionTypes.LOGIN_START:
            return {
                isLoading:true,
                user:payload,
                error:false
            }
        case ActionTypes.LOGIN_SUCCESS:
            return {
                isLoading:false,
                user:payload,
                error:false
            }
        case ActionTypes.LOGIN_START:
            return {
                isLoading:false,
                user:null,
                error:payload
            }
        default:
            return state;
    }
}

export const examReducer = (state=initialExam,{type,payload}) => {
    switch (type) {
        case ActionTypes.EXAM_START:
            return{
                subject:payload
            }

    
        default:
            return state;
    }
}