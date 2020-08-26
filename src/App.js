import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/Homepage.jsx";
import ShopPage from "./pages/shop/Shop.jsx";
import Header from "./components/header/Header.jsx";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/Sign-In-And-Sign-Up.jsx";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  // This keeps track if your user is logged in or not
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  // When the component unmounts this will unsubcribe the user from being logged in
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

export default App;
