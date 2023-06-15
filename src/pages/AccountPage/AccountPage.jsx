import React from 'react'

// components
import Header from '../../multComponents/Header/Header';
import AccountInfo from './AccountInfo/AccountInfo';

const AccountPage = () => {
  return (
    <section>
      <Header />
      <AccountInfo />
    </section>
  )
}

export default React.memo(AccountPage);