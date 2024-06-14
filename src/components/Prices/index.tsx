import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import styles from './index.module.sass';

export const Prices: React.FC = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }
  }, []);

  return (
    <div className={styles.container}>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className={styles.swiper}
        ref={swiperRef}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <p className={styles.swiperSlide__title}>Speaking english</p>
          <p className={styles.swiperSlide__lesson}>35 lessons</p>
          <p className={styles.swiperSlide__hour}>57 hours</p>
          <p className={styles.swiperSlide__price}>2,000.000 lessons</p>
          <button className={styles.swiperSlider__btn}>Try it</button>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
        <p className={styles.swiperSlide__title}>Speaking english</p>
          <p className={styles.swiperSlide__lesson}>35 lessons</p>
          <p className={styles.swiperSlide__hour}>57 hours</p>
          <p className={styles.swiperSlide__price}>2,000.000 lessons</p>
          <button className={styles.swiperSlider__btn}>Try it</button>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
        <p className={styles.swiperSlide__title}>Speaking english</p>
          <p className={styles.swiperSlide__lesson}>35 lessons</p>
          <p className={styles.swiperSlide__hour}>57 hours</p>
          <p className={styles.swiperSlide__price}>2,000.000 lessons</p>
          <button className={styles.swiperSlider__btn}>Try it</button>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
        <p className={styles.swiperSlide__title}>Speaking english</p>
          <p className={styles.swiperSlide__lesson}>35 lessons</p>
          <p className={styles.swiperSlide__hour}>57 hours</p>
          <p className={styles.swiperSlide__price}>2,000.000 lessons</p>
          <button className={styles.swiperSlider__btn}>Try it</button>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
        <p className={styles.swiperSlide__title}>Speaking english</p>
          <p className={styles.swiperSlide__lesson}>35 lessons</p>
          <p className={styles.swiperSlide__hour}>57 hours</p>
          <p className={styles.swiperSlide__price}>2,000.000 lessons</p>
          <button className={styles.swiperSlider__btn}>Try it</button>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
        <p className={styles.swiperSlide__title}>Speaking english</p>
          <p className={styles.swiperSlide__lesson}>35 lessons</p>
          <p className={styles.swiperSlide__hour}>57 hours</p>
          <p className={styles.swiperSlide__price}>2,000.000 lessons</p>
          <button className={styles.swiperSlider__btn}>Try it</button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

