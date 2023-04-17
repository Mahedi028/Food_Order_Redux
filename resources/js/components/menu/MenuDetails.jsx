import React, { Fragment,useEffect, useState}from 'react'
import {Col, Row} from 'react-bootstrap'
import classes from './menudetails.module.css'
import FormSelect, { SelectOptions } from '../UI/formselect/FormSelect'
import CartButton from '../UI/button/cartbutton/CartButton'
import CartItem from '../cart/CartItem'
import Bedge from '../UI/bedge/Bedge'
import { fetchCartItems, addToCart } from '../../store/cart/cartActions'
import { useDispatch,useSelector } from 'react-redux'
import cogoToast from 'cogo-toast'
import { Link } from 'react-router-dom'
const MenuDetails = (props) => {

    const [quantity,setQuantity]=useState(1)

    const dispatch=useDispatch()

    const {email}=useSelector((state)=>state.user.userData || {})
    let {cartItems,pageRefreshStatus,success,deleteSuccess}=useSelector((state)=>state.cart)


    const{id,title,discount_price,price,meal_thumbnail,meal_img1,meal_img2,meal_img3,active,in_stock,ingredients,dietary_info}=props.menuDetails

    const allIngredients= typeof ingredients === 'string' ? ingredients.split(",") : '';
    const allDietaryInfos= typeof dietary_info === 'string' ? dietary_info.split(",") : '';

    const PageRefresh=()=>{
        if(success===true || deleteSuccess===true){
            let refresh=window.location.reload()
            return refresh
        }
    }

    const handleInputChange=(e)=>{
        setQuantity(e.target.value)
    }

    if(success===true){
        cogoToast.success("Menu Add to Cart successfully")
    }



    useEffect(() => {
        dispatch(fetchCartItems({email}))
    }, [props.menuDetails, dispatch])




  return (
    <Fragment>
        <div className="d-flex justify-content-center align-items-center">
            <h2 className={classes.menu__hero__title}>{title}</h2>
            <p className={classes.menu__hero__description}>MENU CATEGOR</p>
        </div>
        <div className={classes.menu__details__container}>
            <Row>
                <Col lg={5} md={5} sm={12} className={classes.sub__image__container}>
                    <img
                        src={meal_thumbnail}
                        className={classes.main__image}
                    />
                    <Row>
                        <Col lg={4} md={4} sm={12}>
                            <img
                                src={meal_img1}
                                className={classes.sub__image1}
                            />
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <img
                                src={meal_img2}
                                className={classes.sub__image2}
                            />
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <img
                                src={meal_img3}
                                className={classes.sub__image3}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} md={3} sm={12} className=''>
                    <div className={classes.menu__details__des}>
                        <h2 className='text-center mt-3'>{title}</h2>
                        <h6 className='text-center mt-3'>Price ${price}</h6>
                    </div>
                    <div className='d-flex flex-column'>
                        <FormSelect
                             name="division_id"
                             label="Division"
                             className='mb-1'
                             onChange={handleInputChange}
                            //  errorMessage={validationErrors.division}
                        >
                            <SelectOptions value="1" option_name="1"/>
                            <SelectOptions value="2" option_name="2"/>
                            <SelectOptions value="3" option_name="3"/>
                        </FormSelect>
                        <CartButton
                            onClick={()=>dispatch(addToCart({id,email,quantity}))}
                        >
                            ADD TO CART
                        </CartButton>
                    </div>
                    <hr/>
                    <div className="mt-2">
                        <h4>Ingredients</h4>
                       {
                        allIngredients && allIngredients.length > 0 ?
                        allIngredients.map(text=><Bedge text={text} backgroundColor="crimson" color="white"/>):null
                       }
                       <hr/>
                       <h4>Dietary Info</h4>
                       {
                        allDietaryInfos && allDietaryInfos.length > 0 ?
                        allDietaryInfos.map(text=><Bedge text={text} backgroundColor="crimson" color="white"/>):null
                       }
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                <h2 className='text-center'>CART ITEMS</h2>
                    {
                        cartItems?cartItems && cartItems.length>0 &&cartItems.map((cartItem)=>{
                            return <CartItem cart={cartItem}/>
                        }):(
                            <div>
                                <h2>No Items in Cart Keep Shopping</h2>
                            </div>
                        )
                    }
                    <div className={classes.cart_actions}>
                        <Link to='/cart'>
                            <CartButton>
                                View Cart
                            </CartButton>
                        </Link>
                        <Link to='/checkout'>
                            <CartButton>
                                Checkout
                            </CartButton>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
        {PageRefresh()}
    </Fragment>
  )
}

export default MenuDetails
