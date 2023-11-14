import "./Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/slider";

const Residencies = () => {
  return (
    <section className="residencies-section">
      <div className="residencies-container">
        <div className="residencies-heading">
          <h2>
            <span>Best Choices</span>
            <br />
            Popular Residencies
          </h2>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, index) => {
            const { name, price, detail, image } = card;
            return (
              <SwiperSlide key={index}>
                <div className="card">
                  <img src={image} alt={name} />
                  <div className="card-info">
                    <h3>
                      <span>$</span>
                      {price}
                    </h3>
                    <h4>{name}</h4>
                    <p>{detail}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

// Slider Buttons Component

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-btns">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
