import React from 'react'
import './banner.css'
import BannerImg from '../../assets/images/banner_image.png'

const Banner = () => {
  return (
    <div>
      <div id="banner">
    <div className="container">
      <div className="banner_wrapper">
        <div className="banner_content">
          <h1>Temukan Hunian Keluarga Sesuai Keinginanmu</h1>
          <p className="common_paragraph">Menyediakan hunian bagi keluarga anda dengan varian pilihan dan lokasi yang strategis di kota anda dengan cara yang lebih mudah.</p>
          <div className="banner_search">
            <from>
              <input placeholder="Search location, properties, residental group" />
              <button type="submit">Search</button>
              <i className="fa-solid fa-location-dot"></i>
            </from>
          </div>
          <div className="banner_counter">
            <div className="counter_item">
              <span>200<span>+</span></span>
              <p className="common_paragraph">Residental grup telah bergabung</p>
            </div>
            <div className="counter_item">
              <span>10<span>+</span></span>
              <p className="common_paragraph">Sudah berpengalaman</p>
            </div>
            <div className="counter_item">
              <span>999<span>+</span></span>
              <p className="common_paragraph">Properti tersedia di berbagai Kota</p>
            </div>
          </div>
        </div>
        <div className="banner_image">
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
