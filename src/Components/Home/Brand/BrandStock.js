import React from "react";
import brand1 from "../../../Images/brands/assault-fitness.jpg";
import brand2 from "../../../Images/brands/cybex.jpg";
import brand3 from "../../../Images/brands/hammer-strength.jpg";
import brand4 from "../../../Images/brands/hoist.jpg";
import brand5 from "../../../Images/brands/life-fitness.jpg";
import brand6 from "../../../Images/brands/matrix.jpg";
import brand7 from "../../../Images/brands/nautilus.jpg";
import brand8 from "../../../Images/brands/octane-fitness.jpg";
import brand9 from "../../../Images/brands/precor.jpg";
import brand10 from "../../../Images/brands/stairmaster.jpg";
import brand11 from "../../../Images/brands/star-trac.jpg";
import brand12 from "../../../Images/brands/true-fitness.jpg";

const BrandStock = () => {
  return (
    <div className="">
        <h2 className="text-center font-bold italic text-4xl my-3">Brands we stock</h2>
        <p className="text-center my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Excepturi fugiat aliquam porro quo beatae quisquam libero maxime, sint dicta accusamus.</p>
      <div class="hero ">
        <div class="hero-content text-center">
            <div className="grid md:grid-cols-6 sm:grid-cols-2 gap-3 border p-2 items-center">
                <div className="hover:shadow p-2"><a href="#"> <img className="md:w-3/4 sm:w-2/4" src={brand1} alt="" /></a></div>
                <div className="hover:shadow p-2"><a href="#"> <img className="md:w-3/4 sm:w-2/4" src={brand2} alt="" /></a></div>
                <div className="hover:shadow p-2"><a href="#"> <img className="md:w-3/4 sm:w-2/4" src={brand3} alt="" /></a></div>
                <div className="hover:shadow p-2"><a href="#"> <img className="md:w-3/4 sm:w-2/4" src={brand4} alt="" /></a></div>
                <div className="hover:shadow p-2"><a href="#"> <img className="md:w-3/4 sm:w-2/4" src={brand5} alt="" /></a></div>
                <div className="hover:shadow p-2"><a href="#"> <img className="md:w-3/4 sm:w-2/4" src={brand6} alt="" /></a></div>
                <div className="hover:shadow p-2"><a href="#"> <img className="md:w-3/4 sm:w-2/4" src={brand7} alt="" /></a></div>
                <div className="hover:shadow p-2"><a href="#"> <img className="md:w-3/4 sm:w-2/4" src={brand8} alt="" /></a></div>
                <div className="hover:shadow p-2"><a href="#"> <img className="md:w-3/4 sm:w-2/4" src={brand9} alt="" /></a></div>
                <div className="hover:shadow p-2"><a href="#"> <img className="md:w-3/4 sm:w-2/4" src={brand10} alt="" /></a></div>
                <div className="hover:shadow p-2"><a href="#"> <img className="md:w-3/4 sm:w-2/4" src={brand11} alt="" /></a></div>
                <div className="hover:shadow p-2"><a href="#"> <img className="md:w-3/4 sm:w-2/4" src={brand12} alt="" /></a></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BrandStock;
