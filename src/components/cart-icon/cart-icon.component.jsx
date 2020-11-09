import React from "react";
import { connect } from "react-redux";

import { ReactComponent as Cart } from "../../media/cart/cart.svg";
import { toggleCart } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCart }) => (
  <div className="cart-icon" onClick={() => toggleCart()}>
    <Cart className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
