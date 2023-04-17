import React,{useEffect} from 'react'
import classes from './navbar.module.css'
import {BsCartFill} from 'react-icons/bs'
import {FaUserAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartButton from '../button/cartbutton/CartButton'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../store/user/userSlice'
import { countCartItem } from '../../../store/cart/cartActions'
const NavBar = (props) => {

    const dispatch=useDispatch()

    let {cartLength, success}=useSelector((state)=>state.cart)

    const user=props.user

    const {email}=user

    useEffect(() => {
        email?dispatch(countCartItem({email})):null
    }, [props.user, dispatch])

    const PageRefresh=()=>{
        if(success===true){
            let refresh=window.location.reload()
            return refresh
        }
    }

    //condition rendering
    let button=""
    if(localStorage.getItem("token") && user){
        button=(
            <ul className={classes.nav__menu__right}>
            <li className={classes.nav__menu__item}>
                <Link to='/cart' className={classes.nav__link}>
                    <CartButton className='d-flex justify-content-center align-items-center'>
                        <BsCartFill className={classes.nav__menu__icon}></BsCartFill>
                        <h4><sup>{cartLength}</sup></h4>
                    </CartButton>
                </Link>
            </li>
            <li className={classes.nav__menu__item}>
                <Link to='/profile' className={classes.nav__link}>
                    <FaUserAlt className={classes.nav__menu__icon}/>
                </Link>
            </li>
            <li className={classes.nav__menu__item}>
                <Link to='/login' className={classes.nav__link}>
                    <CartButton
                        onClick={()=>dispatch(logout())}
                    >Logout</CartButton>
                </Link>
            </li>
        </ul>
        )
    }else{
        button=(
            <ul className={classes.nav__menu__right}>
                <li className={classes.nav__menu__item}>
                    <Link to='/login' className={classes.nav__link}>
                        <h6>LOGIN</h6>
                    </Link>
                </li>
                <li className={classes.nav__menu__item}>
                    <Link to='/register' className={classes.nav__link}>
                        <h6>REGISTER</h6>
                    </Link>
                </li>
            </ul>
        )
    }

  return (
    <nav>
        <ul className={classes.nav__menu__left}>
            <li className={classes.nav__menu__item}>logo</li>
        </ul>
        <ul className={classes.nav__menu__middle}>
            <li className={classes.nav__menu__item}>
                <Link to='/' className={classes.nav__link}>
                    <h6>MENU</h6>
                </Link>
            </li>
            <li className={classes.nav__menu__item}>
                <Link to='/' className={classes.nav__link}>
                    <h6>CONTACT</h6>
                </Link>
            </li>
            <li className={classes.nav__menu__item}>
                <Link to='/' className={classes.nav__link}>
                    <h6>ABOUT US</h6>
                </Link>
            </li>
        </ul>
        {button}
        {PageRefresh()}
    </nav>
  )
}

export default NavBar
