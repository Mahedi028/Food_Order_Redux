import React from 'react'
import classes from './cartItem.module.css'
import food1 from '../../assets/menus/Burgers/burger-01.jpg'
import {AiFillDelete,AiFillMinusCircle} from 'react-icons/ai'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import { useEffect } from 'react'
import CartButton from '../UI/button/cartbutton/CartButton'
// import { useDispatch, useSelector} from 'react-redux'
// import { removeItemFromCart } from '../../store/cart/cartSlice'
// import { addToCart, removeCartItem } from '../../store/cart/cartActions'
// import cogoToast from 'cogo-toast'
const CartItem = (props) => {

    // const dispatch=useDispatch()

    // const {email}=useSelector((state)=>state.user.userData || {})


    // console.log('cart',props.cart)
    // const {menu_name,id,quantity,unit_price,menu_image}=props.cart

    // if(props.status===true){
    //     cogoToast.warn("Menu Cart Deleted")
    // }

    // useEffect(()=>{
    //     //send to backend
    // },[props.cart,dispatch])


  return (
    <div className={classes.cart_container}>
        <div className={classes.cart_content}>
        <img
            src={food1}
        />
        <div className={classes.cart_details}>
            <h4>burger</h4>
            <h5>$3x300</h5>
            <h5>$900</h5>
        </div>
        <div className={classes.cart_actions}>
            <CartButton
                type='button'
                // onClick={()=>dispatch(removeCartItem({id}))}
            >
                {/* <span> */}
                    <AiFillDelete className={classes.cart__action__icon}/>
                {/* </span> */}
            </CartButton>
            {/* <button><span><BsFillPlusCircleFill/></span></button> */}
            {/* <button><span><AiFillMinusCircle/></span></button> */}
        </div>
        </div>
    </div>
  )
}

export default CartItem
