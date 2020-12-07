import React from 'react';
import liderLogo from '../../../images/lider-logo.svg';
import '../style.css'

const LiderLogo = () => {
  return (
    <div className="lider-logo-container">
      <img src={liderLogo} className="lider-logo" alt="logo" />
    </div>
  )
}

export default LiderLogo