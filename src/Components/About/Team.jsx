import React from "react";
import teamPicture from "../../Images/800x800.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

function Team() {
  return (
    <div className="team-style-one-area text-center bg-gray default-padding bottom-less">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4 className="sub-title">Team members</h4>
              <h2 className="title">Expert Team Members</h2>
              <div className="devider"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-center">
          <div className="col-lg-12">
            <div className="row">
              {/* <!-- Single Item --> */}
              <div className="team-style-one col-xl-4 col-lg-6 col-md-6">
                <div className="team-style-one-item">
                  <div className="thumb">
                    <img src={teamPicture} />
                    <ul className="social">
                      <li className="facebook">
                        <a href="#">
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="#">
                          <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="info">
                    <h4>
                      <a href="team-details.html">Fardowsa Sheik Abdirahman</a>
                    </h4>
                    <span>CEO and Founder</span>
                  </div>
                </div>
              </div>
              {/* <!-- End Single Item -->
                        <!-- Single Item --> */}

              {/* <!-- Single Item --> */}
              <div className="team-style-one col-xl-4 col-lg-6 col-md-6">
                <div className="team-style-one-item">
                  <div className="thumb">
                    <img src={teamPicture} />
                    <ul className="social">
                      <li className="facebook">
                        <a href="#">
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="#">
                          <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="info">
                    <h4>
                      <a href="team-details.html">Abdulkadir Uukow</a>
                    </h4>
                    <span>Chief Operating Officer</span>
                  </div>
                </div>
              </div>
              {/* <!-- End Single Item -->
                        <!-- Single Item --> */}

              {/* <!-- Single Item --> */}
              <div className="team-style-one col-xl-4 col-lg-6 col-md-6">
                <div className="team-style-one-item">
                  <div className="thumb">
                    <img src={teamPicture} />
                    <ul className="social">
                      <li className="facebook">
                        <a href="#">
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="#">
                          <FontAwesomeIcon icon={faXTwitter} />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="info">
                    <h4>
                      <a href="team-details.html">Sharmarke Mascuud</a>
                    </h4>
                    <span>Creative Director</span>
                  </div>
                </div>
              </div>
              {/* <!-- End Single Item -->
                        <!-- Single Item --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
