import React from 'react';
import AboutUs from './AboutUs';
import FindUs from './FindUs';
import FollowUs from './FollowUs';
import Help from './Help';
import Information from './Information';
import '../style.css'

const Navigation = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Help />
        <Information />
        <FindUs />
        <AboutUs />
        <FollowUs />
      </div>
    </footer>
  )
}

export default Navigation;