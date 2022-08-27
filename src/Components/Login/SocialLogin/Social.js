import React from 'react';
import google from "../../../Images/social/google.png";
import facebook from "../../../Images/social/facebook.png";
import github from "../../../Images/social/github.png";
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import Loading from '../../Shared/Loading/Loading';
import { useNavigate } from 'react-router-dom';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();



    if (error) {
        return (
          <div>
            <p className='text-error'>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <Loading></Loading>
      }
      if (user) {
            navigate('/');
        
      }

    return (
        <div>

            <div className='button-google mb-4'>
                <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-secondary btn-block"> <span className='px-2'><img src={google} alt="" /></span> Continue with Google</button>
            </div>
            <div className='button-google mb-4'>
                <button class="btn btn-outline btn-secondary btn-block"> <span className='px-2'><img src={facebook} alt="" /></span>  Continue with facebook</button>
            </div>
            <div className='button-google mb-4'>
                <button class="btn btn-outline btn-secondary btn-block"> <span className='px-2'><img src={github} alt="" /></span>  Continue with github</button>
            </div>
        </div>
    );
};

export default Social;