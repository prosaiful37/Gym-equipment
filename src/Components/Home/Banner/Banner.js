import React from "react";
import banner1 from "../../../Images/banner/slider1.jpg";
// import banner2 from "../../../Images/banner/pexels-tima-miroshnichenko-6389886.jpg";

const Banner = () => {
  return (
    <div>
      <div
        class="hero min-h-screen"
        style={{ 
            backgroundImage: `url(${banner1})`
        }}
      >
        <div class="hero-overlay bg-white bg-opacity-40"></div>
        <div class="hero-content text-secondary">
          <div class=" text-left">
            <h4 className="text-4xl mb-2 text-primary">Sale Up To 75% Off</h4>
            <h1 class="mb-5 uppercase italic md:text-7xl font-bold text-secondary">Run More: Why Running </h1>
            <h1 className="md:text-7xl font-bold uppercase italic mb-5 text-secondary">Is Such Perfect</h1>
            <button class="btn btn-primary font-bold italic text-2xl rounded-none">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
