import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { googleLoginCallback } from '../../../store/auth/authActions'

const GoogleCallback = () => {

    const {user,token}=useSelector((state)=>state.auth);


    const dispatch=useDispatch()
    const location=useLocation()
    const navigate=useNavigate()

    const callback_url=location.search

    useEffect(() => {
        dispatch(googleLoginCallback({callback_url}))
    }, [dispatch])

    if(user && token){
        //set token in localStorage
        localStorage.setItem("token",token)
        return navigate('/profile')
    }else{
        return (
            <div>GoogleCallback</div>
          )
    }
}

export default GoogleCallback
