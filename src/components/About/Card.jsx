import React from "react";
import { AboutData } from "../../data/About";
import cardimg from "../../image/card.jpg";
import Footer from "../head-foot/Footer";
import Nav from "../head-foot/Nav";
const Card = () => {
  return (
    <>
      <Nav />
      <div className="mt-5 sm:mt-16 px-6 flex flex-col gap-3">
        <h2 className=" text-2xl text-gray-600 font-bold">ABOUT US</h2>
        <p className="text-lg text-gray-500">In Greek mythology, Asteria was the Titan goddess of shooting stars. She turned into a quail and fell into the Aegean to escape from Zeus. Our brand is formed by adopting the idea of her bravery to embrace the courage and confidence of women through fashion.</p>
      </div>
      <div className="flex flex-col items-center justify-center p-6 gap-10 mt-4 sm:flex-row sm:flex-wrap">
        {AboutData.map(card=>{
          return(
            <div key={card.id} className="card sm:w-96 sm:flex sm:flex-col lg:card-side bg-base-100 shadow-xl">
            <img
              className=" rounded-t-xl rounded-b-none"
              src={cardimg}
              alt="Album"
            />
  
            <div className="card-body w-96 text-gray-700">
              <h2 className="card-title">{card.title}</h2>
              <p>
                {card.message}
              </p>
            </div>
          </div>
          )
        })}
        
      </div>
      <Footer/>
    </>
  );
};

export default Card;
