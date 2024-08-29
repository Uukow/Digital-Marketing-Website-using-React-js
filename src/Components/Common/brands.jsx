// Install Swiper
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import logo1 from '../../Images/PNG/1.png';
import logo2 from '../../Images/PNG/2.png';
import logo3 from '../../Images/PNG/3.png';
import logo4 from '../../Images/PNG/4.png';
import logo5 from '../../Images/PNG/5.png';
import logo6 from '../../Images/PNG/6.png';
import logo7 from '../../Images/PNG/7.png';
import logo8 from '../../Images/PNG/8.png';
import shape1 from '../../Images/shape/39.png'

function Brands() {
  return (
    
      <div className="brand-area pt-200 pt-xs-80 pt-md-120 pb-200 pb-xs-110 pb-md-170 text-light bg-gradient">
      <div className="fullBrand">
        <div className="shape-left-bottom-center">
          <img src={shape1} />
        </div>
        <div className="curve-top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" fill="#ffffff">
            <path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
          </svg>
        </div>
        <div className="container">
          <div className="brand-items">
            <div className="row align-center">
              <div className="col-lg-4">
                <h2>Our Client</h2>
                <h4>Over <strong>15+</strong> client all over the world</h4>
              </div>
              <div className="col-lg-8">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  loop={true}
                  autoplay={{ delay: 3000 }}
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <img src={logo1} alt="Logo 1" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={logo2} alt="Logo 2" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={logo3} alt="Logo 3" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={logo4} alt="Logo 4" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={logo5} alt="Logo 5" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={logo6} alt="Logo 6" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={logo7} alt="Logo 7" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={logo8} alt="Logo 8" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>

<br/>
          <div className="fun-factor-style-one mt-60 mt-xs-50">
            <div className="item-inner">
              <div className="row">
                <div className="col-lg-3 col-md-6 item">
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer" data-to="1800" data-speed="2000">31</div>
                      <div className="operator"></div>
                    </div>
                    <span className="medium">Project Done</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 item">
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer" data-to="98" data-speed="2000">98</div>
                      <div className="operator">%</div>
                    </div>
                    <span className="medium">Positive Rating</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 item">
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer" data-to="12" data-speed="2000">462</div>
                      <div className="operator"></div>
                    </div>
                    <span className="medium">Trusted Users</span>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 item">
                  <div className="fun-fact">
                    <div className="counter">
                      <div className="timer" data-to="35" data-speed="2000">3</div>
                      <div className="operator">+</div>
                    </div>
                    <span className="medium">Years Of Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      </div>
  );
}

export default Brands;
