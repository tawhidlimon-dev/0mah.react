import React from 'react'
import './faborit.css'
import FaboritImgOne from '../../assets/images/favorit_image01.jpg'
import FaboritImgTwo from '../../assets/images/favorit_image02.jpg'
import { FaPhoneAlt } from "react-icons/fa";

const Faborit = () => {
  return (
    <section id="favorit">
      <div className="container">
        <div className="favorit_item_wrapper">
          <div className="favorit_gallery">
            <div className="favorit_gallery_heading">
              <h6 className="sub_heading">Pilihan konsumen</h6>
              <h2 className="heading">Residen Favorit</h2>
            </div>
            <div className="favorit_gallery_photos_wrapper">
              <div className="gallery_photos_item_one">
                <img src={FaboritImgOne} alt="Not Found" />
              </div>
              <div className="gallery_photos_item_two">
                <img src={FaboritImgTwo} alt="Not Found" />
              </div>
            </div>
          </div>
          <div className="favorit_content">
            <h2 className="heading">Bangunan yang dirancang oleh Aristektur Handal</h2>
            <p className="common_paragraph">Tanpa diragukan, properti yang disediakan dalam webiste kami merupakan hasil kerjasama secara profesional dengan para Arsitektur ternama dan Developer yang terpercaya.</p>
            <div className="favorit_content_btn">
              <div className="btn_item"> 
                <a href="#"> < FaPhoneAlt /> Hubungi Kami</a>
              </div>
              <div className="btn_item">
                <a href="#">Explore lebih banyak</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faborit
