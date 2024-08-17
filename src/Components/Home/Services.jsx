import React from "react";
import ba from "../../Images/shape/ba.png";

function Services() {
  return (
    <div className="services-style-six-area default-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="service-six-heading text-light">
              <h5 className="sub-title">Our Services</h5>
              <h2 className="heading">
                Best services and creative dynamic solutions
              </h2>
              <img src={ba} />
            </div>
          </div>

          <div className="col-lg-7 pl-50 pl-md-15 pl-xs-15 mt--30 mt-md-30 mt-xs-0">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="service-six-item">
                  <i className="flaticon-solution"></i>
                  <h4>
                    <a href="#">Digital Marketing</a>
                  </h4>
                  <p>
                    Engaging and results-driven social media campaigns. and
                    Strategic planning and execution across various platforms.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="service-six-item">
                  <i className="flaticon-graph"></i>
                  <h4>
                    <a href="#">Website Creation and Management</a>
                  </h4>
                  <p>
                    Customized website design reflecting brand identity. and
                    Ongoing management and updates for optimal performance.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="service-six-item">
                  <i className="flaticon-analysis"></i>
                  <h4>
                    <a href="#">Branding Services</a>
                  </h4>
                  <p>
                    Logo design and comprehensive branding solutions. and
                    Crafting a distinct and memorable brand identity.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="service-six-item">
                  <i className="flaticon-marketing-agent"></i>
                  <h4>
                    <a href="#">Product Marketing</a>
                  </h4>
                  <p>
                    Launch strategies for new products to ensure market success.
                    Market research, positioning, and messaging tailored to your
                    target audience. Development of compelling product content
                    and sales collateral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
