import React from "react";
import { useNavigate } from "react-router-dom";
import banner from "../../Images/banner/pexels-tima-miroshnichenko-6389886.jpg";
import about1 from "../../Images/offers/about2.jpg";
import about2 from "../../Images/offers/about3.jpg";
import AboutTeam from "./AboutTeam";

const About = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="">
      <div
        className="bg-cover bg-center md:h-96"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="p-5">
          <button onClick={navigateToHome} class="btn btn-link">
            Home
          </button>
          <span className="text-white">/About Us </span>
        </div>

        <h1 className="md:text-7xl text-center fontbold text-white uppercase underline underline-offset-1">
          About
        </h1>
      </div>

      <div class="hero py-5 ">
            <div class="hero-content">
                <div className="grid md:grid-cols-2 gap-7">
                <div>
                    <img src={about1} alt="" />
                    <h2 className="text-2xl font-bold py-3">What Do We Do?</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                </div>
                <div>
                    <img src={about2} alt="" />
                    <h2 className="text-2xl font-bold py-3">History Of Us</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                </div>
                </div>

                
                
            </div>
        </div>

        <div>
            <AboutTeam></AboutTeam>
        </div>

    </div>
  );
};

export default About;
