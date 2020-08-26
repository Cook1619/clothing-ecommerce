import React from "react";
import { Link } from "react-router-dom";

// This is a special syntax react has for importing SVGS as a react component
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
}