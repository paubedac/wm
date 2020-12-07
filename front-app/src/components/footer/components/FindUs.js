import React from 'react';
import '../style.css'

const FindUs = () => {
  return (
    <div className="col-2">
      <div className="navigation-title">Encuéntranos</div>
      <div className="navigation-text">
        <a href="https://www.lider.cl/tiendas" target="_blank">Nuestros locales</a>
      </div>
      <div className="navigation-text">
        <a href="https://www.lider.cl/supermercado/info/pickup" target="_blank">Tiendas con Pickup</a>
      </div>
      <div className="navigation-text">
        <a href="https://www.lider.cl/supermercado/info/CoberturaSupermercado" target="_blank">Cobertura supermercado</a>
      </div>
    </div>
  )
}

export default FindUs;