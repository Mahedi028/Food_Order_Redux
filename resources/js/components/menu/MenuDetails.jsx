import React from 'react'
import { Fragment } from 'react'
import {Col, Row} from 'react-bootstrap'
import classes from './menudetails.module.css'
import img from '../../assets/menus/Burgers/burger-06.jpg'
import FormSelect, { SelectOptions } from '../UI/formselect/FormSelect'
import CartButton from '../UI/button/cartbutton/CartButton'
import CartItem from '../cart/CartItem'
import { useEffect } from 'react'
const MenuDetails = (props) => {

    // console.log("[menu-details]",props.menuDetails)

    const{title,discount_price,price,meal_thumbnail,meal_img1,meal_img2,meal_img3,active,in_stock,ingredients,dietary_info}=props.menuDetails

    useEffect(() => {

    }, [props.menuDetails])


  return (
    <Fragment>
        <div className="d-flex justify-content-center align-items-center">
            <h2 className={classes.menu__hero__title}>{title}</h2>
            <p className={classes.menu__hero__description}>MENU CATEGOR</p>
        </div>
        <div className={classes.menu__details__container}>
            <Row>
                <Col lg={5} md={5} sm={12} className={classes.sub__image__container}>
                    <img
                        src={meal_thumbnail}
                        className={classes.main__image}
                    />
                    <Row>
                        <Col lg={4} md={4} sm={12}>
                            <img
                                src={meal_img1}
                                className={classes.sub__image1}
                            />
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <img
                                src={meal_img2}
                                className={classes.sub__image2}
                            />
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <img
                                src={meal_img3}
                                className={classes.sub__image3}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} md={3} sm={12} className=''>
                    <div className={classes.menu__details__des}>
                        <h2 className='text-center mt-3'>{title}</h2>
                        <h6 className='text-center mt-3'>Price ${price}</h6>
                    </div>
                    <div className=''>
                        <FormSelect>
                            <SelectOptions value="1" option_name="1"/>
                            <SelectOptions value="2" option_name="2"/>
                            <SelectOptions value="3" option_name="3"/>
                        </FormSelect>
                        <CartButton>ADD TO CART</CartButton>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                <h2>Cart Itmes</h2>
                    <CartItem/>
                </Col>
            </Row>
        </div>
    </Fragment>
  )
}

export default MenuDetails
