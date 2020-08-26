import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

// This is a special syntax react has for importing SVGS as a react component
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);
// Line 22-27
// Checks if a user is signed in and with conditionally render the respective element
// auth.signOut() is method provided by firebase to sign out of our credentials
export default Header;
