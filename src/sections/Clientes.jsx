import React from 'react';
import Slider from 'react-slick';

function Clientes() {

   // DATOS DE CADA PROYECTOS
   const clients = [
    {
      image: '/image/clientes/laive.png'
    },
    {
      image: '/image/clientes/molicentro.png'
    },
    {
      image: '/image/clientes/sencico.png'
    },
    {
      image: '/image/clientes/francis.png'
    },
    {
      image: '/image/clientes/salud.png'
    },
    {
      image: '/image/clientes/mercado.png'
    },
    {
      image: '/image/clientes/almark.png'
    }
   ]

// CONFIGURACION PARA EL CARRUSEL
const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
    ]
  };


  return (
    <div className="clientes">
      <h1>Nuestros Clientes</h1>
      <Slider className="clientes-slider" {...settings}>
      {
        clients.map((client, index) => (
            <div key={index} className="clientes-slider-card">
              <div className="clientes-slider-card-content">
                <img src={client.image}/>
              </div>
            </div>
        ))
      }
      </Slider>
    </div>
  )
}

export default Clientes
