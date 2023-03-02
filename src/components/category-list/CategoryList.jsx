import useFetchData from "../../hooks/useFetchData";
import "./CategoryList.scss";
import { Link } from "react-router-dom";
import { Container } from "../../utils/Components";
import React, { useState, StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import Carousel from "react-simply-carousel";
import { AiOutlineArrowRight } from "react-icons/ai";


const CategoryList = () => {
  const [data] = useFetchData("/categories");
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <section className="category-list">
      <Container>
        <nav>
          <ul className="categories_list">
            <li className="nav_item">
              <a className="homeBtn" href="/#">Home</a>
            </li>
            <li className="nav_item">
              <a className="homeBtn" href="/#">Saved</a>
            </li>
                        <li className="nav_item">
              <a className="homeBtn" href="/#">Motors</a>
            </li>
                        <li className="nav_item">
              <a className="homeBtn" href="/#">Electronics</a>
            </li>
            <li className="nav_item">
              <a className="homeBtn" href="/#">Collectibles</a>
            </li>
            <li className="nav_item">
              <a className="homeBtn" href="/#">Home & Garden</a>
            </li>
                        <li className="nav_item">
              <a className="homeBtn" href="/#">Fashion</a>
            </li>
            <li className="nav_item">
              <a className="homeBtn" href="/#">Toys</a>
            </li>
            <li className="nav_item">
              <a className="homeBtn" href="/#">Sporting Goods</a>
            </li>
                        <li className="nav_item">
              <a className="homeBtn" href="/#">Business & Industrial</a>
            </li>
            <li className="nav_item">
              <a className="homeBtn" href="/#">Jewelry & Watches</a>
            </li>
                        <li className="nav_item">
              <a className="homeBtn" href="/#">eBay Live</a>
            </li>
            <li className="nav_item">
              <a className="homeBtn" href="/#">Refurbished</a>
            </li>
          </ul>
        </nav>
        <div>
      <Carousel
        containerProps={{
          style: {
            width: 1200,
            justifyContent: "space-between",
            userSelect: "none",
          }
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            display:"none"
          }
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            display:"none"
          }
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            title: "",
            formEncType: "Home",
            style: {
              display:"none"
            }
          },
          activeItemBtnProps: {
            style: {
              display:"none"
            }
          }
        }}
        itemsToShow={1}
        speed={1000}
      >
        {Array.from({ length: 13 }).map((item, index) => (
          <div
          className="content"
            style={{
              background: "rgba(254, 183, 134, 1)",
              width: 1200,
              height: 326,
              boxSizing: "border-box"
            }}
            key={index}
          >
            <div className="banner-text">
            <h2 className="main_text">Super savings at the Brand Outlet</h2>
            <p className="subtitle">Up to 60% off the brands you love.</p>
            <Link to="/plp" className="main_shop_btn">Shop now <AiOutlineArrowRight/> </Link>
            </div>
            <Link to="/">
                <Link className="shop_btn"><p>Callaway</p> <AiOutlineArrowRight/></Link>
                <div className="img_box">
                  <img className="img" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqERYAMj5t6KvfBI3iy2zpV5mG128cgZIJTk_y7_P&s"} alt="img" />
                </div>
            </Link>
            <Link to="/">
                <Link className="shop_btn"><p>Merrell</p> <AiOutlineArrowRight/></Link>
                <div className="img_box">
                  <img className="img" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqERYAMj5t6KvfBI3iy2zpV5mG128cgZIJTk_y7_P&s"} alt="img" />
                </div>
            </Link>
            <Link to="/">
                <Link className="shop_btn"><p>Specialized</p> <AiOutlineArrowRight/></Link>
                <div className="img_box">
                  <img className="img"src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqERYAMj5t6KvfBI3iy2zpV5mG128cgZIJTk_y7_P&s"}  alt="img" />
                </div>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
      </Container>
    </section>
  );
};

// src={data[1].image}

export default CategoryList;
