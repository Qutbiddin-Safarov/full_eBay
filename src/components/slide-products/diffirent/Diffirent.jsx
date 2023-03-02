// Import hooks
import React, { useState } from "react";
import useFetchData from "../../../hooks/useFetchData";
// Import icons
import { AiOutlineArrowRight } from "react-icons/ai";
// Import images
// Import styles
import "./Diffirent.scss";
import Squereprod from "../../products/Squereprod";
function Diffirent() {
  const [data, isLoading] = useFetchData("/products?offset=0&limit=10");
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="prodLine_4">
      <div className="box_4">
        <div className="b_content_4">
          <h2>Today's Deals – All With Free Shipping</h2>
          <button onClick={handleClick}>
            See all <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div
        className="slide-products_4"
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

export default Diffirent;
