// Import hooks
import React, { useState, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
// Import icons
import { FiSearch } from "react-icons/fi";
// Import components
import { instance } from "../../api/instance";
import { Container } from "../../utils/Components";
// Import styles
import "./Search.scss";
// Import images
import logo from "../../components/images/logo.svg";

const Search = () => {
  const [searchDataResults, setSearchDataResults] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");

  const navigation = useRef();
  const location = useLocation();

  const getProductSuggestions = (e) => {
    setSearchInputValue(e.target.value);
    if (e.target.value.trim().length > 2) {
      instance
        .get(`/products/?title=${e.target.value}&offset=0&limit=10`)
        .then((response) => setSearchDataResults(response.data))
        .catch((err) => console.log(err));
    }
  };

  const getSearchResults = (e) => {
    e.preventDefault();
    window.location.href = `/search/${searchInputValue}`;
  };

  return (
    !location.pathname.includes("auth") && (
      <section className="search">
        <Container>
          <div className="search-wrapper" ref={navigation}>
            <Link className="logo_box" to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
            <select className="categoryform" name="categoryform" id="ct-f">
              <option value="category">Shop by category</option>
            </select>
            <form className="search-form" onSubmit={getSearchResults}>
              <div className="search_box">
                <div className="search-input-wrapper">
                  <FiSearch />
                  <input
                    onChange={getProductSuggestions}
                    type="text"
                    placeholder="Search for anything"
                    />
                  {searchDataResults.length > 0 &&
                  searchInputValue.length >= 3 ? (
                    <div className="search-suggestions">
                      {searchDataResults.map((searchItem) => (
                        <Link
                          to={`/product/${searchItem.id}`}
                          key={searchItem.id}
                          className="transarent-link search-result-item"
                        >
                          <p>{searchItem.title}</p>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <select name="categorysearch" id="ct-s">
                  <option value="cat">All categories</option>
                </select>
              </div>
              <button type="submit">Search</button>
              <p>Advanced</p>
            </form>
          </div>
        </Container>
      </section>
    )
  );
};

export default Search;
