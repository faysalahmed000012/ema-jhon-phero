import React from "react";
import "./Cart.css";

const Cart = ({ cart, children }) => {
  // console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    // console.log(quantity);
  }
  const tax = (total * 0.1).toFixed(3);
  const grandTotal = total + shipping + Number(tax);
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h5>Grand Total: ${grandTotal}</h5>
      <button className="btn-clear">Clear Cart</button> <br />
      {children}
    </div>
  );
};

export default Cart;
