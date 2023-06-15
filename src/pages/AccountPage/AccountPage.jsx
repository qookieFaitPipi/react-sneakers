import React, {useState} from 'react'

// components
import Header from '../../multComponents/Header/Header';
import AccountInfo from './AccountInfo/AccountInfo';
import Drawer from '../HomePage/Drawer/Drawer';
const AccountPage = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  return (
    <section>
      <Header />
      <AccountInfo />
      <Drawer 
        isDrawerOpened={isDrawerOpened}
        setIsDrawerOpened={setIsDrawerOpened}
      />
    </section>
  )
}

export default React.memo(AccountPage);