
import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const protectedRoute = ({children}) => {
    const token = cookies.get('token')
    return token ? children : <Navigate replace to='/signin' />
}

export default protectedRoute