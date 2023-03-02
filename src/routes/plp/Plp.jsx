import React, { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { Container } from "../../utils/Components";
import banner from "../../components/images/banner.png";
import Product from "../../components/products/Product";
import "./Plp.scss";
import { Link } from "react-router-dom";

function Plp() {
  const [category, setCategory] = useState(0);
  const [data, isLoading] = useFetchData(
    `/categories/${category}/products?offset=0&limit=25`
  );

  return (
    <section>
      <Container className="plp_container">
        <div className="banner">
          <h2>Featured Event</h2>
          <img src={banner} alt="banner with elecronics" />
          <p className="ban_desc">Up to 60% off Apple tech</p>
          <p>Save on AirPods, iPhones, and more.</p>
        </div>
        <div className="category">
          <h2>Shop by category</h2>
          <Link onClick={() => setCategory(1)}>
            <img
              className="cat_img"
              src="https://images-cdn.ubuy.co.id/7ZOVX3PG-clothe-co-mens-heavyweight-100-cotton.jpg"
              alt="dress"
            />
          </Link>
          <Link onClick={() => setCategory(2)}>
            <img
              className="cat_img"
              src="https://storechain.uz/image/cache/catalog/product/braclet/134-700x700.jpg"
              alt="dress"
            />
          </Link>
          <Link onClick={() => setCategory(3)}>
            <img
              className="cat_img"
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-d40a/k2-_77eb0d65-628c-4bf1-9a17-73f4a4a76b2c.v1.jpg"
              alt="dress"
            />
          </Link>
          <Link onClick={() => setCategory(4)}>
            <img
              className="cat_img"
              src="https://m.media-amazon.com/images/I/51hRAdDGlbS._UY500_.jpg"
              alt="dress"
            />
          </Link>
        </div>
        <div className="slide-products">
          {!isLoading ? (
            data.map((product) => (
              <Product className="slide" key={product.id} product={product} />
            ))
          ) : (
            <p className="loading">Loading...</p>
          )}
        </div>
      </Container>
    </section>
  );
}

export default Plp;
