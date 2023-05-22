import React from 'react'
import styles from './SelectedInfo.module.scss';

import { Link } from 'react-router-dom';

//images
import arrow from './../../../assets/images/icons/arrow.svg';

const SelectedInfo = () => {
  return (
    <div className={styles.selectedInfo}>
      <div className={styles.selectedInfoContent}>
        <Link className={styles.selectedInfoBackBlock} to='/'>
          <img className={styles.selectedInfoBack} src={arrow} alt="" />
        </Link>
        <div className={styles.selectedInfoTextBlock}>
          Мои закладки
        </div>
      </div>
    </div>
  )
}

export default React.memo(SelectedInfo);