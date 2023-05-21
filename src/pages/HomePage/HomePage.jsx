import React, { useState, useEffect } from 'react'

// components
import Header from '../../multComponents/Header/Header';
import LogoImage from './LogoImage/LogoImage';
import CardList from './CardList/CardList';

import Drawer from './Drawer/Drawer';

const HomePage = () => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <section>
      <Header 
        isDrawerOpened={isDrawerOpened}
        setIsDrawerOpened={setIsDrawerOpened}
      />
      <LogoImage 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <CardList 
        searchValue={searchValue}

      />
      <Drawer 
        isDrawerOpened={isDrawerOpened}
        setIsDrawerOpened={setIsDrawerOpened}
      />
    </section>
  )
}

export default React.memo(HomePage);
