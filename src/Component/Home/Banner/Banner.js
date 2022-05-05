import React from 'react';
import './Banner.css';
import bannerPic from '../../../images/home.png';
import wave1 from '../../../images/wave1.png'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <p className='banner-title'>Let's Start The Business</p>
                        <p>We helps people to earn money without spending money on nunecessary things</p>
                        <div>
                            <button className="btn btn-outline-light" type="submit">JOIN FREE </button>
                            <button className="btn btn-outline-light ms-3" type="submit">EXPLORE MORE</button>
                        </div>
                    </div>
                    <div className='col-md-6 text-center'>
                        <img src={bannerPic} alt="" className='img-fluid' />

                    </div>



                </div>

            </div>
            <img src={wave1} alt="" className='bottom-img' />

        </div>
    );
};

export default Banner;