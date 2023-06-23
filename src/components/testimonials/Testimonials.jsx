import React from "react";
import "./Testimonials.css";
import { Data } from "./Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function Testimonials() {
  return (
    <section className="tst container section" id="testimonials">
      <h2 className="section__title">What People Say</h2>
      <span className="section__subtitle">Testimonials</span>

      <Swiper
        className="tst__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, subtitle, description }) => {
          return (
            <SwiperSlide className="tst__card" key={id}>
              <div className="tst__header">
                <img src={image} alt="" className="tst__img" />
                <div className="tst__title">
                  <h3 className="tst__name">{title}</h3>
                  <p className="tst__subtitle">{subtitle}</p>
                </div>
              </div>
              <p className="tst__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
