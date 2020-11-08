import React from "react";

import { ReactComponent as Cart } from "../../media/cart/cart.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <Cart className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export default CartIcon;
