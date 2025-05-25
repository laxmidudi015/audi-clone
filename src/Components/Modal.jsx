import React from "react";
import "animate.css";
import "./Modal.css";
import Scroll from '../Pages/Scroll'
import { Link } from "react-router-dom";
// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function 
Modal() {
  return (
    <>
      <div className="modal">
        <p  data-aos="slide-up">Our New Models</p>
        <Link data-aos="slide-up">View all models</Link>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img 
            src="https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grzyRjtymML79JHj-6Q3tRY_LCM2talRhYgboY-YEE01kgwS8BJDhrGcAkyLzZIMIOxGdyYmZgYK0AMiIZQICPr7QopyCxKDFXrzwzpSRDUMOASCDM7uIa4ujpEwwAhl_xxOkAAA?width=1400&mimetype=image%2Fwebp"
            alt=""
            // className="animate__animated animate__pulse animate__delay-0.5s"
          />
          <div className="slide-content">
            <h2>Q7</h2>
            <button >Configure</button>
            <button >Learn More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grT6IZW1LM5FXvttkx5OyX3LxWaWLSLgZWoC7GeUCCWQhI8KUBCU5VBjAJMm8-iLAD8ZksmRkYWCuAjEgGEODjKy3KKUgsSszVK89MKckQ1DAgEgizu7iGOHr6BAMAWEMXeOkAAAA?width=1400&mimetype=image%2Fwebp"
            alt=""
            // className="animate__animated animate__pulse"
          />
          <div className="slide-content">
            <h2>Q8 e-tron</h2>
            <button >Configure</button>
            <button >Learn More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grz02lGkWJjJa2hZPffV-XVy17SWNbHwMrUBeTNpBgVgUSfMJAguMXA5gEmbcfRHiB-Ew2zAwMrBVARiQDCPDxlRblFCQWJebqlWemlGQIahgQCYTZXVxDHD19ggGAfbgW6QAAAA?width=1400&mimetype=image%2Fwebp"
            alt=""
            // className="animate__animated animate__pulse"
          />
          <div className="slide-content">
            <h2>Q3</h2>
            <button >Configure</button>
            <button >Learn More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f83rh7/2022.png?width=1400&mimetype=image%2Fwebp"
            alt=""
            // className="animate__animated animate__pulse"
          />
           <div className="slide-content">
            <h2>RS e-tron GT</h2>
            <button >Configure</button>
            <button >Learn More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/fygbuy/2023.png?width=1400&mimetype=image%2Fwebp"
            alt=""
            // className="animate__animated animate__pulse"
          />
           <div className="slide-content">
            <h2>Q5</h2>
            <button >Configure</button>
            <button >Learn More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grz-u9a0_XrFq8UvZZ_5X1z2VvqApU-jKwAnUxmgAJphtAgu8nkOA0ZwCTIPOmgQg7EJ_JmpmBgbUCyIhkAAE-vtKinILEosRcvfLMlJIMQQ0DIoEwu4triKOnTzAAHJY1t-kAAAA?width=1400&mimetype=image%2Fwebp"
            alt=""
            // className="animate__animated animate__pulse"
          />
          <div className="slide-content">
            <h2>Q7</h2>
            <button >Configure</button>
            <button >Learn More</button>
          </div>
        </SwiperSlide>
      </Swiper>
      <Scroll/>
    </>
  );
}

export default Modal;
