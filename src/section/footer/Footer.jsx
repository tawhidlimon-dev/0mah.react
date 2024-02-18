import React from 'react'
import './footer.css'
import Image from '../../assets/images/footer_logo.png'

const Footer = () => {
  return (
    <footer id="footer">
    <div className="container">
      <div className="footer_wrapper">
        <div className="footer_logo">
          <a href="#">
            <picture>
              <img src={Image} alt="Not Found" />
            </picture>
          </a>
        </div>
        <div className="footer_item">
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
