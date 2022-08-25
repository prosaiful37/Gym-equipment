import React from "react";
import { Link } from "react-router-dom";
import Social from "../SocialLogin/Social";

const Signup = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center bg-secondary">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
            <h2 className="text-2xl font-bold p-2">Please Sign up!! </h2>
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email*</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password*</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  class="input input-bordered"
                />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-secondary">Login</button>
              </div>
              <div>
                <small>
                All ready have an account! {" "}
                  <span className="text-primary">
                    {" "}
                    <Link to="/login">Login</Link>{" "}
                  </span>
                </small>
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
  );
};

export default Signup;
