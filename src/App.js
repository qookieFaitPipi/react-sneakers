import React, {useState} from "react";

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
