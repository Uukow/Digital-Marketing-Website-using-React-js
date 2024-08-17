import React, { useEffect, useState } from "react";
import "../../Styles/About.css";
import { Swiper, SwiperSlide } from "swiper/react";
import animate1 from "../../Images/shape/anim-1.png";
import animate2 from "../../Images/shape/anim-2.png";
import image100 from "../../Images/user.png";
import qoute from "../../Images/quote.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

function Testimonial() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("Models/Customers.json")
      .then((response) => {
        console.log("Response Status: ", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("fetch data:", data);
        setNames(data);
      })
      .catch((error) => console.log("Error Fetching Data", error));
  }, []);

  return (
    <div className="testimonials-area overflow-hidden bg-gray default-padding">
      <div className="shape-animation">
        <img src={animate1} alt="Animation 1" />
      </div>
      <div className="container">
        <div className="row align-center">
          <div className="testimonial-style-one col-xl-4 col-lg-5">
            <h4 className="sub-heading">Our Customers</h4>
            <h2 className="customer_heading">What customers feedback about us</h2>
            <div className="rating-provider">
              <div className="thumb">
                <img src={image100} alt="Customer" />
                <img src={image100} alt="Customer" />
                <img src={image100} alt="Customer" />
                <img src={image100} alt="Customer" />
              </div>
              <div className="ratings">
                <div className="rating-icon">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <h4>(4.8/5)</h4>
                </div>
                <span>Based on 18 reviews</span>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
          <div className="testimonial-style-one pl-65 pl-md-15 pl-xs-15 col-xl-6 col-lg-7">
            <div className="shape-right-bottom">
              <img src={animate2} alt="Animation 2" />
            </div>
            <div className="testimonial-style-one-carousel">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
              >
                {names.map((name, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonial-style-one-item">
                      <div className="quote-icon">
                        <img src={qoute} alt="Quote" />
                      </div>
                      <div className="item">
                        <div className="provider">
                          <div className="info">
                            <h4 className="customerh4">{name.Name}</h4>
                            <span>{name.Title}</span>
                          </div>
                        </div>
                        <div className="content">
                          <p>{name.contents}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                
              </Swiper>
              <div className="lines">
                <FontAwesomeIcon icon={faArrowLeft} />
                <FontAwesomeIcon icon={faMinus} />
                <FontAwesomeIcon icon={faMinus} />
                <FontAwesomeIcon icon={faMinus} />
                <FontAwesomeIcon icon={faMinus} />
                <FontAwesomeIcon icon={faMinus} />
                <FontAwesomeIcon icon={faMinus} />
                <FontAwesomeIcon icon={faMinus} />
                <FontAwesomeIcon icon={faMinus} />
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
