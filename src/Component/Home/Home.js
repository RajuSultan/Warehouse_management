import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner/Banner';
import Client from './Client/Client';
import Social from './Social/Social';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Client></Client>
            <Social></Social>
        </div>
    );
};

export default Home;