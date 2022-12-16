import React from 'react';
import HomeMain from "./HomeComponents/HomeMain";
import HomeTable from "./HomeComponents/HomeTable";
import HomeBattery from "./HomeComponents/HomeBattery";
import HomeCamera from "./HomeComponents/HomeCamera";
import HomeCameraCarusel from "./HomeComponents/HomeCameraCarusel";
import HomeFooter from "./HomeComponents/HomeFooter";
import HomeVideo from './HomeComponents/HomeVideo';
import HomeSecBat from './HomeComponents/HomeSecBat';
import HomeTerm from './HomeComponents/HomeTerm';
import HomePhoneDesign from './HomeComponents/HomePhoneDesign';
import cl from './Home.module.scss';

const Home = () => {
    return (
        <div className={cl.background}>
            <HomeVideo />
            <HomeMain />
            <HomeTable />
            <HomeBattery />
            <HomePhoneDesign />
            <HomeCamera />
            <HomeTerm />
            <HomeCameraCarusel />
            <HomeSecBat />
            <HomeFooter />
        </div>
    );
};

export default Home;