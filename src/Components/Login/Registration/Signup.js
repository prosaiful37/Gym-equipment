import { async } from "@firebase/util";
import React from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import Social from "../SocialLogin/Social";



let errorMsg;
const Signup = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, upError] = useUpdateProfile(auth);
  const navigate = useNavigate()

  if (error || upError) {
      errorMsg =  <p className="text-error">Error: {error.message || upError.message}</p>
    
  }
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
   navigate('/');
  }







  // form handle
  const handleRegister = async(event) => {
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;


    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName : name });
    console.log(updateProfile);
    // Navigate('/');



  }
  return (
    <div>
      <div class="hero min-h-screen bg-base-200 py-5">
        <div class="hero-content bg-secondary">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
            <h2 className="text-2xl font-bold p-2 text-center">
              Please Sign up!!{" "}
            </h2>
            <div class="card-body">
              <form onSubmit={handleRegister} action="">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="name"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Password*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control mt-6">
                  <button class="btn btn-secondary">Sign Up</button>
                </div>
              </form>
              {errorMsg}
              <div>
                <small>
                  All ready have an account!{" "}
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
