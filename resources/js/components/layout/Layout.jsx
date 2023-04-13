import React, { Fragment, useEffect} from 'react'
import AppRoute from '../../route/AppRoute'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import '../../styles/home.css'
import back1 from '../../assets/background/back1.png'
import classes from './layout.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../store/user/userActions'
const Layout = () => {

    const user=useSelector((state)=>state.user.userData || {})

    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    }, [])



  return (
    <Fragment>
        <Header user={user}/>
            <div className='position-relative'>
                <img src={back1} className={classes.layout__image}/>
                <AppRoute user={user}/>
            </div>
        <Footer/>
    </Fragment>
  )
}

export default Layout
