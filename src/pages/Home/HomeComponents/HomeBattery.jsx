import React from 'react';
import cl from '../Home.module.scss'
import proz from '../../../assets/images/main/poth.png'
import ozy from '../../../assets/images/main/ozy.png'
import battery from '../../../assets/images/main/battery.png'
import gzz from '../../../assets/images/main/ggz.png'
import zvyk from '../../../assets/images/main/zvyk.png'
import vibro from '../../../assets/images/main/vibro.png'
import ohlaz from '../../../assets/images/main/ohlaz.png'
import steklo from '../../../assets/images/main/steklo.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';


import {A11y, Navigation, Pagination, Scrollbar} from "swiper";

const HomeBattery = () => {

    return (
            <div style={{marginBottom: '200px', marginTop: '200px'}}>
                <h2 style={{color:"white",textAlign:"center", margin:100}}>Преимущества</h2>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className={cl.battery}>
                            <img className={cl.img__battery} src={proz} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.battery}>
                            <img className={cl.img__battery} src={ozy} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.battery}>
                            <img className={cl.img__battery} src={battery} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.battery}>
                            <img className={cl.img__battery} src={gzz} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.battery}>
                            <img className={cl.img__battery} src={zvyk} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.battery}>
                            <img className={cl.img__battery} src={vibro} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.battery}>
                            <img className={cl.img__battery} src={ohlaz} alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.battery}>
                            <img className={cl.img__battery} src={steklo} alt=""/>
                        </div>
                    </SwiperSlide>
                </Swiper>
        </div>
    );
};

export default HomeBattery;