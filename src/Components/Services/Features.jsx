import React from 'react';
import '../../Styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRankingStar, faChartLine} from '@fortawesome/free-solid-svg-icons';

function Features() {
  return (
    <div className="default-padding-top bottom-less shape-left-center">
      <div className="shape-left-bottom"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4 className="sub-title">Our Features</h4>
              <h2 className="title">Increase organic website <br /> traffic to reach goal</h2>
              <div className="devider"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="relative">
          <div className="row">
            {/* <!-- Single Item --> */}
            <div className="col-lg-4 col-md-6 feature-style-one">
              <div className="item">
                <div className="bg"></div>
                <div className="icon">
                  <i className="flaticon-data-analysis"></i>
                </div>
                <h4><a href="services-details.html">Data Analytics</a></h4>
                <p>
                  Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                </p>
              </div>
            </div>
            {/* <!-- End Single Item --> */}
            {/* <!-- Single Item --> */}
            <div className="col-lg-4 col-md-6 feature-style-one">
              <div className="item">
                <div className="bg"></div>
                <div className="icon">
                  <i className="flaticon-data-analysis-1"></i>
                </div>
                <h4><a href="services-details.html">Website Growth</a></h4>
                <p>
                  Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                </p>
              </div>
            </div>
            {/* <!-- End Single Item --> */}
            {/* <!-- Single Item --> */}
            <div className="col-lg-4 col-md-6 feature-style-one">
              <div className="item">
                <div className="bg"></div>
                <div className="icon">
                  <i className="flaticon-startup-3">
                  </i>
                </div>
                <h4><a href="services-details.html">Seo Ranking</a></h4>
                <p>
                  Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                </p>
              </div>
            </div>
            {/* <!-- End Single Item --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
