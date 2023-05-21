import React from 'react'
import styles from './CardList.module.scss';

import HomeCard from './HomeCard/HomeCard';

//Context
import {useContext} from 'react';
import {Context} from "../../../Context";

const CardList = (props) => {
  const {sneakersList, setSneakersList} = useContext(Context);

  console.log(props.searchValue)
  return (
    <div className={styles.cardList}>
      <div className={styles.cardListContent}>
        {sneakersList.filter((item) => item.title.toLowerCase().includes(props.searchValue.toLowerCase())).map((obj) => 
          <HomeCard 
            key={obj.id} 
            id={obj.id} 
            title={obj.title} 
            price={obj.price} 
            imageUrl={obj.imageUrl} 
          />
        )}
      </div>
    </div>
  )
}

export default React.memo(CardList)
