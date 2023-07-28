import React from 'react'

function Servicios() {
  return (
    <div className='servicios'>
      <h1>SERVICIOS</h1>
      <div className='servicios-list'>
        <div className='servicios-list-top'>
            <img src='/image/servicios/ingenieria.png' />
            <span>Ingeniería y Construcción</span>
        </div>
        <div className='servicios-list-bottom'>
            <img src='/image/servicios/electrico.png' />
            <span>Mantenimiento Electrico</span>
        </div>
        <div className='servicios-list-top'>
            <img src='/image/servicios/acabados.png' />
            <span>Acabados y Mantenimiento</span>
        </div>
        <div className='servicios-list-bottom'>
            <img src='/image/servicios/pisos.png' />
            <span>Pisos Industriales</span>
        </div>
        <div className='servicios-list-top'>
            <img src='/image/servicios/pavimentacion.png' />
            <span>Pavimentación Urbana</span>
        </div>
        
       
        
        
        
      </div>
    </div>
  )
}

export default Servicios
