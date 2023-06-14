import React, { useState, useEffect } from 'react'

// components
import Header from '../../multComponents/Header/Header';
import LogoImage from './LogoImage/LogoImage';
import CardList from './CardList/CardList';
import Drawer from './Drawer/Drawer';

// modals
import EntryModal from '../Modals/EntryModal/EntryModal';
import RegisterModal from '../Modals/RegisterModal/RegisterModal';

//Context
import {useContext} from 'react';
import {Context} from "../../Context";
const HomePage = (props) => {
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const {sneakersList, setSneakersList} = useContext(Context);

  useEffect(() => {
    fetch('http://0.0.0.0:5000/get_sneakers')
    .then(response => response.json())
    .then(data => setSneakersList(data)).catch(()=>{
      alert("Ошибка. Проверьте подключение");
    })    
  }, [])
  //console.log(sneakersList)

  return (
    <section>
      <Header 
        isDrawerOpened={isDrawerOpened}
        setIsDrawerOpened={setIsDrawerOpened}
        
        entryModalState={props.entryModalState}
        setEntryModalState={props.setEntryModalState}

        registerModalState={props.registerModalState}
        setRegisterModalState={props.setRegisterModalState}
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

      <EntryModal 
        entryModalState={props.entryModalState}
        setEntryModalState={props.setEntryModalState}

        registerModalState={props.registerModalState}
        setRegisterModalState={props.setRegisterModalState}
      />
      <RegisterModal 
        entryModalState={props.entryModalState}
        setEntryModalState={props.setEntryModalState}

        registerModalState={props.registerModalState}
        setRegisterModalState={props.setRegisterModalState}
      />
    </section>
  )
}

export default React.memo(HomePage);
