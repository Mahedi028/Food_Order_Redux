import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import ForgetPasswordPage from '../pages/auth/ForgetPasswordPage'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import ResetPasswordPage from '../pages/auth/ResetPasswordPage'
import HomePage from '../pages/HomePage'
import CartPage from '../pages/user/CartPage'
import CheckoutPage from '../pages/user/CheckoutPage'
import ProfilePage from '../pages/user/ProfilePage'
import WishListPage from '../pages/user/WishListPage'
import MenuDetailsPage from '../pages/MenuDetailsPage'
import ActiveAccountPage from '../pages/auth/ActiveAccountPage'

const AppRoute = () => {
  return (
    <Fragment>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/activeaccount/:token' element={<ActiveAccountPage/>}/>
            <Route path='/forgetpassword' element={<ForgetPasswordPage/>}/>
            <Route path='/resetpassword' element={<ResetPasswordPage/>}/>


            <Route path='/profile/*' element={<ProfilePage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/wishlist' element={<WishListPage/>}/>
            <Route path='/checkout' element={<CheckoutPage/>}/>

            <Route path='/menu/:id' element={<MenuDetailsPage/>}/>
        </Routes>
    </Fragment>
  )
}

export default AppRoute
