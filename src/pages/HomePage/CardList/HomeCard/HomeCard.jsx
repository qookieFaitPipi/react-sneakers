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
      if(selectedCardList[i].key == props.itemKey) {
        setIsSelected(true);
      } 
    }
  }, [selectedCardList])

  useEffect(() => {
    setIsAdded(false)
    for(let i=0;i<drawerCardList.length;i++) {
      if(drawerCardList[i].key == props.itemKey) {
        setIsAdded(true);
      }
    }
  }, [drawerCardList])

  // add to drawer
  const toggleCard = (id, key, title, price, imageURL) => {
    if(isAdded) {
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
    } else {
      const newCard = {
        id: id,
        key: key,
        title: title,
        price: price,
        imageURL: imageURL,
      }
      fetch('http://0.0.0.0:5000/add_sneakers_to_select', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCard)
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        if(data.is_added == true) {
          setDrawerCardList([...drawerCardList, newCard]);
          setTotalPrice(totalPrice + price);
        }
      })
    }
  }
  // add to select
  const selectCard = (id, key, title, price, imageURL) => {
    if(isSelected) {
      fetch('http://0.0.0.0:5000/delete_sneakers_from_cart/' + key, {
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
          setSelectedCardList(selectedCardList.filter(p => p.id !== id));
          setIsSelected(!isSelected);
        }
      })
    } else {
      const newCard = {
        id: id,
        key: key,
        title: title,
        price: price,
        imageURL: imageURL,
      }
      fetch('http://0.0.0.0:5000/add_sneakers_to_cart', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCard)
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        if(data.is_added == true) {
          setSelectedCardList([...selectedCardList, newCard]);
          setIsSelected(!isSelected);
        }
      })
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardFavoritesBlock} onClick={() => selectCard(props.id, props.itemKey, props.title, props.price, props.imageURL)}>
          <img className={styles.cardFavoritesIcon} src={isSelected ? pinnedHeart : heart} alt="" />
        </div>
        <div className={styles.cardImageBlock}> 
          <img className={styles.cardImage} src={props.imageURL} alt="icon"/>
        </div>
        <div className={styles.cardTitleBlock}>
          <div className={styles.cardTitle}>{props.title}</div>
        </div>
        <div className={styles.cardHandleBlock}>
          <div className={styles.cardPriceBlock}>
            <div className={styles.cardPrice}>Цена:</div>
            <div className={styles.cardPriceValue}>{props.price}</div>
          </div>
          <div className={isAdded ? styles.cardButtonAddBlock : styles.cardButtonBlock} onClick={() => toggleCard(props.id, props.itemKey, props.title, props.price, props.imageURL)}>
            <div className={styles.cardAdd}> {isAdded ? 'x' : '+'}</div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default React.memo(Card);
