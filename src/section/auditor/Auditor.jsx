import React from 'react'
import './auditor.css'
import ImageOne from '../../assets/images/auditor_img1.jpg'
import ImageTwo from '../../assets/images/auditor_img2.jpg'
import ImageThree from '../../assets/images/auditor_img3.jpg'

const Auditor = () => {
  return (
    <section id="auditor">
      <div className="container">
        <div className="auditor_heading">
          <h6 className="sub_heading">Pilihan Auditor</h6>
          <h2 className="heading">Residen Berbagai Kota</h2>
        </div>
        <div className="auditor_content_wrapper">
          <div className="auditor_content_item">
            <div className="img">
              <picture>
                <img src={ImageOne} alt="img" />
              </picture>
            </div>
            <h5>Magnolia Surabaya</h5>
            <p className="common_paragraph">Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136</p>
          </div>
          <div className="auditor_content_item">
            <div className="img">
              <picture>
                <img src={ImageTwo} alt="img" />
              </picture>
            </div>
            <h5>Pinang Residences</h5>
            <p className="common_paragraph">Jl. Deplu Raya No.16 RT.5, RW.003
              Bintaro, Pesanggrahan, Jakarta Selatan 12330</p>
          </div>
          <div className="auditor_content_item">
            <div className="img">
              <picture>
                <img src={ImageThree} alt="img" />
              </picture>
            </div>
            <h5>South Grove</h5>
            <p className="common_paragraph">1 No.1, RT.1/RW.1, Lb. Bulus, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440</p>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Auditor
