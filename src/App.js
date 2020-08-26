import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/Homepage.jsx";
import ShopPage from "./pages/shop/Shop.jsx";
import Header from "./components/header/Header.jsx";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/Sign-In-And-Sign-Up.jsx";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
