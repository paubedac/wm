import React from 'react';
import LogoWMCL from '../../../images/wmt_chile.jpg'
import LogoLider from '../../../images/lider.jpg'
import LogoExpress from '../../../images/express.jpg'
import LogoAcuenta from '../../../images/acuenta.jpg'
import LogoCentralMayorista from '../../../images/central_mayorista.jpg'
import LogoMiClubLider from '../../../images/mi_club_lider.jpg'
import '../style.css'

const Brands = () => {
  return (
    <div className="bg-white">
      <div className="brands-container">
        <div className="left">
          <p className="our-brands">Nuestras empresas</p>
        </div>
        <div className="left">
          <a href="http://www.walmartchile.cl/" className="pl-10 pr-10" target="_blank" rel="noopener noreferrer">
            <img alt="walmart-chile" height="34" src={LogoWMCL} />
          </a>
          <a href="https://www.lider.cl/" className="pl-10 pr-10" target="_blank" rel="noopener noreferrer">
            <img alt="lider" height="34" src={LogoLider} />
          </a>
          <a href="https://www.lider.cl/" className="pl-10 pr-10" target="_blank" rel="noopener noreferrer">
            <img alt="lider-express" height="34" src={LogoExpress} />
          </a>
          <a href="http://www.superbodegaacuenta.cl/" className="pl-10 pr-10" target="_blank" rel="noopener noreferrer">
            <img alt="acuenta" height="34" src={LogoAcuenta} />
          </a>
          <a href="https://www.centralmayorista.cl/" className="pl-10 pr-10" target="_blank" rel="noopener noreferrer">
            <img alt="central-mayorista" height="34" src={LogoCentralMayorista} />
          </a>
          <a href="http://www.miclublider.cl/" className="pl-10 pr-10" target="_blank" rel="noopener noreferrer">
            <img alt="mi-club-lider" height="34" src={LogoMiClubLider} />
          </a>
        </div>
      </div>
      <div>
        <div className="footer-divider"></div>
      </div>
      <div className="property-note">
        <p>Lider.cl - Razón Social: Lider Domicilio Ventas y Distribución Limitada, RUT: 78.968.610-6, es administrada y representada por Sermob Limitada, la que a su vez es representada por Matías Puente S. Dirección: Avenida del Valle N° 725, Huechuraba, Chile. </p>
      </div>
    </div>
  )
}

export default Brands