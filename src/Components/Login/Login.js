import { async } from "@firebase/util";
import React from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import cardImage from "../../Images/pexels-alesia-kozik-8155100.jpg";
import Loading from "../Shared/Loading/Loading";
import Social from "./SocialLogin/Social";

let errorMsg;
const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, passError] = useSendPasswordResetEmail(
    auth
  );


  const navigate = useNavigate()

  if (error || passError) {
      errorMsg =  <p className="text-error">Error: {error.message || error.passError}</p>
    
  }
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
   navigate('/');
  }




  const handleLogin = (event) => {
    event.preventDefault()

    const email = event.target.email.value;
    const password = event.target.password.value;


    signInWithEmailAndPassword(email, password)

  }



  return (
    <div className="">
        <div class="hero min-h-screen bg-base-200 md:py-5">
  <div class="hero-content text-center bg-secondary">
  
    <div className="grid grid-cols-2">
    <figure><img src={cardImage} alt="Album" /></figure>
   <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 rounded-none">
    <h2 className="text-2xl font-bold p-2">Login Now!! </h2>
      <div class="card-body">
        <form onSubmit={handleLogin} action="">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email*</span>
          </label>
          <input name="email" type="email" placeholder="email" class="input input-bordered" required/>
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password*</span>
          </label>
          <input name="password" type="password" placeholder="password" class="input input-bordered" required/>
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-secondary">Login</button>
        </div>
        </form>
        {errorMsg}
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
