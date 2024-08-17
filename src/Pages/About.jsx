import React, { useEffect } from 'react'
import '../Styles/Style.css'
import Story from '../Components/About/Story'
import Brands from '../Components/Common/brands'
import Team from '../Components/About/Team'
import HeadTitle from '../Components/Common/HeadTitle';
import Drawer from '../Components/Mobile/Drawer';
import useToggle from '../Components/Hooks/useToggle';
import Testimonial from '../Components/About/Testimonial'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [drawer, drawerAction] = useToggle(false);
  return (
    <div>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeadTitle
                title="About Us"
            />
      <Story/>
      <Brands/>
      <Team/>
      <Testimonial/>
      
    </div>
  )
}

export default About
