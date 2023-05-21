import React from 'react'
import styles from './SelectedList.module.scss';

//components
import HomeCard from './../../HomePage/CardList/HomeCard/HomeCard';

//Context
import {useContext} from 'react';
import {Context} from "../../../Context";

const SelectedList = () => {
  const {selectedCardList, setSelectedCardList} = useContext(Context);

  return (
    <div className={styles.selectedList}>
      <div className={styles.selectedListContent}>
        {selectedCardList.map((obj) =>
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

export default SelectedList
