import React from 'react'
import styles from './DrawerCardList.module.scss';

//Context
import {useContext} from 'react';
import {Context} from "../../../../Context";

// compoents
import DrawerCard from './DrawerCard/DrawerCard';

// images
import emptyCart from './../../../../assets/images/empty-cart.jpg'

const DrawerCardList = () => {
  const {drawerCardList, setDrawerCardList} = useContext(Context);

  return (
    <div className={styles.drawerList}>
        {drawerCardList.length 
          ?
          <>
            {drawerCardList.map((obj) => 
              <DrawerCard 
                key={obj.id}
                id={obj.id}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
              />
            )}
          </>
          : 
          <>
            <img className={styles.emptyCardImage} src={emptyCart} alt="" />
          </>
        }
    </div>
  )
}

export default React.memo(DrawerCardList);