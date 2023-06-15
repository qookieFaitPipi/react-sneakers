import React, {useEffect, useState} from "react";

// react-router-dom
import {Routes,Route} from 'react-router-dom';

// pages
import HomePage from "./pages/HomePage/HomePage";
import SelectedPage from "./pages/SelectedPage/SelectedPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// context
import {Context} from './Context/index.js';
import {useCookies} from "react-cookie";

function App() {
  const [cookies, setCookies] = useCookies(["userLogin"]);

  const [sneakersList, setSneakersList] = useState([]);

  const [drawerCardList, setDrawerCardList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCardList, setSelectedCardList] = useState([]);

  // modalsStates
  const [entryModalState, setEntryModalState] = useState(false);
  const [registerModalState, setRegisterModalState] = useState(false);

  useEffect(() => {
    fetch('http://0.0.0.0:5000/get_drawer_cardlist')
    .then(response => response.json())
    .then(data => setDrawerCardList(data)).catch(()=>{
      alert("Ошибка. Проверьте подключение");
    }) 
    fetch('http://0.0.0.0:5000/get_select_cardlist')
    .then(response => response.json())
    .then(data => setSelectedCardList(data)).catch(()=>{
      alert("Ошибка. Проверьте подключение");
    })
    let total = 0;
    for(let i=0;i<drawerCardList.length;i++) {
      total += drawerCardList[i].price;
    }
    setTotalPrice(total)
  }, [cookies.userLogin])

  return (
    <Context.Provider value={{
      cookies,
      setCookies,

      sneakersList,
      setSneakersList,

      drawerCardList,
      setDrawerCardList,

      totalPrice,
      setTotalPrice,

      selectedCardList,
      setSelectedCardList
    }}>

      <Routes> 
        <Route 
          index path="/" 
          element={
          <HomePage 
            entryModalState={entryModalState}
            setEntryModalState={setEntryModalState}

            registerModalState={registerModalState}
            setRegisterModalState={setRegisterModalState}
          />}
        />
        <Route 
          path="/selected" 
          element={
          <SelectedPage 

          />}
        />
        <Route 
          path="/account" 
          element={
          <AccountPage 

          />}
        />
        <Route 
          path="*" 
          element={
          <NotFoundPage 

          />}
        />
      </Routes>
    </Context.Provider>
  );
}

export default App;
