import React from 'react';
import '../style.css'

const Help = () => {
  return (
    <div className="col-2">
      <div className="navigation-title">¿Necesitas Ayuda?</div>
      <div className="navigation-text">
        <a href="https://www.lider.cl/supermercado/info/faq" target="_blank">Preguntas frecuentes</a>
      </div>
      <div className="navigation-text">
        <a href="/catalogo/help/servicio-tecnico" target="">Servicio técnico</a>
      </div>
      <div className="navigation-text">
        <a href="http://walmartchile.paperless.cl/BoletaWeb/" target="_blank">Consulta tu boleta</a>
      </div>
      <div className="navigation-text">
        <a href="https://www.lider.cl/supermercado/info/devoluciones" target="_blank">Devoluciones y cambios</a>
      </div>
      <div className="navigation-text">
        <a href="https://www.librodigitalchile.cl/Store/MenuLidercl/ODIw" target="_blank">Consultas y reclamos</a>
      </div>
    </div>
  )
}

export default Help;