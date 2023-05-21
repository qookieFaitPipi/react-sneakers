import React from 'react'
import styles from './DrawerTotal.module.scss';

//Context
import {useContext} from 'react';
import {Context} from "../../../../Context";

const DrawerTotal = (props) => {
  const {drawerCardList, setDrawerCardList} = useContext(Context);
  const {totalPrice, setTotalPrice} = useContext(Context);
  
  return (
    <div className={styles.drawerTotal}>
      <div className={styles.drawerTotalContent}>
        {drawerCardList.length
        ?
        <>
          <div className={styles.drawerTotalResultBlock}>
            Итог: {totalPrice}₽
          </div>
          <div className={styles.drawerTotalTaxBlock}>
            Налог 5%: {totalPrice * 0.05}
          </div>
          <div className={styles.drawerTotalButtonBlock}>
            <input className={styles.drawerTotalButton} value='Оформить заказ' type="submit" />
          </div> 
        </>
        :
        <>
          <div className={styles.drawerTotalText}>
            <div>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</div>
          </div>
          <div className={styles.drawerTotalButtonBlock}>
            <input className={styles.drawerTotalButton} onClick={() => props.setIsDrawerOpened(false)} value='Вернуться назад' type="submit" />
          </div> 
        </>
        }
      </div>
    </div>  
  )
}

export default DrawerTotal
