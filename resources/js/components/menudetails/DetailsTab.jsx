import { Fragment } from 'react'
import React, { useState } from 'react'
import classes from './detailstab.module.css'
import burger from '../../assets/categories/burger.png'
import pizza from '../../assets/menus/pizza/pizza-01.jpg'
import FormInput from '../UI/forminput/FormInput'

const DetailsTab = () => {

    const [activeTab, setActiveTab]=useState(1)

    const handleClick=(index)=>{
        setActiveTab(index)
    }



  return (
    <Fragment>
        <div className={classes.tab}>
        <div className={classes.tab__list}>
            <div
            className={`${classes.tab__list__item} ${1===activeTab ? 'active' :''}`}
            onClick={()=>handleClick(1)}
            >
                <h2>Description</h2>
            </div>
            <div
            className={`${classes.tab__list__item} ${2===activeTab ? 'active' :''}`}
            onClick={()=>handleClick(2)}
            >
                <h2>Reviews(0)</h2>
            </div>
        </div>
        <div className={classes.tab__container}>
        {activeTab === 1 && <div className={classes.tab_content}>
            <div className={classes.menu__description}>
                <h4>Description</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus repudiandae eos illum minus incidunt exercitationem, quo mollitia ducimus neque inventore earum, voluptatibus libero, vero aliquid natus. Tempore impedit voluptas cumque.</p>
            </div>
        </div>}
        {activeTab === 2 && <div className={classes.tab_content}>
            <div className={classes.review__container}>
            <h2>Reviews</h2>
            <div className={classes.review__form}>
                <form>
                    <FormInput
                        label="Name"
                        name="Name"
                        type="text"
                    />
                    <FormInput
                        label="Email"
                        name="Email"
                        type="email"
                    />
                </form>
            </div>
            </div>
        </div>}
        </div>
    </div>
    </Fragment>
  )
}

export default DetailsTab
