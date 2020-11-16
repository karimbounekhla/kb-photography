import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import FormButton from "../form-button/form-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Cart);
