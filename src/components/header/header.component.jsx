import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import logo from "../../media/logo/logo.png";
import CartIcon from "../cart-icon/cart-icon.component";
import Cart from "../cart/cart.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrUser } from "../../redux/user/user.selector";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({ currUser, cartHidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={logo} alt="KB Photograpy logo" />
      </Link>
      <div className="options">
        {currUser ? (
          <span className="welcome-name">Welcome {currUser.displayName}</span>
        ) : null}
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
        <CartIcon />
      </div>
      {!cartHidden ? <Cart /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currUser: selectCurrUser,
  cartHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
