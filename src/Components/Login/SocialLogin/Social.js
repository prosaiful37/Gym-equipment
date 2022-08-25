import React from 'react';
import google from "../../../Images/social/google.png";
import facebook from "../../../Images/social/facebook.png";
import github from "../../../Images/social/github.png";

const Social = () => {
    return (
        <div>
            
            <div className='button-google mb-4'>
                <button class="btn btn-outline btn-secondary btn-block"> <span className='px-2'><img src={google} alt="" /></span> Continue with Google</button>
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