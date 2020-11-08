import React from "react";

import FormButton from "../form-button/form-button.component";

import "./cart.styles.scss";

const Cart = () => (
  <div className="cart">
    <div className="cart-items" />
    <FormButton>CHECKOUT</FormButton>
  </div>
);

export default Cart;
