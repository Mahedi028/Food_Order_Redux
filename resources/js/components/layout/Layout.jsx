import React, { Fragment } from 'react'
import AppRoute from '../../route/AppRoute'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import '../../styles/home.css'
import back1 from '../../assets/background/back1.png'
import classes from './layout.module.css'
const Layout = () => {
  return (
    <Fragment>
        <Header/>
            <div className='position-relative'>
                <img src={back1} className={classes.layout__image}/>
                <AppRoute/>
            </div>
        <Footer/>
    </Fragment>
  )
}

export default Layout
