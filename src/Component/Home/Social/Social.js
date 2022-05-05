import React from 'react';
import './Social.css';
import facebook from '../../../images/facebook-icon.png';
import instagram from '../../../images/instagram-icon.png';
import linkedin from '../../../images/linkedin-icon.png';
import snapchat from '../../../images/snapchat-icon.png';
import twitter from '../../../images/twitter-icon.png';
import whatsapp from '../../../images/whatsapp-icon.png';

const Social = () => {
    return (
        <div className="social-media">
            <div className='container text-center'>
                {/* <div className='title2'>
                    <p className=' my-5 text-center'>Find Us On Social Media</p>
                </div> */}
                <h1 className='my-5'>
                    Find Us On Social Media
                </h1>
                <div className="social-media-icons my-5">
                    <a href="#"> <img src={facebook} alt="" /></a>
                    <a href="#"> <img src={instagram} alt="" /></a>
                    <a href="#"> <img src={linkedin} alt="" /></a>
                    <a href="#"> <img src={snapchat} alt="" /></a>
                    <a href="#"> <img src={twitter} alt="" /></a>
                    <a href="#"> <img src={whatsapp} alt="" /></a>

                </div>

            </div>
        </div>
    );
};

export default Social;