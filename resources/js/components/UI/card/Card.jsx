import React from 'react'
import classes from './card.module.css'
import food1 from '../../../assets/food/Food-Name-5545.jpg'
import {AiFillStar} from 'react-icons/ai'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {addToCart} from '../../../store/cart/cartActions'
import cogoToast from 'cogo-toast'
const Card = (props) => {


    const dispatch=useDispatch()
    let {cartItems,quantity,pageRefreshStatus,success,deleteSuccess}=useSelector((state)=>state.cart)

    const {email}=useSelector((state)=>state.user.userData || {})

    const {id,title,description,price,discount_price,meal_thumbnail}=props.menu
    // console.log('card',props.menu)
    useEffect(()=>{

    },[props.menu])

    if(success===true){
        cogoToast.success("Menu Add to Cart successfully")
    }



  return (
    <div className={classes.card_container}>
            <div className={classes.card}>
                <div className={classes.card_body}>
                    <Link to={`foods/${id}`} className={{textDecoration:'none'}}>
                    <img
                        src={meal_thumbnail}
                    />
                    </Link>
                </div>
                <div className={classes.card_footer}>
                    <div className={classes.footer_content}>
                        <div className={classes.footer_content_item}>
                            <h5 className={classes.footer_title}>{title}</h5>
                        </div>
                        <div className={classes.footer_content_item}>
                            <h5 className={classes.footer_title}><span><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span></h5>
                            <p>${price}</p>
                        </div>
                        <div className={classes.footer_content_item}>
                            <button
                                className={classes.card_button}
                                onClick={()=>dispatch(addToCart({id,email,quantity:1}))}
                            ><span></span>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
}

export default Card
