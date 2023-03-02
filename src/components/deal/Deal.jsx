// Import hooks
import React from 'react'
import { Container } from '../../utils/Components'
// Import icons
import { AiOutlineArrowRight } from "react-icons/ai";
// Import images
import logo from '../images/logo_blue.svg'
import collection from '../images/collection.png'
import care from '../images/care.png'
// Import styles
import './Deal.scss'

function Deal() {
  return (
    <section className='deal_sec'>
    <Container>
        <div className="deal_content">
            <div className="deal_text">
                <p>Featured</p>
                <img src={logo} alt="logo" />
                <h2>Deals made easy all year long.</h2>
                <p className='deal_desc'>Free shipping. Best prices.</p>
                <button>Get your thing <AiOutlineArrowRight/></button>
            </div>
            <div className="deal_images">
                <div className="deal_image__1">
                    <img src={collection} alt="collection images" />
                </div>
                <div className="deal_image__2">
                    <img src={care} alt="people" />
                </div>
            </div>
        </div>
    </Container>
    </section>
  )
}

export default Deal