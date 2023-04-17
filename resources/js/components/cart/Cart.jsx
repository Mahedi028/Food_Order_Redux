import React, { Fragment, useEffect } from 'react'
import { Row, Col} from 'react-bootstrap'
import classes from './cart.module.css'
import CartButton from '../UI/button/cartbutton/CartButton'
import {AiFillDelete} from 'react-icons/ai'
import FormSelect from '../UI/formselect/FormSelect'
import {SelectOptions} from '../UI/formselect/FormSelect'
import FormInput from '../UI/forminput/FormInput'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartItems, removeCartItem } from '../../store/cart/cartActions'
import cogoToast from 'cogo-toast'
const Cart = (props) => {

    const{email}=props.user

    const dispatch=useDispatch()
    let {cartItems,quantity,pageRefreshStatus,success,deleteSuccess}=useSelector((state)=>state.cart)

    useEffect(() => {
        dispatch(fetchCartItems({email}))
    }, [props.user,dispatch])

    if(deleteSuccess===true){
        cogoToast.warn("Menu Cart Deleted")
    }

    const PageRefresh=()=>{
        if(deleteSuccess===true){
            let refresh=window.location.reload()
            return refresh
        }
    }



  return (
    <Fragment>
        <Row>
            <h2 className={classes.cart__hero__title}>YOUR SHOPPING CART</h2>
            <p className={classes.cart__hero__description}>START YOUR ORDER AND STAY WITH US</p>
        </Row>
        <div className={classes.cart__container}>
            <Row>
                <Col>
                <div className={classes.order__table__container}>
                    <table>
                        <thead>
                            <tr>
                                <th className='text-center'>Menu Name</th>
                                <th className='text-center'>Image</th>
                                <th className='text-center'>Quantity</th>
                                <th className='text-center'>Price</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {

                            cartItems?cartItems.map((cartItem)=>{
                                const {id,menu_name,menu_image,total_price}=cartItem
                                return (
                                    <tr key={id.toString()}>
                                        <td className={classes.menu__name}>{menu_name}</td>
                                        <td className='d-flex justify-content-center align-items-center'>
                                            <img
                                                src={menu_image}
                                                className={classes.cart__image}
                                            />
                                        </td>
                                        <td>
                                            <FormSelect
                                                name="quantity"
                                                label="Quantity"
                                                className='mb-1'
                                                // onChange={handleInputChange}
                                                // errorMessage={validationErrors.district}
                                            >
                                            <SelectOptions value={quantity.toString()=="1"?'selected':''} option_name="1"/>
                                            <SelectOptions value={quantity.toString()=="2"?'selected':''} option_name="2"/>
                                            <SelectOptions value={quantity.toString()=="3"?'selected':''} option_name="3"/>
                                            <SelectOptions value={quantity.toString()=="4"?'selected':''} option_name="4"/>
                                            </FormSelect>
                                        </td>
                                        <td className={classes.total__price}>${total_price}</td>
                                        <td>
                                            <CartButton
                                                onClick={()=>dispatch(removeCartItem({id}))}
                                            >
                                                <AiFillDelete className={classes.cart__action}/>
                                            </CartButton>
                                        </td>
                                    </tr>
                                )
                            }):<div><h2>No items in Cart</h2></div>
                        }
                        </tbody>
                    </table>
                </div>
                <hr/>
                <div className={classes.coupon__container}>
                    <h4>Coupon Name</h4>
                    <FormInput/>
                    <CartButton>ADD COUPON</CartButton>
                </div>
                <hr/>
                <div className="d-flex justify-content-center">
                    <Link to='/checkout'>
                        <CartButton>PROCEED TO CHECKOUT</CartButton>
                    </Link>
                </div>
                </Col>
            </Row>
        </div>
        {PageRefresh()}
    </Fragment>
  )
}

export default Cart
