import React from 'react'
import styles from './SelectedList.module.scss';

//components
import HomeCard from './../../HomePage/CardList/HomeCard/HomeCard';

//Context
import {useContext} from 'react';
import {Context} from "../../../Context";

import emptySmile from './../../../assets/images/empty-smile.svg'

const SelectedList = () => {
  const {selectedCardList, setSelectedCardList} = useContext(Context);

  return (
    <div className={styles.selectedList}>
      <div className={styles.selectedListContent}>
        {selectedCardList.length
        ?
        <div className={styles.selectedListItems}>
          {selectedCardList.map((obj) =>
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
        :
        <div className={styles.selectedListNone}>
          <img src={emptySmile} alt="" />
          <div className={styles.selectedListNoneTitle}>
            <div>Закладок нет :(</div>
          </div>
          <div className={styles.selectedTotalTextBlock}>
            <div>Вы ничего не добавляли в закладки</div>
          </div>
          <div className={styles.drawerTotalButtonBlock}>
            <input className={styles.drawerTotalButton} onClick={() => window.location = '/'} value='Вернуться назад' type="submit" />
          </div> 
        </div>
        }
      </div>
    </div>
  )
}

export default React.memo(SelectedList);
