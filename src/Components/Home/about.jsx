import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faPlay} from '@fortawesome/free-solid-svg-icons';
import illustration1 from '../../Images/illustration/a1.png';
import illustration2 from '../../Images/illustration/9.png';
import progress1 from '../../Images/icon/progress.png';
import chart1 from '../../Images/icon/chart.png';
import illustration3 from '../../Images/shape/4.png';

function About() {
  return (
    <div className="about-area circle-shape-right-bottom default-padding">
        <div className="shape-right-center" style={{backgroundImage: 'url(assets/img/shape/20.png)'}}></div>
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <div className="about-style-four">
                        <div className="thumb">
                            <img src={illustration1} />
                            <img src={illustration2} />
                            <img src={progress1} />
                            <img src={chart1} />
                            <img src={illustration3} />
                            <div className="icon">
                                <i className="arrowUp"><FontAwesomeIcon icon={faArrowUp}/></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 pl-60 pl-md-15 pl-xs-15">
                    <div className="about-style-one">
                        <h4 className="sub-heading">About Us</h4>
                        <h2 className="about_home_heading">Uukow Advertising Agency</h2>
                        <p>
                        Solutions is a dynamic and forward-thinking agency specializing in comprehensive digital solutions. Our expertise spans social media marketing, website creation and management, and full-scale branding services. Since our inception in [2024], we've been dedicated to reshaping the digital landscape for businesses of all sizes.
                        </p>
                        <a href="https://www.youtube.com/watch?v=owhuBrGIOsE" className="popup-youtube video-play-button with-text">
                            <div className="effect"></div>
                            <span><i className="fas fa-play"><FontAwesomeIcon icon={faPlay}/></i> OUR STORY</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default About;
