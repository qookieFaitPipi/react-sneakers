import React, { useEffect, useState } from 'react'
import styles from './HomeCard.module.scss';

// images
import heart from './../../../../assets/images/icons/heart.png';
import pinnedHeart from './../../../../assets/images/icons/pinnedHeart.png';

//Context
import {useContext} from 'react';
import {Context} from "../../../../Context";

const Card = (props) => {
  const {drawerCardList, setDrawerCardList} = useContext(Context);
  const {totalPrice, setTotalPrice} = useContext(Context);
  const {selectedCardList, setSelectedCardList} = useContext(Context);


  const [isAdded, setIsAdded] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    for(let i=0;i<selectedCardList.length;i++) {
      if(selectedCardList[i].id == props.id) {
        setIsSelected(true);
      } 
    }
  }, [selectedCardList])

  useEffect(() => {
    setIsAdded(false)
    for(let i=0;i<drawerCardList.length;i++) {
      if(drawerCardList[i].id == props.id) {
        setIsAdded(true);
      }
    }
  }, [drawerCardList])

  const toggleCard = (id, title, price, imageUrl) => {
    if(isAdded) {
      setDrawerCardList(drawerCardList.filter(p => p.id !== id));
      setTotalPrice(totalPrice - price);
    } else {
      const newCard = {
        id: id,
        title: title,
        price: price,
        imageUrl: imageUrl,
      }
      setDrawerCardList([...drawerCardList, newCard]);
      setTotalPrice(totalPrice + price);
    }
    setIsAdded(!isAdded);
  }

  const selectCard = (id, title, price, imageUrl) => {
    if(isSelected) {
      setSelectedCardList(selectedCardList.filter(p => p.id !== id))
    } else {
      const newCard = {
        id: id,
        title: title,
        price: price,
        imageUrl: imageUrl,
      }
      setSelectedCardList([...selectedCardList, newCard]);

    }
    setIsSelected(!isSelected);
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardFavoritesBlock} onClick={() => selectCard(props.id, props.title, props.price, props.imageUrl)}>
          <img className={styles.cardFavoritesIcon} src={isSelected ? pinnedHeart : heart} alt="" />
        </div>
        <div className={styles.cardImageBlock}> 
          <img className={styles.cardImage} src={props.imageUrl} alt="icon"/>
        </div>
        <div className={styles.cardTitleBlock}>
          <div className={styles.cardTitle}>{props.title}</div>
        </div>
        <div className={styles.cardHandleBlock}>
          <div className={styles.cardPriceBlock}>
            <div className={styles.cardPrice}>Цена:</div>
            <div className={styles.cardPriceValue}>{props.price}</div>
          </div>
          <div className={isAdded ? styles.cardButtonAddBlock : styles.cardButtonBlock} onClick={() => toggleCard(props.id, props.title, props.price, props.imageUrl)}>
            <div className={styles.cardAdd}> {isAdded ? 'x' : '+'}</div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default React.memo(Card);
