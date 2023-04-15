import React from 'react'
import logo1 from "../../image/logo1.jpg";
import logo2 from "../../image/logo2.png";
import logo3 from "../../image/logo3.jpg";
const Collab = () => {
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
    </>
  )
}

export default Collab
