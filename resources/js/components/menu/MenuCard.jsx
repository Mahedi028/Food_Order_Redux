import React from 'react'
import classes from './menucard.module.css'
import burger from '../../assets/menus/Burgers/burger-01.jpg'
const MenuCard = () => {
  return (
    <div className={classes.menu__card__container}>
        <img
            src={burger}
            className={classes.menu__card__image}
        />
        <div className={classes.menu__card__content}>
            <h4 className={classes.menu__card__title}>Burger</h4>
            <p className={classes.menu__card__price}>$35.99</p>
            <button className={classes.menu__card__button}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default MenuCard
