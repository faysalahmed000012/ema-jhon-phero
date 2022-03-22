import React from "react";
import "./product.css";

const Product = (props) => {
  const { name, seller, price, img, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <p className="name">{name}</p>
      <p className="price">price: ${price}</p>
    </div>
  );
};

export default Product;
