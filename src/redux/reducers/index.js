import { combineReducers } from "redux"
import { examReducer, userReducer } from '../reducers/userReducer'

const reducers = combineReducers({
    user:userReducer,
    exam:examReducer
})

export default reducers