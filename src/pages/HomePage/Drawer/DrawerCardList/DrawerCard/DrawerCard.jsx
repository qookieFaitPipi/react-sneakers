import React from 'react'
import styles from './DrawerCard.module.scss';

//Context
import {useContext} from 'react';
import {Context} from "../../../../../Context";

const DrawerCard = (props) => {
  const {drawerCardList, setDrawerCardList} = useContext(Context);
  const {totalPrice, setTotalPrice} = useContext(Context);

  const deleteDrawerCard = (id, price) => {
    console.log(id)
    setDrawerCardList(drawerCardList.filter(p => p.id !== id));
    setTotalPrice(totalPrice - price);

  }

  return (
    <div className={styles.drawerCard}>
      <div className={styles.drawerCardContent}>
        <div className={styles.drawerCardImageBlock}>
          <img className={styles.drawerCardImage} src={props.imageUrl} alt="" />
        </div>
        <div className={styles.drawerCardInfoBlock}>
          <div className={styles.drawerCardTitle}>
            {props.title}
          </div>
          <div className={styles.drawerCardPrice}>
            {props.price}
          </div>
        </div>
        <div className={styles.drawerCardButtonBlock} onClick={() => deleteDrawerCard(props.id, props.price)}>
          <div className={styles.drawerCardDart}>x</div>
        </div>
      </div>
    </div>
  )
}

export default DrawerCard
