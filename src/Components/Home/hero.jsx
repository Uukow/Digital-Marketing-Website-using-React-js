import React from 'react'
import illustration from '../../Images/illustration/8.png'
import '../../Styles/home.css'
import { Link } from 'react-router-dom'
function hero() {
  return (
    <div class="banner-style-one-area overflow-hidden bg-gradient text-light">
    {/* <!-- Single Item --> */}
    <div class="banner-style-one">
        <div class="container">
            <div class="content">
                <div class="row align-center">
                    <div class="col-xl-6 col-lg-6">
                        <div class="info pr-35 pr-xs-0 pr-md-0">
                            <h2 className='hero_title'>Uukow Advertising Agency</h2>
                            <p className='hero-text'>
                            Where we craft compelling narratives and dynamic strategies to elevate your business in the digital realm. As a leading social media marketing agency, we specialize in cultivating your online presence and connecting you with your target audience effectively
                            </p>
                            <div class="button">
                                <Link to="/about" className='btn btn-md btn-theme animation'>Get in touch</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-6 col-lg-6">
                        <div class="thumb">
                            <img src= {illustration} alt="Thumb" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="shape-bottom-center"></div>
        <div class="shape-top-right"></div>
        <div class="shape-left-top"></div>
    </div>
    {/* <!-- End Single Item --> */}
</div>







  )
}

export default hero
