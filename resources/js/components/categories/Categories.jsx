import React, { Fragment, useEffect} from 'react'
import Tab from '../UI/tab/Tab'
import classes from './categories.module.css'
import { useDispatch } from 'react-redux'
import { fetchMenuListByCategory } from '../../store/category/categoryActions'
const Categories = () => {

    const dispatch=useDispatch()


    useEffect(() => {
        dispatch(fetchMenuListByCategory())
    }, [])




  return (
    <Fragment>
        <div className={classes.categories__title}>Explore Foods</div>
        <Tab/>
    </Fragment>
  )
}

export default Categories
