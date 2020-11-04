import React from "react";
import { Link } from "react-router-dom";
import logo from "../../media/logo/logo.png";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({ currUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={logo} alt="KB Photograpy logo" />
      </Link>
      <div className="options">
        {currUser ? (
          <span className="welcome-name">Welcome {currUser.displayName}</span>
        ) : (
          ""
        )}
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/about">
          ABOUT
        </Link>
        {!currUser ? (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        ) : (
          <Link className="option" to="/" onClick={() => auth.signOut()}>
            SIGN OUT
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
