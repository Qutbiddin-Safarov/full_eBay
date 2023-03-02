import React, { useRef } from "react";
import { Container } from '../../utils/Components'
import './Footer.scss'
import { useLocation} from "react-router-dom";

function Footer() {
    const navigation = useRef();
    const location = useLocation();
  return (
    <section>
        <Container>
            <div className="footer-top">
                <ul className='list'>
                    <li className="list_item">
                        <h2>Buy</h2>
                        <p>Registration</p>
                        <p>eBay Money Back Guarantee</p>
                        <p>Bidding & buying help</p>
                        <p>Stores</p>
                        <p>eBay for Charity</p>
                        <p>Charity Shop</p>
                        <p>Seasonal Sales and events</p>
                    </li>
                    <li className="list_item">
                        <h2>Sell</h2>
                        <p>Start selling</p>
                        <p>How to sell</p>
                        <p>Business sellers</p>
                        <p>Affiliates</p>
                        <h2>Tools & apps</h2>
                        <p>Developers</p>
                        <p>Security center</p>
                        <p>Site map</p>
                    </li>
                    <li className="list_item">
                        <h2>Stay connected</h2>
                        <p>Facebook</p>
                        <p>Twitter</p>
                    </li>
                    <li className="list_item">
                        <h2>About eBay</h2>
                        <p>Company info</p>
                        <p>News</p>
                        <p>Investors</p>
                        <p>Careers</p>
                        <p>Diversity & Inclusion</p>
                        <p>Global Impact</p>
                        <p>Government relations</p>
                        <p>Advertise with us</p>
                        <p>Policies</p>
                        <p>Verified Rights Owner (VeRO) Program</p>
                        <p>eCI Licenses</p>
                    </li>
                    <li className="list_item">
                        <h2>Help & Contact</h2>
                        <p>Seller Center</p>
                        <p>Contact Us</p>
                        <p>eBay Returns</p>
                        <h2>Community</h2>
                        <p>Announcements</p>
                        <p>eBay Community</p>
                        <p>eBay for Business Podcast</p>
                    </li>
                </ul>
            </div>
            <div className="footer-bottom">

            </div>
        </Container>
    </section>
    )
}

export default Footer