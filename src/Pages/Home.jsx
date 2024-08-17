import React, { useEffect } from 'react'
import Hero from '../Components/Home/hero'
import Features from '../Components/Home/Features'
import '../Styles/Style.css'
import About from '../Components/Home/about'
import Brands from '../Components/Common/brands'
import Process from '../Components/Home/process'
import Services from '../Components/Home/Services'
import Testimonial from '../Components/Home/Testimonial'
import Contact from '../Components/Home/Contact'
import Footer from '../Components/Home/Footer'
import Mission from '../Components/Home/Mession'
import Projectss from '../Components/Home/Projects'


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    {/* <Projectss/> */}
      <Hero />
      <Features />
      <About/>
      <Brands />
      <Services/>
      <Process/>
      <Testimonial/>
      <Mission/>
      <Contact/>
    </div>
  )
}

export default Home
