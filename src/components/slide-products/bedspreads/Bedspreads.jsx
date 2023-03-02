// Import hooks
import React, { useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
// Import icons
import { AiOutlineArrowRight } from "react-icons/ai";
// Import images
// Import styles
import "./Bedspreads.scss";
import Squereprod from "../../products/Squereprod";
function Bedspreads() {
  const [data, isLoading] = useFetchData("/categories/3/products?offset=0&limit=10");
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="prodLine">
      <div className="box">
        <div className="b_content">
          <h2>Up to 60% off home must-haves</h2>
          <p>Shop mattresses, toppers, and more.</p>
          <button onClick={handleClick}>
            Shop Now <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div
        className="slide-products"
        style={{ flexWrap: toggle ? "nowrap" : "wrap" }}
      >
        {!isLoading ? (
          data.map((product) => (
            <Squereprod
              className="slide"
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Bedspreads;
