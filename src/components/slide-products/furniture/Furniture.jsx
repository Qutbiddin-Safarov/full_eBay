// Import hooks
import React, { useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
// Import icons
import { AiOutlineArrowRight } from "react-icons/ai";
// Import styles
import "./Furniture.scss";
// Import component
import Circleprod from "../../products/Circleprod";

function Furniture() {
  const [data, isLoading] = useFetchData("/categories/3/products?offset=0&limit=15");
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="prodLine_3">
      <div className="box_3">
        <div className="b_content_3">
          <h2>Extra 20% off for Presidents' Day</h2>
          <button onClick={handleClick}>
          See all <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div
        className="slide-products_3"
        style={{ flexWrap: toggle ? "nowrap" : "wrap" }}
      >
        {!isLoading ? (
          data.map((product) => (
            <Circleprod
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

export default Furniture;
