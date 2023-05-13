import React from "react";

// components
import Header from "./components/Header/Header";
import LogoImage from "./components/LogoImage/LogoImage";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";

function App() {
  return (
    <>
      <Header />
      <Drawer />
      <LogoImage />
      <Card />
    </>
  );
}

export default App;
