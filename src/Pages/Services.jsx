import React, { useEffect } from 'react'
import '../Styles/Style.css'
import '../Styles/Services.css'
import useToggle from '../Components/Hooks/useToggle'
import Drawer from '../Components/Mobile/Drawer'
import HeadTitle from '../Components/Common/HeadTitle'
import Servicess from '../Components/Home/Services'
import Features from '../Components/Services/Features'

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [drawer, drawerAction] = useToggle(false);
  return (
    <>
    <Drawer drawer={drawer} action={drawerAction.toggle} />
    <HeadTitle title="Services" />
    
      <Features/>
      <Servicess/>
    
    </>
  )
}

export default Services
