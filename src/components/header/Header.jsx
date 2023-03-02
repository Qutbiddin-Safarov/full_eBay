import React, { useRef } from "react";
import { FiShoppingCart,FiUser } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { useLocation, Link } from "react-router-dom";
import { Container, MainLink } from "../../utils/Components";
import "./Header.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const {email} = useSelector(data => data);
  const navigation = useRef();
  const location = useLocation();
  var prevScrollpos = window.pageYOffset;
  window.addEventListener("scroll", function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navigation.current.style.top = "0px";
    } else {
      navigation.current.style.top = "-72px";
    }
    prevScrollpos = currentScrollPos;
  });
  return (
    !location.pathname.includes("auth") && (
      <header ref={navigation}>
        <Container>
          <div className="header-wrapper">
            <div className="nav_div1">
            <nav className="nav_1">
              <p>Hi!</p>
              <Link to="auth/login">Sign in</Link>
              <p>or</p>
              <Link to="auth/create">register</Link>
            </nav>
            <nav className="nav_2">
              <Link className="unstyle" to="/">Daily deals</Link>
              <Link className="unstyle" to="/">Brand outlet</Link>
              <Link className="unstyle" to="/">Help & contact</Link>
            </nav>
            </div>
            <nav className="nav_3">
              <Link className="unstyle" to="/">Sell</Link>
              <select className="select" name="watchlist" id="wl-1">
                <option value="1">Watchlist</option>
              </select>
              <select className="select" name="watchlist" id="wl-1">
                <option value="1">My eBay</option>
              </select>
              <MainLink className="icons" link="/wishlist" title="" icon={<BsBell />} />
              <MainLink className="icons" link="/cart" title="" icon={<FiShoppingCart/>}/>
              <MainLink link="/auth" title={email ? email : "Profile"} icon={<FiUser />} />
            </nav>
          </div>
        </Container>
      </header>
    )
  );
};

export default Header;
