import React from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { Button, Container } from "../../utils/Components";
import "./SingleProduct.scss";
import { useDispatch } from "react-redux";
import Diffirent from '../../components/slide-products/diffirent/Diffirent'

const SingleProduct = ({product}) => {
  const { id } = useParams();
  const [data, isLoading] = useFetchData(`/products/${id}`);
  console.log(data);
  const dispatch = useDispatch();
  const addToWishlist = () => {
    dispatch({ product, type: "ADD_TO_WISHLIST" });
  };
  const addToCart = () => {
    dispatch({ product, type: "ADD_TO_CART" });
  };
  return (
    <main>
      <div className="single-product">
        <section className="single-product__wrapper">
          <Container>
            <div className="single-product__item">
              {!isLoading ? (
                <>
                  {data.images?.length > 0 &&
                  data?.images[0].startsWith("https://") ? (
                    <img
                      className="single-product__image"
                      src={data.images[0]}
                      alt=""
                    />
                  ) : (
                    <img
                      className="single-product__image"
                      src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                      alt=""
                    />
                  )}
                  <div className="single-product__info">
                    <h2>{data.title}</h2>
                    <strong>${data.price}</strong>
                    <Button
                      onClick={addToCart}
                      type="button"
                      title="Add to cart"
                      icon={<FiShoppingCart />}
                    />
                    <Button
                      onClick={addToWishlist}
                      type="button"
                      title="Add to cart"
                      icon={<FiHeart />}
                    />
                  </div>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <Diffirent/>
          </Container>
        </section>
      </div>
    </main>
  );
};

export default SingleProduct;
