import React from 'react'
import { Fragment } from 'react'
import classes from './relatedmenus.module.css'
import MenuCard from '../menu/MenuCard'
const RelatedMenus = () => {
  return (
    <Fragment>
        <div className={classes.menu__container}>
            <h2 className='p-1'>Related Menus</h2>
            <div className={classes.menu__content}>
            <MenuCard/>
            <MenuCard/>
            <MenuCard/>
            <MenuCard/>
            </div>
        </div>
    </Fragment>
  )
}

export default RelatedMenus
