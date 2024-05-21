import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '../styles/style.css'; 

// Import images
import gallery1 from '../images/gallery-1.jpg';
import gallery2 from '../images/gallery-2.jpg';
import gallery3 from '../images/gallery-3.jpg';
import gallery4 from '../images/gallery-4.jpg';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h2 className="heading">gallery</h2>
      <Swiper
        modules={[Navigation]}
        navigation={true} // Enable navigation
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
        }}
        className="gallery-slider"
      >
        <SwiperSlide>
          <div className="image">
            <img src={gallery1} alt="Gallery 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <img src={gallery2} alt="Gallery 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <img src={gallery3} alt="Gallery 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <img src={gallery4} alt="Gallery 4" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Gallery;
