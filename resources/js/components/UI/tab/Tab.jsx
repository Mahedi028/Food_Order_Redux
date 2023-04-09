
import React, { useState } from 'react';
import classes from './tab.module.css';
import img1 from '../../../assets/categories/burger.png'
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
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    {
      id: 1,
      img:img1,
      title: 'burger',
      content: <p>Content for Tab 1</p>,
    },
    {
      id: 2,
      img:img1,
      title: 'Tab 2',
      content: <p>Content for Tab 2</p>,
    },
    {
      id: 3,
      img:img1,
      title: 'Tab 3',
      content: <p>Content for Tab 3</p>,
    },
  ];

  return (
    <div className={classes.tab__container}>
      <div className={classes.tab__list}>
        {tabs.map((tab) => (
          <CustomTab
            key={tab.id}
            title={tab.title}
            img={tab.img}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
      <div className={classes.tab__content}>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className={classes.content}>
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Tab;
