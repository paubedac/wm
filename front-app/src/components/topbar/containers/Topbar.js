import React from 'react';
import LiderLogo from '../components/LiderLogo'
import CartButton from '../components/CartButton'
import '../style.css'

const TopBar = () => {
  return (
    <div className="lider-header">
      <LiderLogo />
      <CartButton />
    </div>
  )
}

export default TopBar