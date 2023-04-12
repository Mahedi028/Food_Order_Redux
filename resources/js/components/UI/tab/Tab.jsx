import React, { useState } from 'react';
import classes from './tab.module.css';
import img1 from '../../../assets/categories/burger.png'
import { useSelector } from 'react-redux';
import MenuCard from '../../menu/MenuCard';
function CustomTab({ title, active, onClick, children, img }) {



  return (
    <div
      className={`tab ${active ? 'active' : ''}`}
      onClick={onClick}
    >
    <div className={classes.tab__header}>
        <img
            src={img}
            className={classes.cate__image}
        />
      <h2>{title}</h2>
    </div>
      {active && children}
    </div>
  );
}

function Tab() {

    const categories=useSelector((state)=>state.category.categories)






    const [activeTab, setActiveTab] = useState(1);


  return (
    <div className={classes.tab__container}>
      <div className={classes.tab__list}>

      {/* tab header */}
        {categories.map((category) => (
          <CustomTab
            key={parseInt(category.id)}
            title={category.name}
            img={category.category_thumbnail}
            active={activeTab === parseInt(category.id)}
            onClick={() => setActiveTab(parseInt(category.id))}
          />
        ))}
      </div>

      {/* tab content  */}
      <div className={classes.tab__content}>
        {
            categories.map((category) =>  { return (
            activeTab === parseInt(category.id) && (
              <div key={parseInt(category.id)} className={classes.content}>
              {
                category?.menus?.map((menu)=><MenuCard menu={menu}/>)
              }
              </div>
            )
          )})
        }
      </div>
    </div>
  );
}

export default Tab;
