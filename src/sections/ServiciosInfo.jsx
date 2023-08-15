import React from 'react'

function ServiciosInfo() {

    const IngeniariaList = ['Ejecución de obras civiles', 'Licencia de edificaciones', 'Estudio de mecánica de suelos', 'Topografía', 'Instalaciones eléctricas', 'Proyectos de edificaciones', 'Ensayos de concreto']

    const AcabadosList = ['Sistema Drywall', 'Acabados de pintura', 'Revestimiento de edificaciones', 'Acabado en pisos y porcelanato', 'Carpintería de madera', 'Instalaciones de vidrio y aluminio', 'Estructuras metálicas']

    const Info = [
        {
            Title: 'Ingeniería y Construcción',
            Icon: '/image/servicios/ingenieria.png',
            Info: 'Contamos con experiencia y conocimiento en planificación, ejecución y supervisión de proyectos de edificaciones de infraestructuras publicas y privadas, con los mas altos estándares de calidad. Contamos con un equipo de profesionales con amplia experiencia y conocimiento.',
            Lista: ['Ejecución de obras civiles', 'Licencia de edificaciones', 'Estudio de mecánica de suelos', 'Topografía', 'Instalaciones eléctricas', 'Proyectos de edificaciones', 'Ensayos de concreto'],
            Imagen: '/image/imgServicios/Ingenieria.png',
            Side: 'left'
        },
        {
            Title: 'Acabados y Mantenimiento',
            Icon: '/image/servicios/acabados.png',
            Info: 'El servicio consiste en trabajos de mantenimiento, operatividad y la conservación de las principales instalaciones de nuestros clientes; así como también acabados con una mano de obra calificada y una super• visión constante de las actividades.',
            Lista: ['Sistema Drywall', 'Acabados de pintura', 'Revestimiento de edificaciones', 'Acabado en pisos y porcelanato', 'Carpintería de madera', 'Instalaciones de vidrio y aluminio', 'Estructuras metálicas'],
            Imagen: '/image/imgServicios/acabado.png',
            Side: 'right'
        }
    ]

  return (
    <div className='ServiciosInfo'>

    {/*------------------- INGENIERIA -------------------*/}
      <section className='ServiciosInfo-Ingenieria'>
        <div className='ServiciosInfo-Ingenieria-info'>
            <div className='ServiciosInfo-Ingenieria-info-title'>
                <img src='/image/servicios/ingenieria.png'/>
                <h1>Ingeniería y Construcción</h1>
            </div>
            <p>
                Contamos con experiencia y conocimiento en planificación, ejecución y supervisión de proyectos de edificaciones de infraestructuras publicas y privadas, con los mas altos estándares de calidad. Contamos con un equipo de profesionales con amplia experiencia y conocimiento.
            </p>
            <p>
                Brindamos los siguientes servicios:
            </p>
            <ul>
                {IngeniariaList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <div className='ServiciosInfo-Ingenieria-img'>
            <img src='/image/imgServicios/Ingenieria.png'/>
        </div>
      </section>

      {/*------------------- ACABADOS -------------------*/}
      {/* <section className='ServiciosInfo-Acabados'>
        <div className='ServiciosInfo-Acabados-info'>
            <div className='ServiciosInfo-Acabados-info-title'>
                <img src='/image/servicios/acabados.png'/>
                <h1>Acabados y Mantenimiento</h1>
            </div>
            <p>
                El servicio consiste en trabajos de mantenimiento, operatividad y la conservación de las principales instalaciones de nuestros clientes; así como también acabados con una mano de obra calificada y una super visión constante de las actividades.
            </p>
            <p>
                Brindamos los siguientes servicios:
            </p>
            <ul>
                {AcabadosList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <div className='ServiciosInfo-Acabados-img'>
            <img src='/image/imgServicios/acabado.png'/>
        </div>
      </section> */}

    </div>
  )
}

export default ServiciosInfo;
