import React, { Fragment } from 'react'
import Tab from '../UI/tab/Tab'
import classes from './categories.module.css'
const Categories = () => {
  return (
    <Fragment>
    <div className={classes.categories__title}>Explore Foods</div>
        <Tab/>
    </Fragment>
  )
}

export default Categories
