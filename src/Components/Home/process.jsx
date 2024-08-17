import React from 'react'
import plan from '../../Images/icon/plan.png';
import reviews from '../../Images/icon/customer-review.png';
import target from '../../Images/icon/target.png';
import megaphone from '../../Images/icon/megaphone.png';
import Drawer from '../Mobile/Drawer.jsx';
import useToggle from '../Hooks/useToggle.js'

function Process() {
  return (
    
    <>
              
    <div className="process-area text-center bg-cover bg-theme default-padding text-light">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="site-heading text-center">
                        <h4 className="sub-title">Work Flow</h4>
                        <h2 className="work_title">Our Working Process</h2>
                        <div className="devider"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="process-style-one-box">
                <div className="row">
                    <div className="col-lg-3 col-md-6 process-style-one">
                        <div className="icon">
                            <img src={plan} />
                            <span>01</span>
                        </div>
                        <h4>Planning</h4>
                    </div>
                    <div className="col-lg-3 col-md-6 process-style-one">
                        <div className="icon">
                            <img src={reviews} />
                            <span>02</span>
                        </div>
                        <h4>Research Project</h4>
                    </div>
                    <div className="col-lg-3 col-md-6 process-style-one">
                        <div className="icon">
                            <img src={target} />
                            <span>03</span>
                        </div>
                        <h4>Targeting</h4>
                    </div>
                    <div className="col-lg-3 col-md-6 process-style-one">
                        <div className="icon">
                            <img src={megaphone} />
                            <span>04</span>
                        </div>
                        <h4>Final result</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Process
