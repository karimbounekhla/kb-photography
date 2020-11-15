import React from "react";
import { connect } from "react-redux";

import FormButton from "../form-button/form-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart.styles.scss";

const Cart = ({ cartItems }) => (
  <div className="cart">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <FormButton>CHECKOUT</FormButton>
  </div>
);

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
});

export default connect(mapStateToProps)(Cart);
