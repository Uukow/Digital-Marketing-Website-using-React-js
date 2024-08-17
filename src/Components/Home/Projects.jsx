import React from 'react'
import pro1 from '../../assets/img/600x800.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

function Projects() {
  return (
    <div>
         <div className="project-area default-padding">
        {/* <!-- Shape --> */}
        <div className="shape-left-bottom"></div>
        {/* <!-- End Shape -->
        <!-- Shape --> */}
        <div className="shape-right-top"></div>
        {/* <!-- End Shape --> */}
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="site-heading text-center">
                        <h4 className="sub-title">Previous Projects</h4>
                        <h2 className="title">Our Featured Projects</h2>
                        <div className="devider"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="projects-box">
                
                <div className="row">

                    <div className="col-lg-12">
                        <div className="row">
                            {/* <!-- Single Item --> */}
                            
                            <div className="col-lg-4 col-md-6 single-item">
                                <div className="project-style-one">
                                    <div className="thumb">
                                        <img src={pro1} alt="Thumb" />
                                    </div>
                                    <div className="content">
                                        <a className="button" href="project-details.html"><i className="fas fa-angle-right"><FontAwesomeIcon icon={faAngleRight} /></i></a>
                                        <h4><a href="project-details.html">Traffic Management</a></h4>
                                        <ul>
                                            <li>
                                                Profit
                                            </li>
                                            <li>
                                                Increment
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item -->
                            <!-- Single Item --> */}
                            <div className="col-lg-4 col-md-6 single-item">
                                <div className="project-style-one">
                                    <div className="thumb">
                                        <img src={pro1} alt="Thumb" />
                                    </div>
                                    <div className="content">
                                        <a className="button" href="project-details.html"><i className="fas fa-angle-right"></i></a>
                                        <h4><a href="project-details.html">Income growth</a></h4>
                                        <ul>
                                            <li>
                                                Management
                                            </li>
                                            <li>
                                                Advertising
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Item --> */}
                        </div>
                    </div>
    
                    <div className="col-lg-12 mt-50 mt-xs-0 mt-md-20">
                        <div className="project-more-info">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4">
                                    <h2>Digal is a ready to protect <br />  your businesses </h2>
                                </div>
                                <div className="col-xl-5 col-lg-4 pl-35 pl-md-15 pl-xs-15">
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, simply free text by injected humour, or randomised.
                                    </p>
                                </div>
                                <div className="col-xl-3 col-lg-4">
                                    <a className="btn btn-md btn-gradient animation" href="project.html">View All Projects <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Projects
