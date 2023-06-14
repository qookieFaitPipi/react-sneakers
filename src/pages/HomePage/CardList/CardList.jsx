import React from 'react'
import styles from './CardList.module.scss';

import HomeCard from './HomeCard/HomeCard';

//Context
import {useContext} from 'react';
import {Context} from "../../../Context";

const CardList = (props) => {
  const {sneakersList, setSneakersList} = useContext(Context);
  return (
    <div className={styles.cardList}>
      <div className={styles.cardListContent}>
        {sneakersList.filter((item) => item.title.toLowerCase().includes(props.searchValue.toLowerCase())).map((obj) => 
          <HomeCard 
            key={obj.id} 
            id={obj.id} 
            itemKey={obj.key}
            title={obj.title} 
            price={obj.price} 
            imageURL={obj.imageURL} 
          />
        )}
      </div>
    </div>
  )
}

export default React.memo(CardList)
