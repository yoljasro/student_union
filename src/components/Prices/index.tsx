// components/ImageSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import styles from './index.module.css';

export const Prices: React.FC = () => {
  const images = [
    { id: 1, src: '/assets/img/logo.png', alt: 'Image 1' },
    { id: 2, src: '/assets/img/logo.png', alt: 'Image 2' },
    { id: 3, src: '/assets/img/logo.png', alt: 'Image 3' },
    { id: 4, src: '/assets/img/logo.png', alt: 'Image 4' },
    { id: 5, src: '/assets/img/logo.png', alt: 'Image 5' },
    { id: 6, src: '/assets/img/logo.png', alt: 'Image 6' },
  ];

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand' as const,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className={styles.tag}>
        <h1>Image Gallery</h1>
      </div>
      <div className={styles.imgslider}>
        <Slider className='slider' {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} />
              <p className='text'>{item.alt}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

