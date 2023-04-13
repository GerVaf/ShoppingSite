import React from "react";
import HeroImage from "../../image/herophoto.jpeg";

const Hero = () => {
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
    </>
  );
};

export default Hero;
