import React from 'react'
import classes from './navbar.module.css'
import {BsCartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const NavBar = () => {
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
        <ul className={classes.nav__menu__right}>
            <li className={classes.nav__menu__item}>
                <Link to='/cart' className={classes.nav__link}>
                    <BsCartFill className={classes.nav__menu__icon}/>
                </Link>
            </li>
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
    </nav>
  )
}

export default NavBar
