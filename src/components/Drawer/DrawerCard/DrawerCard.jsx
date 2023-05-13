import React from 'react'
import styles from './DrawerCard.module.scss';

import sn  from './../../../assets/images/sneakers/1.jpg';

const DrawerCard = () => {
  return (
    <div className={styles.drawerCard}>
      <div className={styles.drawerCardContent}>
        <div className={styles.drawerCardImageBlock}>
          <img className={styles.drawerCardImage} src={sn} alt="" />
        </div>
        <div className={styles.drawerCardInfoBlock}>
          <div className={styles.drawerCardTitle}>
            Кроссовки
          </div>
          <div className={styles.drawerCardPrice}>
            12000₽
          </div>
        </div>
        <div className={styles.drawerCardButtonBlock}>
          <div className={styles.drawerCardDart}>&#10008;</div>
        </div>
      </div>
    </div>
  )
}

export default DrawerCard
