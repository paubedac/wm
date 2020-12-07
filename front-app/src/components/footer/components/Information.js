import React from 'react';
import '../style.css'

const Information = () => {
  return (
    <div className="col-2">
      <div className="navigation-title">Infórmate</div>
      <div className="navigation-text">
        <a href="https://www.lider.cl/supermercado/info/mediosdepago" target="_blank">Medios de pago</a>
      </div>
      <div className="navigation-text">
        <a href="https://www.lider.cl/supermercado/info/seguro" target="_blank">Pago 100% seguro</a>
      </div>
      <div className="navigation-text">
        <a href="https://www.lider.cl/supermercado/info/ganadoresconcursos" target="_blank">Ganadores de concursos</a>
      </div>
      <div className="navigation-text">
        <a href="https://www.lider.cl/supermercado/info/beneficios" target="_blank">Beneficios Lider.cl</a>
      </div>
      <div className="navigation-text">
        <a href="https://www.tarjetaregalolider.cl/" target="_blank">Tarjeta de regalo</a>
      </div>
      <div className="navigation-text">
        <a href="https://www.recetaslider.cl/" target="_blank">Recetas Lider</a>
      </div>
      <div className="navigation-text">
        <a href="https://www.servifacil.cl/" target="_blank">Servifácil</a>
      </div>
    </div>
  )
}

export default Information;