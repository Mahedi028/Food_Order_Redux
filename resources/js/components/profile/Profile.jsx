import React, {Fragment, useEffect} from 'react'
import classes from './profile.module.css'
import { Col, Row} from 'react-bootstrap'
import user from '../../assets/logo/088.jpg'
import FormInput from '../UI/forminput/FormInput'
import { Routes, Route, Link} from 'react-router-dom'
import EditProfilePage from '../../pages/user/EditProfilePage'
import ChangePasswordPage from '../../pages/user/ChangePasswordPage'
import UserOrderPage from '../../pages/user/UserOrderPage'
import { useSelector } from 'react-redux'
const Profile = (props) => {

    const {id, name, email, phone_number,profile_photo_url}=props.user

    const {pageRefreshStatus}=useSelector((state)=>state.auth)

    useEffect(() => {

    }, [props.user])

    const PageRefresh=()=>{
        if(pageRefreshStatus===true){
            let refresh=window.location.reload()
            return refresh
        }
    }


  return (
    <Fragment>
        <div className={classes.profile__container}>
        <Row>
            <Col lg={3} md={3} sm={12}>
                <div className={classes.user__details}>
                    <img
                        src={profile_photo_url?profile_photo_url:user}
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
                <h2>Welcome {name} to our food order app</h2>
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
        {PageRefresh()}
    </Fragment>

  )
}

export default Profile
