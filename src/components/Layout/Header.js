import React from 'react'
import classes from './Header.module.css'
import headerImg from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={headerImg} alt="Table full of delicius food!" />
      </div>
    </React.Fragment>
  );
};

export default Header