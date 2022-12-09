import React from 'react';
import cl from './Home.module.scss'
import HomeMain from "./HomeComponents/HomeMain";
import HomeTable from "./HomeComponents/HomeTable";
import HomeBattery from "./HomeComponents/HomeBattery";
import HomeCamera from "./HomeComponents/HomeCamera";
import HomeCameraCarusel from "./HomeComponents/HomeCameraCarusel";
import HomeFooter from "./HomeComponents/HomeFooter";

const Home = () => {
    return (
            <div>
            <div className={cl.background}>
                <HomeMain/>
                <HomeTable/>
                {/*<HomeVideo/>*/}
                <HomeBattery/>
                <HomeCamera/>
                <HomeCameraCarusel/>
                <HomeFooter/>
            </div>
            </div>
    );
};

export default Home;