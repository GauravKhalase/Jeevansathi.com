import React from "react";
import { Swiper } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./VerticalSwiper.css";

const VerticalSwiper = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={3}
        loop={true}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img src={ImageOne} alt="" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img src={ImageTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImageThree} alt="" />
        </SwiperSlide> */}
        
        
      </Swiper>
    </>
  );
};

export default VerticalSwiper;
