import React, { useEffect } from 'react';
import Contact from '../Components/Contacts/Contact';
import useToggle from '../Components/Hooks/useToggle';
import HeadTitle from '../Components/Common/HeadTitle';
import Drawer from '../Components/Mobile/Drawer';

function Contacts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [drawer, drawerAction] = useToggle(false);

  return (
    <>
      <Drawer drawer={drawer} action={drawerAction.toggle} />
      <HeadTitle title="Contact Us" />
      <div>
        <Contact />
      </div>
    </>
  );
}

export default Contacts;
