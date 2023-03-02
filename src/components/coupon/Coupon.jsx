import React from 'react'
import { Container } from '../../utils/Components'
import coupon from '../images/coupon.png'
import './Coupon.scss'

function Coupon() {
  return (
    <section>
        <Container>
            <div className="coupon">
                    <img src={coupon} alt="coupon" />
            </div>
        </Container>
    </section>
  )
}

export default Coupon