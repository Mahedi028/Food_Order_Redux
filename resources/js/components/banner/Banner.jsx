import React, { Fragment } from 'react'
import classes from './banner.module.css'
import deal1 from '../../assets/deals/deal1.png'
const Banner = () => {
  return (
    <Fragment>
        <div className={classes.banner__container}>
           <h2 className={classes.banner__title}>ARE YOU HUNGRY?</h2>
           <div className={classes.deals}>
                <ul>
                    <li className={classes.deals__item}>
                        <h5 className={classes.deals__item__title}>Burger</h5>
                    </li>
                    <li>
                        <h5 className={classes.deals__item__title}>Fries</h5>
                    </li>
                    <li>
                        <h5 className={classes.deals__item__title}>Coca-cola</h5>
                    </li>
                    <img
                        src={deal1}
                        width='250px'
                        height='250px'
                    />
                </ul>
                <div className={classes.deals_price}>
                    <h6>Only</h6>
                    <h2>$35.99</h2>
                </div>
                <button className={classes.deals__add}><h2 className='text-center'>+</h2></button>
           </div>
        </div>
    </Fragment>
  )
}

export default Banner
