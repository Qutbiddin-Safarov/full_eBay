// Import hooks
import React from "react";
import { Link } from "react-router-dom";

const Squereprod = ({ product }) => {
  return (
    <article className="product_squere">
      <div className="squere-top">
        <Link className="transarent-link" to={`/product/${product.id}`}>
          {product.images.length > 0 &&
          product.images[0].startsWith("https://") ? (
            <img className="squere-image" src={product.images[0]} alt="" />
          ) : (
            <img
              className="squere-image"
              src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
              alt=""
            />
          )}
        </Link>
        <strong className="price">${product.price}</strong>
      </div>
    </article>
  );
};

export default Squereprod;
