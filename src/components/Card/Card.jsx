import React from 'react'
import styles from './Card.module.scss';

// images
import heart from './../../assets/images/icons/heart.png';
import pinnedHeart from './../../assets/images/icons/pinnedHeart.png';
import sn  from './../../assets/images/sneakers/1.jpg';

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardFavoritesBlock}>
          <img className={styles.cardFavoritesIcon} src={heart} alt="" />
        </div>
        <div className={styles.cardImageBlock}> 
          <img className={styles.cardImage} src={sn} alt="icon"/>
        </div>
        <div className={styles.cardTitleBlock}>
          <div className={styles.cardTitle}>кроссовки</div>
        </div>
        <div className={styles.cardHandleBlock}>
          <div className={styles.cardPriceBlock}>
            <div className={styles.cardPrice}>Цена:</div>
            <div className={styles.cardPriceValue}>2300pуб</div>
          </div>
          <div className={styles.cardButtonBlock}>
            <div className={styles.cardAdd}>+</div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default React.memo(Card);
