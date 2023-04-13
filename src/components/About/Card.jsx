import React from "react";
import card from "../../image/card.jpg";
import Nav from "../head-foot/Nav";
const Card = () => {
  return (
    <>
    <Nav/>
      <div className="flex flex-col gap-10 mt-4 sm:flex-row sm:flex-wrap">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={card} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Vision</h2>
            <p>
              As an emerging local brand, we intend to provide all women with
              trendy designs and exceptional quality at reasonable prices.
            </p>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Listen</button> */}
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={card} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mission</h2>
            <p>
              Our vision is to grow into the global fashion market as a Burmese
              brand showcasing local handiwork and new designs created straight
              out of Myanmar.
            </p>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Listen</button> */}
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={card} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Value</h2>
            <p>
              We focus on quality above quantity and functionality where all our
              products stick to both high and casual fashion which every women
              can style in every ways they want.
            </p>
            <div className="card-actions justify-end">
              {/* <button className="btn btn-primary">Listen</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
