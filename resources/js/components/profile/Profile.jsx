import React from 'react'
import classes from './profile.module.css'
import { Col, Row} from 'react-bootstrap'
import user from '../../assets/logo/088.jpg'
import FormInput from '../UI/forminput/FormInput'
import { Routes, Route, Link} from 'react-router-dom'
import EditProfilePage from '../../pages/user/EditProfilePage'
import ChangePasswordPage from '../../pages/user/ChangePasswordPage'
import UserOrderPage from '../../pages/user/UserOrderPage'

const Profile = () => {
  return (
    <div className={classes.profile__container}>
        <Row>
            <Col lg={3} md={3} sm={12}>
                <div className={classes.user__details}>
                    <img
                        src={user}
                        className={classes.user__image}
                    />
                    <div className={classes.user__details__item}>
                        <Link to='edit' className='text-decoration-none'><h6>Profile</h6></Link>
                    </div>
                    <div className={classes.user__details__item}>
                        <Link to='change-password' className='text-decoration-none'><h6>Change Password</h6></Link>
                    </div>
                    <div className={classes.user__details__item}>
                        <Link to='user/orders' className='text-decoration-none'><h6> My Orders</h6></Link>
                    </div>
                </div>
            </Col>
            <Col lg={9} md={9} sm={12}>
            <div className={classes.user__details__content}>
                {
                    <Routes>
                        <Route path='/edit' element={<EditProfilePage/>}/>
                        <Route path='/change-password' element={<ChangePasswordPage/>}/>
                        <Route path='/user/orders' element={<UserOrderPage/>}/>
                    </Routes>
                }
                
            </div>
            </Col>
        </Row>
    </div>
  )
}

export default Profile
