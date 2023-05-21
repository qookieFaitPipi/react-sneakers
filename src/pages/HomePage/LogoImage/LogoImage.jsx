import React, { useState } from 'react'
import styles from './LogoImage.module.scss';

// images
import logoImage from './../../../assets/images/logoImage.png';

const LogoImage = (props) => {
  const onSearch = (event) => {
    props.setSearchValue(event.target.value);
  }
  return (
    <div className={styles.logoImageBlock}>
      <div className={styles.logoImageBlockContent}>
        <div className={styles.logoImageContainer}>
          <img className={styles.logoImage} src={logoImage} alt="" />
        </div>
        <div className={styles.logoSearchContainer}>
          <div className={styles.logoSearchTitle}>{props.searchValue.length ? 'Поиск по запросу: ' : 'Все кроссовки'}</div>
          <input className={styles.logoSearchInput} value={props.searchValue} onChange={onSearch} placeholder='Поиск...' type="text" />
        </div>
      </div>
    </div>
  )
}

export default React.memo(LogoImage);
