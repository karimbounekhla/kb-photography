import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import FormButton from "../form-button/form-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCart } from "../../redux/cart/cart.actions";

import "./cart.styles.scss";

const Cart = ({ cartItems, history, dispatch }) => (
  <div className="cart">
    {cartItems.length ? (
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
    ) : (
      <span className="empty-message">Cart is empty</span>
    )}
    <FormButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCart());
      }}
    >
      CHECKOUT
    </FormButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(Cart));
