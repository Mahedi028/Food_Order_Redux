import React, { Fragment,useEffect } from 'react'
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
import GoogleCallback from '../pages/auth/social/GoogleCallback'
import ProtectedRoute from './ProtectedRoute'

const AppRoute = (props) => {
    const user=props.user

    useEffect(() => {

    }, [props.user])

  return (
    <Fragment>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/activeaccount/:token' element={<ActiveAccountPage/>}/>
            <Route path='/forgetpassword' element={<ForgetPasswordPage/>}/>
            <Route path='/resetpassword/:token' element={<ResetPasswordPage/>}/>
            <Route path='/login/google/callback' element={<GoogleCallback/>}/>


            <Route path='/profile/*' element={
                <ProtectedRoute>
                    <ProfilePage user={user}/>
                </ProtectedRoute>
            }/>
            <Route path='/cart' element={
                <ProtectedRoute>
                    <CartPage/>
                </ProtectedRoute>
            }/>
            <Route path='/wishlist' element={
                <ProtectedRoute>
                    <WishListPage/>
                </ProtectedRoute>
            }/>
            <Route path='/checkout' element={
                <ProtectedRoute>
                    <CheckoutPage/>
                </ProtectedRoute>
            }/>

            <Route path='/menu/:id' element={<MenuDetailsPage/>}/>
        </Routes>
    </Fragment>
  )
}

export default AppRoute
