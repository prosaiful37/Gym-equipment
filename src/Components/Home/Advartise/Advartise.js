import React from "react";
import banner1 from "../../../Images/pexels-jonathan-borba-3076514.jpg";
import banner2 from "../../../Images/banner9.jpg";
import banner3 from "../../../Images/banner10.jpg";

const Advartise = () => {
  return (
    <div className="my-8">
      <div class="hero">
        <div class="hero-content">
          <div class="">
            <div className="grid md:grid-cols-3 gap-5">

              <div class="card bg-base-100  image-full rounded-none">
                <figure>
                  <img src={banner1} alt="Shoes" />
                </figure>
                <div class="card-body mt-10">
                  <h2 class=" text-white italic font-bold text-2xl">WOMENS FINTNESS BODYCARE</h2>
                  <div class="badge badge-outline font-bold text-2xl p-5 text-white rounded-none">ONLY 10$</div>
                    
                  
                </div>
              </div>
              <div class="card bg-base-100   image-full  rounded-none">
                <figure>
                  <img src={banner2} alt="Shoes" />
                </figure>
                <div class="card-body mt-10">
                  <h2 class=" text-white italic font-bold text-2xl">ACCESSROIES</h2>
                  <div class="badge badge-outline text-2xl p-5 text-white font-bold rounded-none">UP TO 30%</div>
                    
                  
                </div>
              </div>
              <div class="card bg-base-100   image-full rounded-none">
                <figure>
                  <img src={banner3} alt="Shoes" />
                </figure>
                <div class="card-body mt-10">
                  <h2 class=" text-white italic font-bold text-2xl">WOMEN'S RUNNING SALE</h2>
                  <div class="badge badge-outline text-2xl p-5 text-white rounded-none font-bold">BUY 2 FREE ONE</div>
                    
                  
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advartise;
