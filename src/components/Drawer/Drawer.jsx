import React from 'react'
import styles from './Drawer.module.scss';

// components
import DrawerCard from './DrawerCard/DrawerCard';
import DrawerTotal from './DrawerTotal/DrawerTotal';
const Drawer = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.drawerContent}>
          <div className={styles.drawerTop}>
            <div className={styles.drawerTitle}>
              Корзина
            </div>
            <div className={styles.drawerDart}>
              &#10008;
            </div>
          </div>
          <div className={styles.drawerList}>
            <DrawerCard />
          </div>
          <div className={styles.drawerTotal}>
            <DrawerTotal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawer
