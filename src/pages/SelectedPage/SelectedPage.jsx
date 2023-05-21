import React, {useState} from 'react'

// components
import Header from './../../multComponents/Header/Header';
import SelectedList from './SelectedList/SelectedList';
import Drawer from './../HomePage/Drawer/Drawer';
const SelectedPage = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  return (
    <section>
      <Header 
        isDrawerOpened={isDrawerOpened}
        setIsDrawerOpened={setIsDrawerOpened}
      />
      <SelectedList />
      <Drawer
        isDrawerOpened={isDrawerOpened}
        setIsDrawerOpened={setIsDrawerOpened}
      />
    </section>
  )
}

export default SelectedPage
