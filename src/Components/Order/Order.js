import React from "react";
import useCart from "../../Hooks/useCart";
import { useProducts } from "../../Hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  let quantity = 0;
  for (const item of cart) {
    quantity = quantity + item.quantity;
  }
  return (
    <div className="shop-container">
      <div className="products-container">
        {cart.map((product) => (
          <ReviewItem key={product.key} product={product}></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
