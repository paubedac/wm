import React from 'react';
import FacebookLogo from '../../../images/Facebook.svg'
import InstagramLogo from '../../../images/Instagram.svg'
import TwitterLogo from '../../../images/Twitter.svg'
import YoutubeLogo from '../../../images/Youtube.svg'
import '../style.css'

const FollowUs = () => {
  return (
    <div className="col-2">
      <div className="navigation-title">Síguenos</div>
      <div className="d-flex">
        <a href="https://www.twitter.com/lidercl" className="mr-20" target="_blank" rel="noopener noreferrer">
          <img alt="twitter-logo" src={TwitterLogo} width="18" /></a>
        <a href="https://www.facebook.com/lidercl" className="mr-20" target="_blank" rel="noopener noreferrer">
          <img alt="facebook-logo" src={FacebookLogo} width="18" />
        </a>
        <a href="https://www.youtube.com/user/supermercadoslider" className="mr-20" target="_blank" rel="noopener noreferrer">
          <img alt="youtube-logo" src={YoutubeLogo} width="18" />
        </a>
        <a href="https://www.instagram.com/lider_cl" target="_blank" rel="noopener noreferrer">
          <img alt="instagram-logo" src={InstagramLogo} width="18" />
        </a>
      </div>
    </div>
  )
}

export default FollowUs;