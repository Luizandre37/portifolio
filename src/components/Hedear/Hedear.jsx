import React from 'react'
import './Hedear.css'
import CTA from './CTA'
import Me from '../../assets/eu.png'
import HeaderSocial from './HeaderSocial'
const Hedear = () => {
  return (
  <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Luiz André Maceno</h1>
      <h5 className="text-light"> Developer Front-End Junior </h5>
      <CTA/>
      <HeaderSocial/>
      <div className="me">
        <img src={Me} alt="me" />

      </div>
      <a href='#contato' className='scroll_down'>Scroll Down</a>

    </div>


  </header>
  )
}

export default Hedear