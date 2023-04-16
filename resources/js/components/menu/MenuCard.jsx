import React, { Fragment } from 'react'
import classes from './menucard.module.css'
import burger from '../../assets/menus/Burgers/burger-01.jpg'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart } from '../../store/cart/cartActions'
import cogoToast from 'cogo-toast'
const MenuCard = (props) => {

    const dispatch=useDispatch()

    let {success}=useSelector((state)=>state.cart)
    const {email}=useSelector((state)=>state.user.userData || {})
    const {id,title,price,description,discount_price,meal_thumbnail}=props.menu

    useEffect(() => {

    }, [props.menu])


     if(success===true){
        cogoToast.success("Menu Add to Cart successfully")
    }

  return (
    <Fragment>
            <div className={classes.menu__card__container} key={id}>
                <Link to={`/menu/${id}`} className='text-decoration-none'>
                    <img
                        src={meal_thumbnail}
                        className={classes.menu__card__image}
                    />
                </Link>
                <div className={classes.menu__card__content}>
                    <h4 className={classes.menu__card__title}>{title}</h4>
                    <p className={classes.menu__card__price}>${price}</p>
                    <button
                        className={classes.menu__card__button}
                        onClick={()=>dispatch(addToCart({id,email,quantity:1}))}
                    >ADD TO CART</button>
                </div>
            </div>
    </Fragment>

  )
}

export default MenuCard
