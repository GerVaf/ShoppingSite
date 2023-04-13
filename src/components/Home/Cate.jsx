import React from 'react'
import photo1 from "../../image/photo1.jpg";
import photo2 from "../../image/photo2.jpg";
import test1 from "../../image/test1.jpg";
import test2 from "../../image/test2.jpg";
import test3 from "../../image/test3.jpg";

const Cate = () => {
  return (
    <>
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
    </>
  )
}

export default Cate
