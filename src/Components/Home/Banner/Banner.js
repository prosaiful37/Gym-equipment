import React from "react";
import banner1 from "../../../Images/banner/slider2.jpg";
import banner2 from "../../../Images/banner/pexels-tima-miroshnichenko-6389886.jpg";
import banner3 from "../../../Images/banner/1.jpg";

const Banner = () => {
  return (
    <div className="">
      {/* <div
        class="hero min-h-screen"
        style={{ 
            backgroundImage: `url(${banner1})`
        }}
      >
        <div class="hero-overlay bg-white bg-opacity-30"></div>
        <div class="hero-content text-secondary text-center">
          <div class="">
            <h4 className="text-4xl mb-2 text-primary">Sale Up To 75% Off</h4>
            <h1 class="mb-5 uppercase italic md:text-7xl font-bold text-white">Run More: Why Running </h1>
            <h1 className="md:text-7xl font-bold uppercase italic mb-5 text-white">Is Such Perfect</h1>
            <button class="btn btn-primary font-bold italic text-2xl rounded-none">Read More </button>
          </div>
        </div>
      </div> */}

      <div class="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-black">
        <div class="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0 bg-black">
          <svg
            class="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="bg-black"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z"></path>
          </svg>
          <img
            class="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full "
            src={banner3}
            alt=""
          />
        </div>
        <div class="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div class="mb-16 lg:my-40 lg:max-w-lg lg:pr-5 bg-black">
            <h4 className="text-4xl mb-2 text-primary">Sale Up To 75% Off</h4>
            <h1 class="mb-5 uppercase italic md:text-7xl font-bold text-white">
              Run More: Why Running{" "}
            </h1>
            <h1 className="md:text-7xl font-bold uppercase italic mb-5 text-white">
              Is Such Perfect
            </h1>
            <p class="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
            <div class="flex items-center gap-3">
              <button class="btn btn-primary hover:btn- font-bold italic text-2xl rounded-none">
                Buy Now{" "}
              </button>
              <button class="btn btn-secondary hover:btn-primary font-bold italic text-2xl rounded-none">
                Learn more{" "}
              </button>
              {/* <a href="/" aria-label="" class="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700">Learn more</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
