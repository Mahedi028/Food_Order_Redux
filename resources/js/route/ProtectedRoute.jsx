import React from 'react';
import cogoToast from 'cogo-toast';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({children}) => {


    if(localStorage.getItem("token")){
        return children
    }else{
        cogoToast.warn("Login First")
        return <Navigate to="/login"/>
    }

}

export default ProtectedRoute
