import React from 'react'
import styles from './LogoImage.module.scss';

// images
import logoImage from './../../assets/images/logoImage.png';

const LogoImage = () => {
  return (
    <div className={styles.logoImageBlock}>
      <div className={styles.logoImageBlockContent}>
        <div className={styles.logoImageContainer}>
          <img className={styles.logoImage} src={logoImage} alt="" />
        </div>
        <div className={styles.logoSearchContainer}>
          <div className={styles.logoSearchTitle}>Все кроссовки</div>
          <input className={styles.logoSearchInput} placeholder='Поиск' type="text" />
        </div>
      </div>
    </div>
  )
}

export default LogoImage
