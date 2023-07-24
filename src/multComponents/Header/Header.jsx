import React from 'react'
import styles from './Header.module.scss';

import { Link } from 'react-router-dom';

import logo from './../../assets/images/logo.svg';
import cart from './../../assets/images/icons/cart.png';
import heart from './../../assets/images/icons/heart.png';
import user from './../../assets/images/icons/user.png';

//Context
import {useContext} from 'react';
import {Context} from "../../Context";

const Header = (props) => {
  const {cookies, setCookies} = useContext(Context);
  const {totalPrice, setTotalPrice} = useContext(Context);

  const checkLogin = () => {
    if(!cookies.userLogin) {
      props.setEntryModalState(!props.entryModalState)
    }
  }

  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeftBlock}>
          <img className={styles.headerLogo} src={logo} />
          <div className={styles.headerTitleBlock}>
            <Link style={{textDecoration: 'none', color: '#000'}} to='/'>
              <div className={styles.headerTitle}>REACT SNEAKERS</div>
              <div className={styles.headerText}>Магазин лучших кроссовок</div>         
            </Link>
          </div>
        </div>
        <div className={styles.headerRightBlock}>
          <img className={styles.headerIconCard} src={cart} width='18px' height='18px'/>
          <span className={styles.headerTotalPrice}>{totalPrice} руб.</span>
          <Link to='/selected'><img className={styles.headerIconHeart} src={heart} alt="" /></Link>
          <Link onClick={checkLogin} to={cookies.userLogin ? '/account' : '/'}><img className={styles.headerIconUser} src={user} alt="" /></Link>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header);
