import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import { useProducts } from "../../Hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";

const Order = () => {
  const [cart, setCart] = useCart();
  let navigate = useNavigate();
  const handleRemoveProduct = (product) => {
    const rest = cart.filter((item) => item._id !== product._id);
    setCart(rest);
    removeFromDb(product._id);
  };
  let quantity = 0;
  for (const item of cart) {
    quantity = quantity + item.quantity;
  }
  return (
    <div className="shop-container">
      <div className="review-item-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={() => navigate("/shipping")}>
            Proceed shipping
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
