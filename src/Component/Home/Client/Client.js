import React from 'react';
import './Client.css';
import user1 from '../../../images/user1.jpg';
import user2 from '../../../images/user2.jpg';

const Client = () => {
    return (
        <div id='comments'>
            <div className="container">
                <h1 className="title1 my-5 text-center">What Clients Say</h1>
                <div className="row offset-1">
                    <div className="col-md-5 comment">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus neque autem magni assumenda error vel odio hic, obcaecati totam ex earum commodi perspiciatis ipsa repellendus laborum? Voluptas, deleniti. Enim, aspernatur.
                        </p>
                        <img src={user1} alt="" />
                        <p className='user-details'>Agelina <br />Co-Founder of xyz</p>

                    </div>
                    <div className="col-md-5 comment">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus neque autem magni assumenda error vel odio hic, obcaecati totam ex earum commodi perspiciatis ipsa repellendus laborum? Voluptas, deleniti. Enim, aspernatur.
                        </p>
                        <img src={user2} alt="" />
                        <p className='user-details'>John Doe <br />Co-Founder of xyz</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Client;