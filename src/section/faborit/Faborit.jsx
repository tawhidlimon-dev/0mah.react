import React from 'react'
import './faborit.css'
import FaboritImgOne from '../../assets/images/favorit_image01.jpg'
import FaboritImgTwo from '../../assets/images/favorit_image02.jpg'

const Faborit = () => {
  return (
    <section id="favorit">
      <div class="container">
        <div class="favorit_item_wrapper">
          <div class="favorit_gallery">
            <div class="favorit_gallery_heading">
              <h6 class="sub_heading">Pilihan konsumen</h6>
              <h2 class="heading">Residen Favorit</h2>
            </div>
            <div class="favorit_gallery_photos_wrapper">
              <div class="gallery_photos_item_one">
                <img src={FaboritImgOne} alt="Not Found" />
              </div>
              <div class="gallery_photos_item_two">
                <img src={FaboritImgTwo} alt="Not Found" />
              </div>
            </div>
          </div>
          <div class="favorit_content">
            <h2 class="heading">Bangunan yang dirancang oleh Aristektur Handal</h2>
            <p class="common_paragraph">Tanpa diragukan, properti yang disediakan dalam webiste kami merupakan hasil kerjasama secara profesional dengan para Arsitektur ternama dan Developer yang terpercaya.</p>
            <div class="favorit_content_btn">
              <div class="btn_item">
                <i class="fa-solid fa-phone"></i>
                <a href="#">Hubungi Kami
                </a>
              </div>
              <div class="btn_item">
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
