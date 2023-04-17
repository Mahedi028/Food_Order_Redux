import React,{useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useLocation } from 'react-router-dom'
import { OrderWithSslcommerz } from '../../store/order/orderActions'

const SslcommerzPage = (props) => {

    const {id}=props.user

    const dispatch=useDispatch()
    const {redirectGatewayURL}=useSelector((state)=>state.order)
    let {cartItems}=useSelector((state)=>state.cart)
    const location=useLocation()
    const {name,email,phone,address,post_code,division_id,district_id,state_id}=location.state.checkout

    const cartTotal=cartItems.reduce((sum,curr)=>sum+parseInt(curr.total_price),0)

    useEffect(() => {
        dispatch(OrderWithSslcommerz({
            user_id:id,
            name,
            email,
            phone,
            address,
            post_code,
            division_id,
            district_id,
            state_id,
            total_amount:cartTotal
        }))

    }, [props.user,location.state])

    if(redirectGatewayURL){
        window.location.replace(redirectGatewayURL);
    }else{
        return (
            <div>SslComrzPage</div>
          )
    }
}

export default SslcommerzPage
