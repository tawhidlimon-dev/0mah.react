import React from 'react'
import './communication.css'
import ImageOne from '../../assets/images/communication_logo1.png'
import ImageTwo from '../../assets/images/communication_logo2.png'

const Communication = () => {
  return (
    <section id="communication">
    <div className="container">
      <div className="communication_wrapper">
        <div className="communication_contuct">
          <h2 className="heading">Hubungi Kami</h2>
          <div className="call_email_wrapper">

            <div className="call_wrapper">
              <div className="wrapper">
                <div className="call_logo">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="call">
                  <h6 className="sub_heading">Call</h6>
                  <span>+6281232936733</span>
                </div>
              </div>
              <div className="call_now">
                <a href="#">Call Now</a>
              </div>
            </div>
            <div className="email_box">
              <div className="email_wrapper">
                <div className="email_icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="email_address">
                  <h6 className="sub_heading">email</h6>
                  <span>omahindev@gmail.com</span>
                </div>
              </div>
              <div className="email_btn">
                <a>Email Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="communication_logo">
          <h2 className="heading">Penghargaan</h2>
          <div className="communication_logo_wrapper">
            <div className="logo_item1">
              <picture>
                <img src={ImageOne} alt="Not Found" />
              </picture>
            </div>
            <div className="logo_item2">
              <picture>
                <img src={ImageTwo} alt="Not Found" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Communication
