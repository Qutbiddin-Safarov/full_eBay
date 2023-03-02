// Import hooks
import React from "react";
// Import components
import Deal from "../deal/Deal";
import Bedspreads from "../slide-products/bedspreads/Bedspreads";
import Shoes from "../slide-products/shoes/Shoes";
import Furniture from "../slide-products/furniture/Furniture";
import Diffirent from "../slide-products/diffirent/Diffirent";
import { Container } from "../../utils/Components";
// Import styles
import "./MainProducts.scss";
const MainProducts = () => {
  return (
    <section className="main-products">
      <Container>
        <div className="main-products__wrapper">
          <Bedspreads />
          <Shoes />
          <Furniture />
          <Deal />
          <Diffirent />
        </div>
      </Container>
    </section>
  );
};

export default MainProducts;
