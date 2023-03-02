// Import hooks
import React, { useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
// Import icons
import { AiOutlineArrowRight } from "react-icons/ai";
// Import styles
import "./Shoes.scss";
// Import component
import Circleprod from "../../products/Circleprod";

function Shoes() {
  const [data, isLoading] = useFetchData("/categories/4/products?offset=0&limit=15");
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="prodLine_2">
      <div className="box_2">
        <div className="b_content_2">
          <h2>Score these trending kicks</h2>
          <button onClick={handleClick}>
          See all <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div
        className="slide-products_2"
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

export default Shoes;
