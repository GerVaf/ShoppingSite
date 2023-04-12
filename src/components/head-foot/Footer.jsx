import React from "react";
import {
  AiOutlineGlobal,
  AiOutlineInstagram,
} from "../../../node_modules/react-icons/ai";
import { FaFacebook } from "../../../node_modules/react-icons/fa";
import logo1 from "../../image/logo1.jpg";
import logo2 from "../../image/logo2.png";
import logo3 from "../../image/logo3.jpg";

const Footer = () => {
  return (
    <>
      <div className="flex sm:flex sm:flex-col sm:items-center flex-col items-center my-10">
        <h2 className=" sm:text-[30px] text-[20px] ">In Collabration With</h2>
        <div className="sm:flex sm:gap-36">
        <img className=" sm:w-64 w-32" src={logo1} alt="" />
        <div className=" flex sm:gap-36">
          <img className=" sm:w-64 w-32" src={logo2} alt="" />
          <img className=" sm:w-64 w-32" src={logo3} alt="" />
        </div>
        </div>
      </div>

      <div className=" flex sm:justify-around sm:text-[20px] text-[12px] gap-3 p-3 text-gray-600">
        <button>ABOUT US</button>
        <button>PORTFILIO</button>
        <button>CONTACT</button>
        <button>TERMS & CONDITONS</button>
      </div>

      <div className="flex sm:justify-center justify-around sm:text-4xl text-3xl gap-10 m-5">
        <FaFacebook />
        <AiOutlineInstagram />
        <AiOutlineGlobal />
      </div>

      <div className=" sm:text-xl text-sm p-4 font-color rounded-md">
        <p className="font-bold text-center">
          Copyright © {new Date().getFullYear()} - All right reserved by Asteria
        </p>
      </div>
    </>
  );
};

export default Footer;
