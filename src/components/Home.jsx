import React from "react";
import Nav from "../components/head-foot/Nav";
import Footer from "../components/head-foot/Footer";
import slide1 from "../image/slide1.jpg";
import slide2 from "../image/slide2.jpg";
import slide3 from "../image/slide3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

//import Swiper style
import "../components/Swiper.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Cate from "./Home/Cate";
import Feature from "./Home/Feature";
import Hero from "./Home/Hero";

const Home = () => {
  return (
    <>
      <Nav />

      <Hero />

      <Cate />

      <Feature />

      <div className="m-5 flex flex-col sm:items-center gap-5">
        <h2 className="sm:text-[20px]">
          Having a great style is to feel good in what you wear...
        </h2>
        <div>
          <button className="btn btn-outline">Button</button>
        </div>
      </div>

      <div className="sm:hidden flex items-center ">
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={0}
          loop={true}
          className="swiper flex items-center "
          modules={[Pagination, Navigation]}
          navigation={true}
          loopFillGroupWithBlank={true}
        >
          <SwiperSlide className="swiper-slide">
            <img className=" w-32 " src={slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img className=" w-32 " src={slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img className=" w-32 " src={slide3} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <Footer />
    </>
  );
};

export default Home;
