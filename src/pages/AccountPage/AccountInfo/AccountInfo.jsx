import React from 'react'
import styles from './AccountInfo.module.scss';

import userIcon from './../../../assets/images/userIcon.jpeg';

//Context
import {useContext} from 'react';
import {Context} from './../../../Context/index.js';

const AccountInfo = () => {
  const {cookies, setCookies} = useContext(Context);

  return (
    <div className={styles.accountInfo}>
      <div className={styles.accountInfoContent}>
        <div className={styles.accountLogoBlock}>
          <img className={styles.accountLogo} src={userIcon} alt="" />
        </div>
        <div className={styles.accountMainInfoBlock}>
          <div className={styles.accountLoginBlock}>
            <div className={styles.accountLogin}>{cookies.userLogin}</div>
          </div>
          <div className={styles.accountDescriptionBlock}>
            <div className={styles.accountDescription}>бла бла бла бла</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(AccountInfo);