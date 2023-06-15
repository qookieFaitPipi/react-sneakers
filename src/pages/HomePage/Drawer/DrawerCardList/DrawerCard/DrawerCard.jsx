import React from 'react'
import styles from './DrawerCard.module.scss';

//Context
import {useContext} from 'react';
import {Context} from "../../../../../Context";

const DrawerCard = (props) => {
  const {drawerCardList, setDrawerCardList} = useContext(Context);
  const {totalPrice, setTotalPrice} = useContext(Context);

  const deleteDrawerCard = (id, key, price) => {
    fetch('http://0.0.0.0:5000/delete_sneakers_from_select/' + key, {
      method: 'post',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      if(data.is_deleted == true) {
        setDrawerCardList(drawerCardList.filter(p => p.id !== id));
        setTotalPrice(totalPrice - price);
      }
    })
  }

  return (
    <div className={styles.drawerCard}>
      <div className={styles.drawerCardContent}>
        <div className={styles.drawerCardImageBlock}>
          <img className={styles.drawerCardImage} src={props.imageURL} alt="" />
        </div>
        <div className={styles.drawerCardInfoBlock}>
          <div className={styles.drawerCardTitle}>
            {props.title}
          </div>
          <div className={styles.drawerCardPrice}>
            {props.price}
          </div>
        </div>
        <div className={styles.drawerCardButtonBlock} onClick={() => deleteDrawerCard(props.id, props.itemKey, props.price)}>
          <div className={styles.drawerCardDart}>x</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(DrawerCard);