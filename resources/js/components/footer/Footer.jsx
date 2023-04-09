import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import classes from './footer.module.css'
import {BiTimeFive} from 'react-icons/bi'
import logo from '../../assets/logo/logo.png'
import {ImLocation2} from 'react-icons/im'
import { Link } from 'react-router-dom'
import {BsFacebook,BsYoutube} from 'react-icons/bs'
import {AiFillInstagram,AiFillMail} from 'react-icons/ai'
import {FaMobileAlt} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='mt-2'>
    <Container>
        <Row className='pt-3'>
            <Col lg={3} md={3} sm={12}>
                <h6 className={classes.footer__title}>Address</h6>
                <div className={classes.footer__item}>
                   <img
                        src={logo}
                        className={classes.footer__logo}
                   />
                   <p><ImLocation2 className='fs-1'/>California, street-1230</p>
                   <div className={classes.social__information}>
                        <Link to='/facebook' className='fs-1'><BsFacebook/></Link>
                        <Link to='/instagram' className='fs-1'><AiFillInstagram/></Link>
                        <Link to='/youtube' className='fs-1'><BsYoutube/></Link>
                   </div>
                </div>
            </Col>
            <Col lg={3} md={3} sm={12}>
                <h6 className={classes.footer__title}>Information</h6>
                <div className={classes.footer__item}>
                    <Link className='text-decoration-none'><p>About us</p></Link>
                    <Link className='text-decoration-none'><p>Refund Policy</p></Link>
                    <Link className='text-decoration-none'><p>Privacy Policy</p></Link>
                </div>
            </Col>
            <Col lg={3} md={3} sm={12}>
                <h6 className={classes.footer__title}>Opening hours</h6>
                <div className={classes.footer__item}>
                    <p><BiTimeFive className='fs-1'/> Saturday:9.00am-10:pm</p>
                    <p><BiTimeFive className='fs-1'/> Sunday:9.00am-10:pm</p>
                    <p><BiTimeFive className='fs-1'/> Monday:9.00am-10:pm</p>
                    <p><BiTimeFive className='fs-1'/> Tuesday:9.00am-10:pm</p>
                    <p><BiTimeFive className='fs-1'/> Wednesday:9.00am-10:pm</p>
                </div>
            </Col>
            <Col lg={3} md={3} sm={12}>
                <h6 className={classes.footer__title}>Customer care</h6>
                <div className={classes.footer__item}>
                    <p><FaMobileAlt className='fs-1'/> +(880)1309191185</p>
                    <p><AiFillMail className='fs-1'/> support@gmail.com</p>
                </div>
            </Col>
        </Row>
    </Container>
    </footer>
  )
}

export default Footer
