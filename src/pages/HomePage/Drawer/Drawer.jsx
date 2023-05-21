import React from 'react'
import styles from './Drawer.module.scss';

// components
import DrawerCardList from './DrawerCardList/DrawerCardList';
import DrawerTotal from './DrawerTotal/DrawerTotal';


const Drawer = (props) => {
  return (
    <div className={props.isDrawerOpened ? styles.overlay : styles.diable} onClick={() => props.setIsDrawerOpened(false)}>
      <div className={styles.drawer} onClick={e => e.stopPropagation()}>
        <div className={styles.drawerContent}>
          <div className={styles.drawerTop}>
            <div className={styles.drawerTitleBlock}>
              <div className={styles.drawerTitle}>Корзина</div>
            </div>
            <div className={styles.drawerDartBlock} onClick={() => props.setIsDrawerOpened(!props.isDrawerOpened)}>
              <div className={styles.drawerDart}>x</div>
            </div>
          </div>
          <DrawerCardList />
          <DrawerTotal 
            setIsDrawerOpened={props.setIsDrawerOpened}
          />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Drawer);
