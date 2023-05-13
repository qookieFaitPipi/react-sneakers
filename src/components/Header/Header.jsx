import React from 'react'
import styles from './Header.module.scss';

import logo from './../../assets/images/logo.svg';
import cart from './../../assets/images/icons/cart.png';
import heart from './../../assets/images/icons/heart.png';
import user from './../../assets/images/icons/user.png';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeftBlock}>
          <img className={styles.headerLogo} src={logo} />
          <div className={styles.headerTitleBlock}>
            <div className={styles.headerTitle}>REACT SNEAKERS</div>
            <div className={styles.headerText}>Магазин лучших кроссовок</div>
          </div>
        </div>
        <div className={styles.headerRightBlock}>
          <div className={styles.headerIconBlock}>
            <img src={cart} width='18px' height='18px'/>
            <span>1205 руб.</span>
          </div>
          <div className={styles.headerIconBlock}>
            <img className={styles.headerIconHeart} src={heart} alt="" />
            <img className={styles.headerIconUser} src={user} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
