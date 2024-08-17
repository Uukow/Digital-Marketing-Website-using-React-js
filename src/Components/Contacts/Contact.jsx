import React from "react";
import Title from "../Common/Title";
import "../../Styles/Contact.css";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Contact() {
  return (
    <section className={`appie-service-area pt-90 pb-100`} id="service">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="appie-single-service text-center mt-30 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="200ms"
            >
              <div className="icon">
                <i className="flaticon">
                  <FontAwesomeIcon icon={faPhone} />
                </i>
              </div>
              <h4 className="appie-title">Contact Phone Number</h4>
              <p className="descr">+252 615 031623</p>
              <p className="descr">+252 615 444164</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="400ms"
            >
              <div className="icon">
                <i className="flaticon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
              </div>
              <h4 className="appie-title">Our Email Address</h4>
              <p className="descr">info@uukow.com</p>
              <p className="descr">support@uukow.com</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
              data-wow-duration="2000ms"
              data-wow-delay="600ms"
            >
              <div className="icon">
                <i className="flaticon">
                  <FontAwesomeIcon icon={faLocation} />
                </i>
              </div>
              <h4 className="appie-title">Our Location</h4>
              <p className="descr">Shaneemo Mogadishu, Wadajir Mogadishu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
