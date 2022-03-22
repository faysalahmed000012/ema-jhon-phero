import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./product.css";

const Product = (props) => {
  const { name, seller, price, img, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="name">{name}</p>
        <p className="price">price: ${price}</p>
        <p>
          <small>Seller:{seller}</small>
        </p>
        <p>
          <small>Ratings:{ratings} Star</small>
        </p>
      </div>
      <button
        onClick={() => props.handleAddToCart(props.product)}
        className="btn-cart"
      >
        <p>Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
