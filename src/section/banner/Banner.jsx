import React from 'react'
import './banner.css'
import BannerImg from '../../assets/images/banner_image.png'

const Banner = () => {
  return (
    <div>
      <div id="banner">
    <div class="container">
      <div class="banner_wrapper">
        <div class="banner_content">
          <h1>Temukan Hunian Keluarga Sesuai Keinginanmu</h1>
          <p class="common_paragraph">Menyediakan hunian bagi keluarga anda dengan varian pilihan dan lokasi yang strategis di kota anda dengan cara yang lebih mudah.</p>
          <div class="banner_search">
            <from>
              <input placeholder="Search location, properties, residental group" />
              <button type="submit">Search</button>
              <i class="fa-solid fa-location-dot"></i>
            </from>
          </div>
          <div class="banner_counter">
            <div class="counter_item">
              <span>200<span>+</span></span>
              <p class="common_paragraph">Residental grup telah bergabung</p>
            </div>
            <div class="counter_item">
              <span>10<span>+</span></span>
              <p class="common_paragraph">Sudah berpengalaman</p>
            </div>
            <div class="counter_item">
              <span>999<span>+</span></span>
              <p class="common_paragraph">Properti tersedia di berbagai Kota</p>
            </div>
          </div>
        </div>
        <div class="banner_image">
          <picture>
            <img src={BannerImg} />
          </picture>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Banner
