import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/Homepage.jsx";
import ShopPage from "./pages/shop/Shop.jsx";
import Header from "./components/header/Header.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
