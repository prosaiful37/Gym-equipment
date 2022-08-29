import React from 'react';
import banner1 from "../../../Images/offers/banner3.jpg";
import banner2 from "../../../Images/offers/banner4.jpg";

const Offers = () => {
    return (
        <div className='my-12'>
            <div className='grid md:grid-cols-2 gap-5'>
                <div className='offers-left bg-primary '>
                    <div className='offers-top items-right p-5'>
                        <h2 className='font-bold text-white text-3xl'>BOXING GLOVER</h2>
                        <h4 className='text-2xl text-white '>37 sets - 40% off - Just only this week</h4>
                        <button class="btn btn-outline text-white">Shop Now</button>
                    </div>
                    <div className='offers-bottom hover:mix-blend-multiply bg-white'>
                        <img src={banner1} alt="" />
                    </div>
                </div>
                <div className='offers-left bg-primary'>
                    <div className='offers-bottom  hover:mix-blend-multiply bg-white'>
                        <img src={banner2} alt="" />
                    </div>
                    <div className='offers-bottom p-5 items-right '>
                        <h2 className='font-bold text-white text-3xl '>FITNESS CLOTHING</h2>
                        <h4 className='text-2xl text-white '>40 cloth - 40% off - Just only this week</h4>
                        <button class="btn btn-outline text-white">Shop Now</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Offers;