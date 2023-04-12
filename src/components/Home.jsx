import React from "react";
import Nav from "../components/head-foot/Nav";
import Footer from "../components/head-foot/Footer";
import HeroImage from "../image/herophoto.jpeg";
import photo1 from "../image/photo1.jpg";
import photo2 from "../image/photo2.jpg";
import test1 from "../image/test1.jpg";
import test2 from "../image/test2.jpg";
import test3 from "../image/test3.jpg";
import slide1 from "../image/slide1.jpg";
import slide2 from "../image/slide2.jpg";
import slide3 from "../image/slide3.jpg";
import featurePhoto3 from "../image/fphoto3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

//import Swiper style
import "../components/Swiper.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Home = () => {
  return (
    <>
      {/* herosection */}
      <div className=" flex items-center flex-col relative  ">
        <img className="sm:w-[100%] sm:h-[400px] " src={HeroImage} alt="" />
        <div className="absolute flex gap-10 sm:gap-60 text-white bottom-3 text-[10px] sm:text-[20px]  ">
          <button className=" hover:text-gray-300 ">A/W</button>
          <button className=" hover:text-gray-300 ">2023</button>
          <button className=" hover:text-gray-300 ">COLLECTION</button>
        </div>
        <p className="font-bold text-white text-[25px] sm:text-[50px] absolute top-10 ">
          Asteria
        </p>
      </div>
      <div className=" sm:flex sm:gap-32 sm:justify-center">
        <div className="flex items-center justify-center my-10">
          <div>
            <img
              className=" sm:w-56 sm:ml-16 sm:mr-10 w-16 ml-5 mt-10 mr-5"
              src={photo1}
              alt=""
            />
          </div>

          <div className="flex gap-3 items-center">
            <img className=" sm:w-80 w-36" src={photo2} alt="" />
            <div className=" sm:w-44 w-20 ">
              <h2 className=" sm:text-[40px] text-[10px] font-bold">
                2023 Asteria COLLECTION
              </h2>
              <hr className=" sm:w-40 w-10 sm:border-2  border-black mb-4" />
              <p className="text-[5px] sm:text-[15px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore aliquid doloribus quod blanditiis consequuntur esse
                maiores id nesciunt facere sunt pariatur exercita
              </p>
            </div>
          </div>
        </div>
        {/* categeories */}

        <div className="flex sm:flex-col items-center justify-center my-10">
          <p className=" sm:w-40 w-24 sm:text-[25px] text-[10px]">
            PRODUCTS CATEGORIES
          </p>
          <div className="flex sm:gap-6 gap-3">
            <img src={test1} className="w-20 rounded-sm sm:w-44 " alt="" />
            <img src={test2} className="w-20 rounded-sm sm:w-44 " alt="" />
            <img src={test3} className="w-20 rounded-sm sm:w-44 " alt="" />
          </div>
        </div>
      </div>
      {/* feature product */}
      <div className="sm:flex sm:items-center sm:flex-col">
        <h2 className="sm:text-[30px]">FEATURE PRODUCTS</h2>
        <div className="flex sm:flex-row sm:flex-wrap flex-col items-center gap-10 p-5 mb-5">
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="">
              <img className="" src={featurePhoto3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                T-shirt!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews T-shirt whose T-shirt does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="">
              <img src={featurePhoto3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                T-shirt!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews T-shirt whose T-shirt does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="">
              <img src={featurePhoto3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                T-shirt!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews T-shirt whose T-shirt does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="">
              <img src={featurePhoto3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                T-shirt!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews T-shirt whose T-shirt does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" p-5 flex flex-col sm:items-center gap-5">
        <h2 className="sm:text-[20px]">Having a great style is to feel good in what you wear...</h2>
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
