import React from 'react'
import styles from './DrawerTotal.module.scss';

const DrawerTotal = () => {
  return (
    <div className={styles.drawerTotal}>
      <div className={styles.drawerTotalContent}>
        <div className={styles.drawerTotalResultBlock}>
          Итог: 12000₽
        </div>
        <div className={styles.drawerTotalTaxBlock}>
          Налог 5%: 1074₽
        </div>
        <div className={styles.drawerTotalButtonBlock}>
          <input className={styles.drawerTotalButton} value='Оформить заказ' type="submit" />
        </div>
      </div>
    </div>  
  )
}

export default DrawerTotal
