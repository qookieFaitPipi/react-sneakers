import React, {useState} from "react";

// react-router-dom
import {Routes,Route} from 'react-router-dom';

// pages
import HomePage from "./pages/HomePage/HomePage";
import SelectedPage from "./pages/SelectedPage/SelectedPage";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

//Context
import {Context} from './Context/index.js';

import sn1 from './assets/images/sneakers/1.jpg';
import sn2 from './assets/images/sneakers/2.jpg';
import sn3 from './assets/images/sneakers/3.jpg';
import sn4 from './assets/images/sneakers/4.jpg';
import sn5 from './assets/images/sneakers/5.jpg';
import sn6 from './assets/images/sneakers/6.jpg';
import sn7 from './assets/images/sneakers/7.jpg';
import sn8 from './assets/images/sneakers/8.jpg';
import sn9 from './assets/images/sneakers/9.jpg';

function App() {
  const [sneakersList, setSneakersList] = useState([
    {id: 1, title: 'Кросовки1', price: 100, imageUrl: sn1},
    {id: 2, title: 'Кросовки2', price: 200, imageUrl: sn2},
    {id: 3, title: 'Кросовки3', price: 300, imageUrl: sn3},
    {id: 4, title: 'Кросовки4', price: 400, imageUrl: sn4},
    {id: 5, title: 'Кросовки5', price: 500, imageUrl: sn5},
    {id: 6, title: 'Кросовки6', price: 600, imageUrl: sn6},
    {id: 7, title: 'Кросовки7', price: 700, imageUrl: sn7},
    {id: 8, title: 'Кросовки8', price: 800, imageUrl: sn8},
    {id: 9, title: 'Кросовки9', price: 900, imageUrl: sn9},
  ]);

  const [drawerCardList, setDrawerCardList] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCardList, setSelectedCardList] = useState([])

  return (
    <Context.Provider value={{
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

          />}
        />
        <Route 
          path="/selected" 
          element={
          <SelectedPage 

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
