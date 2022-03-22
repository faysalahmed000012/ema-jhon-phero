import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h3>This is for cart</h3>
      <h5>Items: {cart.length}</h5>
    </div>
  );
};

export default Cart;
