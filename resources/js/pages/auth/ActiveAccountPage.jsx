import axios from 'axios'
import cogoToast from 'cogo-toast'
import React, { useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AppUrl from '../../api/AppUrl'

const ActiveAccountPage = () => {
    //define navigate
    const navigate=useNavigate()
    //get token form url
    const {token}=useParams()
    //define state
    const [activeAccountStatus, SetActiveAccountStatus]=useState(false)
    const [message,setMessage]=useState("")


    useEffect(() => {
        // define url
        const url=AppUrl.ActiveAccount(token)

        console.log("[url]",url)

        axios.get(url)
        .then((response)=>{
            let StatusCode=response.status;
            if(StatusCode===200){
                console.log("[response]",response.data)
                //change active activation status
                SetActiveAccountStatus(response.data.account_active_status);
                setMessage(response.data.message)
            }
        })
        .catch(({response},error)=>{
            console.log("[error]",error)
        })
    }, [token])

    //after login redirection
    if(activeAccountStatus===true){
        console.log("[active-account]",activeAccountStatus)

        //define config
        const config={
            // Headers:{'Content-type':'multipart/form-data'}
            Headers:{
                'Content-type':'application/json',
                'Accept':'application/json'
            }
        }
        //url
        const url=AppUrl.UpdateToken(token)

        console.log("[update-token-url]",url)

        axios.put(url,config)
        .then((response)=>{
            let StatusCode=response.status;
            if(StatusCode===200){
                cogoToast.success(response.data.message);
                console.log("[response-update]",response.data)
            }
            return navigate('/login')
        })
        .catch(({response},error)=>{
            console.log("error",error)
        })
    }else{
        console.log("[active-account]",activeAccountStatus)
        return (
            <div>
                <h2>{message}</h2>
            </div>
          )
    }
}

export default ActiveAccountPage
