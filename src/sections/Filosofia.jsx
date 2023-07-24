import React from 'react'
import FigValor from '../components/FigValor';

function Filosofia() {

    const valores = [
        {
            icon: '/image/vision.png',
            text: 'Es afianzarnos como una empresa líder en el mercado nacional con proyección internacional en servicios  de ingeniería, construcción, mantenimiento y concesiones; sustentada en el trabajo responsable,  dedicado   e  innovador de sus directivos y colaboradores.'
        },
        {
            icon: '/image/mision.png',
            text: 'Es colaborar de manera proactiva en el desarrollo de nuestro país y del mundo con la más minuciosa atención al crecimiento y  necesidades de nuestros clientes. Desarrollando proyectos, y construcciones con los más exigentes estándares, en seguridad, calidad y puntualidad.'
        },
        {
            icon: '/image/valores.png',
            text: 'Nuestro enfoque se basa en la seguridad, el respeto, la excelencia, la creatividad, el compromiso, la transparencia y el trabajo en equipo. Estos valores fundamentales nos guían en nuestra búsqueda constante de ofrecer soluciones de calidad, innovadoras y confiables a nuestros clientes.'
        },

    ]

  return (
    <div className='filo'>
      {
        valores.map((obj, index) => (
          <FigValor key={index} obj={obj} />
        ))
      }
    </div>
  )
}

export default Filosofia;
