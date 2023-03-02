// Import hooks
import React from "react";
import { Link } from "react-router-dom";

const Circleprod = ({ product }) => {
  return (
    <article className="product_circle">
      <div className="circle-top">
        <Link className="transarent-link" to={`/product/${product.id}`}>
          {product.images.length > 0 &&
          product.images[0].startsWith("https://") ? (
            <img className="circle-image" src={product.images[0]} alt="" />
          ) : (
            <img
              className="circle-image"
              src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
              alt=""
            />
          )}
        </Link>
        <h3>{product.title}</h3>
      </div>
    </article>
  );
};

export default Circleprod;
