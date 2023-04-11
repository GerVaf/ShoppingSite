import React from "react";
import HeroImage from "../image/herophoto.jpeg";
import photo1 from "../image/photo1.jpg";
import photo2 from "../image/photo2.jpg";
import test1 from "../image/test1.jpg";
import test2 from "../image/test2.jpg";
import test3 from "../image/test3.jpg";
import slide1 from "../image/slide1.jpg"
import slide2 from "../image/slide2.jpg"
import slide3 from "../image/slide3.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

//import Swiper style
import "../components/Swiper.css"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Home = () => {
  return (
    <>
      <div className=" flex items-center flex-col relative ">
        <img className=" " src={HeroImage} alt="" />
        <div className="absolute flex gap-10 text-white bottom-3 text-[10px]  ">
          <button className=" hover:text-gray-300 ">A/W</button>
          <button className=" hover:text-gray-300 ">2023</button>
          <button className=" hover:text-gray-300 ">COLLECTION</button>
        </div>
        <p className="font-bold text-white text-[25px] absolute top-10">
          Asteria
        </p>
      </div>

      <div className="flex items-center justify-center my-10">
        <div>
          <img className=" w-16 ml-5 mt-10 mr-5" src={photo1} alt="" />
        </div>

        <div className="flex gap-3 items-center">
          <img className=" w-36" src={photo2} alt="" />
          <div className=" w-20 ">
            <h2 className="text-[10px] font-bold">2023 Asteria COLLECTION</h2>
            <hr className="w-10 border-black mb-4" />
            <p className="text-[5px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              aliquid doloribus quod blanditiis consequuntur esse maiores id
              nesciunt facere sunt pariatur exercita
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-10">
        <p className=" w-24 text-[10px]">REFINED ROMANTICISM</p>
        <div className="flex gap-3">
          <img src={test1} className="w-20" alt="" />
          <img src={test2} className="w-20" alt="" />
          <img src={test3} className="w-20" alt="" />
        </div>
      </div>

      <div className="flex items-center "> 
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={20}
        cssMode={true}
        loop={true}
        className="swiper flex items-center "
        modules={[Pagination, Navigation]}
        navigation={true}
        loopFillGroupWithBlank={true}
      >
        <SwiperSlide className="swiper-slide">
          
          <img className="  "  src={slide1} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          
          <img className="  " src={slide2} alt=""/>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
         
          <img className="  " src={slide3} alt=""/>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
};

export default Home;
