import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function TestimonialsSection({ testimonials }) {
  return (
    <section className="testimonials" id="testimonials">
      <Swiper
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        className="testimonial-carousel"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
            <p style={{ fontFamily: "'Playpen Sans', cursive" }}>{testimonial.quote}</p>
            <h4>- {testimonial.name} {testimonial.country}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default TestimonialsSection;