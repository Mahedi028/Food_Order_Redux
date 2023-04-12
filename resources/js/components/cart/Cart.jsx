import React, { Fragment } from 'react'
import { Row, Col} from 'react-bootstrap'
import classes from './cart.module.css'
import CartButton from '../UI/button/cartbutton/CartButton'
import img from '../../assets/menus/Burgers/burger-04.jpg'
import {AiFillDelete} from 'react-icons/ai'
import FormSelect from '../UI/formselect/FormSelect'
import {SelectOptions} from '../UI/formselect/FormSelect'
import FormInput from '../UI/forminput/FormInput'
import { Link } from 'react-router-dom'
const Cart = () => {
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
                                <th>Menu Name</th>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           <tr>
                                <td>Burger</td>
                                <td>
                                    <img
                                        src={img}
                                        className={classes.cart__image}
                                    />
                                </td>
                                <td>
                                    <FormSelect
                                        name="state_id"
                                        label="State"
                                        className='mb-1'
                                        // onChange={handleInputChange}
                                        // errorMessage={validationErrors.district}
                                    >
                                    <SelectOptions value="1" option_name="1"/>
                                    <SelectOptions value="2" option_name="2"/>
                                    <SelectOptions value="3" option_name="3"/>
                                    <SelectOptions value="4" option_name="4"/>
                                    </FormSelect>
                                </td>
                                <td>$32.99</td>
                                <td>
                                    <CartButton>
                                        <AiFillDelete className={classes.cart__action}/>
                                    </CartButton>
                                </td>
                           </tr>
                           <tr>
                                <td>Burger</td>
                                <td>
                                    <img
                                        src={img}
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
                                    <SelectOptions value="1" option_name="1"/>
                                    <SelectOptions value="2" option_name="2"/>
                                    <SelectOptions value="3" option_name="3"/>
                                    <SelectOptions value="4" option_name="4"/>
                                    </FormSelect>
                                </td>
                                <td>$32.99</td>
                                <td>
                                    <CartButton>
                                        <AiFillDelete className={classes.cart__action}/>
                                    </CartButton>
                                </td>
                           </tr>
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
    </Fragment>
  )
}

export default Cart
