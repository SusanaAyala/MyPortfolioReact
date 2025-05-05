import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Superwlad from '../../assets/superwlad.png';
import Stuart from '../../assets/stuart.png';
import Andrew from '../../assets/andrew.ferguson.png';
import Oli from '../../assets/apple-touch-icon.png';

function TestimonialsSection() {
  return (
    <section className="testimonials" id="testimonials">
      <Swiper
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        className="testimonial-carousel"
      >
        <SwiperSlide className="testimonial-slide">
          <img src={Superwlad} alt="Wladimir Singer" className="testimonial-img" />
          <p style={{ fontFamily: "'Playpen Sans', cursive" }}>
            "Outstanding Professional! I had the pleasure of working with Susie and the experience was exceptional. She delivered top-quality results with perfect timing and demonstrated remarkable expertise in her field. Her professionalism, attention to detail, and clear communication set her apart. I highly recommend her to anyone seeking reliable, high-caliber work. Thank you for an amazing collaboration!"
          </p>
          <h4>- Wladimir Singer 🇺🇸</h4>
        </SwiperSlide>
        <SwiperSlide className="testimonial-slide">
          <img src={Stuart} alt="Stuart Miller" className="testimonial-img" />
          <p style={{ fontFamily: "'Playpen Sans', cursive" }}>
            "Susie has been an absolute pleasure to work with! She exceeded expectations, from designing to building my Shopify store. Even after the project was completed, she continued to provide support beyond the original scope. Although my unforeseen circumstances paused further work, I truly appreciate her dedication and expertise and look forward to collaborating again in the future."
          </p>
          <h4>- Stuart Miller 🇬🇧</h4>
        </SwiperSlide>
        <SwiperSlide className="testimonial-slide">
          <img src={Andrew} alt="Andrew Ferguson" className="testimonial-img" />
          <p style={{ fontFamily: "'Playpen Sans', cursive" }}>
            "Susie is an exceptional colleague to work with, she has demonstrated that she is consistent and diligent in completing work set out before her while under pressure and adhering to complex specifications. I was impressed by her attention to detail and positive attitude within a team environment."
          </p>
          <h4>- Andrew Ferguson 🇬🇧</h4>
        </SwiperSlide>
        <SwiperSlide className="testimonial-slide">
          <img src={Oli} alt="Oliver Garas" className="testimonial-img" />
          <p style={{ fontFamily: "'Playpen Sans', cursive" }}>
            "Susie is a great person to work with. She has a fantastic attitude, a strong sense of professionalism, and an excellent eye for detail. I truly appreciate her dedication and work ethic. She will be a valuable asset to any organization she joins."
          </p>
          <h4>- Oliver Garas 🇦🇺</h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default TestimonialsSection;