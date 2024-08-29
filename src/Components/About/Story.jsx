import React from "react";
import illustrator1 from "../../Images/illustration/18.png";
import illustrator2 from "../../Images/illustration/19.png";
import img from "../../Images/800x800.png";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Story() {
  return (
    <div className="about-area circle-shape-right-bottom default-padding">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-6 pr-70 pr-md-15 pr-xs-15">
            <div className="about-style-two">
              <div className="thumb">
                <img className="wow fadeInLeft" src={img} />
                <div className="sub-item">
                  <img
                    className="wow fadeInDown"
                    data-wow-delay="300ms"
                    src={illustrator1}
                  />
                  <img
                    className="wow fadeInRight"
                    data-wow-delay="500ms"
                    src={illustrator2}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 pl-60 pl-md-15 pl-xs-15">
            <div className="about-style-one">
              <h4 className="sub-heading">About Us</h4>
              <h2 className="heading">
                Uukow Advertising Agency
              </h2>
              <p>
              is a Solution dynamic and forward-thinking agency specializing in comprehensive digital solutions. Our expertise spans social media marketing, website creation and management, and full-scale branding services. Since our inception in [2024], we've been dedicated to reshaping the digital landscape for businesses of all sizes.
              </p>
              <a
                href="notfound"
                className="popup-youtube video-play-button with-text"
              >
                <div className="effect"></div>
                <span>
                  <i className="fas fa-play">
                    {" "}
                    <FontAwesomeIcon icon={faPlay} />{" "}
                  </i>{" "}
                  OUR STORY
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
