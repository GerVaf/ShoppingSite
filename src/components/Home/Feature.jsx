import React from "react";
import featurePhoto3 from "../../image/fphoto3.jpg";

const Feature = () => {
  return (
    <>
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
    </>
  );
};

export default Feature;
