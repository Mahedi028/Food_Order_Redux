import React,{useEffect, Fragment} from 'react'
import classes from './cartItem.module.css'
import food1 from '../../assets/menus/Burgers/burger-01.jpg'
import {AiFillDelete,AiFillMinusCircle} from 'react-icons/ai'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import CartButton from '../UI/button/cartbutton/CartButton'
import { useDispatch, useSelector} from 'react-redux'
import cogoToast from 'cogo-toast'
import {ImCross} from 'react-icons/im'
import { removeCartItem } from '../../store/cart/cartActions'
const CartItem = (props) => {



    const dispatch=useDispatch()

    let {deleteSuccess}=useSelector((state)=>state.cart)

    const {id,menu_image,menu_name,quantity,unit_price,total_price}=props.cart

    if(deleteSuccess===true){
        cogoToast.warn("Menu Cart Deleted")
    }

    useEffect(()=>{
        //send to backend
    },[props.cart, dispatch])


  return (
        <div className={classes.cart_container}>
            <div className={classes.cart_content}>
                <img
                    src={menu_image}
                    />
                        <div className={classes.cart_details}>
                            <h4 className={classes.cart__title}>{menu_name}</h4>
                            <h5>${quantity}x{unit_price}</h5>
                            <h5>${total_price}</h5>
                        </div>
                        <div className={classes.cart_actions}>
                            <CartButton
                                type='button'
                                onClick={()=>dispatch(removeCartItem({id}))}
                            >
                                {/* <span> */}
                                    {/* <AiFillDelete className={classes.cart__action__icon}/> */}
                                    <ImCross className={classes.cart__action__icon}/>
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
