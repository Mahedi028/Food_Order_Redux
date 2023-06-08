import React, { Fragment } from 'react'
import classes from './serviceboard.module.css'
import meals1 from '../../assets/board/meals1.jpg'
import deli from '../../assets/board/deliveri.jpg'
import { Col, Container, Row } from 'react-bootstrap'
const ServiceBoard = () => {
  return (
    <Fragment>
        <Col  className='d-flex flex-column justify-content-center align-items-center'>
            <Row className='mb-2'>
                <h2 className={classes.service__main__title}>HOW TO GET YOUR FAVOURITE MEALS</h2>
            </Row>
            <Row>
            <Col lg={4} md={4} sm={12}>
                <div className={classes.service__container}>
                    <div className={classes.service__image__container}>
                        <img
                        className={classes.service__image}
                        src={meals1}
                        />
                        </div>
                <div className={classes.service__title}>
                    <h4>ORDER YOUR FOOD</h4>
                </div>
                <div className={classes.service__details}>
                    <p>Order your favorite dishes with just a few clicks and savor the deliciousness delivered straight to your doorstep!</p></div>
                </div>
            </Col>
            <Col lg={4} md={4} sm={12}>
            <div className={classes.service__container}>
                <div className={classes.service__image__container}>
                <img
                    className={classes.service__image}
                    src={deli}
                />
                </div>
                <div className={classes.service__title}>
                    <h4>FAST DELIVERY</h4>
                </div>
                <div className={classes.service__details}>
                    <p>Time is money, and fast delivery saves both</p>
                </div>
            </div>
            </Col>
            <Col lg={4} md={4} sm={12}>
            <div className={classes.service__container}>
                <div className={classes.service__image__container}>
                <img
                    className={classes.service__image}
                    src={meals1}
                />
                </div>
                <div className={classes.service__title}>
                    <h4>ENJOY YOUR MEAL</h4>
                </div>
                <div className={classes.service__details}>
                    <p>Bon appétit! Indulge in a mouthwatering culinary experience and savor every delicious bite of your meal!</p>
                </div>
            </div>
            </Col>
            </Row>
        </Col>
    </Fragment>
  )
}

export default ServiceBoard
