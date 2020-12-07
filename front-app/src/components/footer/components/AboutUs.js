import React from 'react';
import '../style.css'

const AboutUs = () => {
  return (
    <div className="col-2">
      <div className="navigation-title">Acerca de Lider</div>
      <div className="navigation-text">
        <a href="https://www.lider.cl/supermercado/info/acercadenosotros" target="_blank">Acerca de nosotros</a>
      </div>
      <div className="navigation-text">
        <a href="https://www.lider.cl/supermercado/info/terminos" target="_blank">Términos y condiciones</a>
      </div>
      <div className="navigation-text">
        <a href="https://www.lider.cl/supermercado/info/privacidad" target="_blank">Política de privacidad</a>
      </div>
      <div className="navigation-text">
        <a href="https://www.lider.cl/supermercado/info/informacion-legal" target="_blank">Información legal</a>
      </div>
      <div className="navigation-text">
        <a href=" http://www.empleoswalmartchile.cl/" target="_blank">Trabaja en Lider</a>
      </div>
    </div>
  )
}

export default AboutUs;