import React from 'react';
import Slider from 'react-slick';
import '../styles/offers.css';

const offers = [
  { id: 1, title: '50% OFF en electrónicos', image: 'https://fakeimg.pl/800x300?text=banner+placeholder', link: '/products/electronics' },
  { id: 2, title: 'Descuentos en ropa de invierno', image: 'https://fakeimg.pl/800x300?text=banner+placeholder', link: '/products/clothing' },
  { id: 3, title: 'Aprovecha el 2x1 en accesorios', image: 'https://fakeimg.pl/800x300?text=banner+placeholder', link: '/products/accessories' }
];

const OffersBanner = () => {
  const settings = {
    dots: true,               // Mostrar los puntos de navegación
    infinite: true,           // Repetir el slider de manera infinita
    speed: 500,               // Velocidad del desplazamiento
    slidesToShow: 1,          // Cantidad de slides a mostrar por vez
    slidesToScroll: 1,        // Cantidad de slides que se desplazan al hacer scroll
    autoplay: true,           // Activar el auto-play
    autoplaySpeed: 3000,      // Velocidad de auto-play (ms)
  };

  return (
    <div className="offers-banner">
      <Slider {...settings}>
        {offers.map((offer) => (
          <div key={offer.id} className="offer-slide">
            <a href={offer.link}>
              <img src={offer.image} alt={offer.title} className="offer-image" />
              <div className="offer-title">
                <h2>{offer.title}</h2>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OffersBanner;
