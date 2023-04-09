import React from 'react'
import classes from './cartItem.module.css'
import { useEffect } from 'react'
const CartItemWithoutAction = (props) => {

    const {menu_name,id,quantity,unit_price,menu_image}=props.cart

    useEffect(() => {

    }, [props.cart])



  return (
    <div className={classes.cart_container}>
        <div className={classes.cart_content}>
        <img
            src={menu_image}
        />
        <div className={classes.cart_details}>
            <h4>{menu_name}</h4>
            <h5>${quantity}x{unit_price}</h5>
            <h5>${quantity*unit_price}</h5>
        </div>
        </div>
    </div>
  )
}

export default CartItemWithoutAction
