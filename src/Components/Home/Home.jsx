import React from 'react';
import Banner from './Banner/Banner';
import HomeAbout from './HomeAbout/HomeAbout';
import HomeService from './HomeService/HomeService';
import HappyCoustomer from '../ContactUs/HappyCoustomer/HappyCoustomer';
import Simple from './Simple/Simple';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <HomeService></HomeService>
            <Simple></Simple>
            <HappyCoustomer></HappyCoustomer>
        </div>
    );
};

export default Home;