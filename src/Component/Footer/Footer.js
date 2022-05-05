import React from 'react';
import './Footer.css';
import wave2 from '../../images/wave2.png';
import logo from '../../images/logo.png';
import phone from '../../images/phone.png';
import gmail from '../../images/gmail.png';
import location from '../../images/location.png';

const Footer = () => {
    return (
        <div id='footer'>
            <img src={wave2} alt="" className='footer-img' />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-box">
                        <img src={logo} alt="" />
                        <p>We helps people to earn money without spending money on nunecessary things</p>

                    </div>
                    <div className="col-md-4 footer-box">
                        <h3 className='mb-3'><b>Contact Us</b></h3>
                        <p> <img className='icon' src={location} alt="" /> Dhaka Trade Center, Dhaka</p>
                        <p> <img className='icon' src={phone} alt="" /> +3 35457357856</p>
                        <p><img className='icon' src={gmail} alt="" /> rajusultan12@gmail.com</p>
                    </div>
                    <div className="col-md-4 footer-box">
                        <h3 className='mb-3'><b>Subscribe NewsLetter</b></h3>
                        <input type="email" className='from-control' placeholder='Enter Your email' /><br />
                        <button type='button' className='btn btn-primary'>Subsribe</button>
                    </div>
                </div>
            </div>
            <hr />
            <p className='text-center pb-2'><small>Copyright © 2020 Stock</small></p>

        </div>

    );
};

export default Footer;