import React from 'react'
import './footer.css'
import Image from '../../assets/images/footer_logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

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
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
