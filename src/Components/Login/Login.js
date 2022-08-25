import React from "react";
import { Link } from "react-router-dom";
import cardImage from "../../Images/pexels-alesia-kozik-8155100.jpg";
import Social from "./SocialLogin/Social";

const Login = () => {
  return (
    <div className="">
        <div class="hero min-h-screen bg-base-200 md:py-5">
  <div class="hero-content text-center bg-secondary">
  
    <div className="grid grid-cols-2">
    <figure><img src={cardImage} alt="Album" /></figure>
   <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
    <h2 className="text-2xl font-bold p-2">Login Now!! </h2>
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email*</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password*</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-secondary">Login</button>
        </div>
        <div>
            <small>Are you new Gym-Equipments? <span className="text-primary"> <Link to='/signup'>Create a new account</Link> </span></small>
        </div>
        <div class="divider">OR</div>
        <div>
            <Social></Social>
        </div>
      </div>
    </div>
    </div>
  
  </div>
</div>

    
    </div>
  );
};

export default Login;
