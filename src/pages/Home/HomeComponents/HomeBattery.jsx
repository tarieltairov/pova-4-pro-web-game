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
            <div className={cl.benefits_block}>
                <h1 >Преимущества</h1>
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
                            <img className={cl.img__battery} src={proz} alt="first"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.battery}>
                            <img className={cl.img__battery} src={ozy} alt="second"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.battery}>
                            <img className={cl.img__battery} src={battery} alt="third"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.battery}>
                            <img className={cl.img__battery} src={gzz} alt="fourth"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.battery}>
                            <img className={cl.img__battery} src={zvyk} alt="fifth"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.battery}>
                            <img className={cl.img__battery} src={vibro} alt="sixth"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.battery}>
                            <img className={cl.img__battery} src={ohlaz} alt="seventh"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={cl.battery}>
                            <img className={cl.img__battery} src={steklo} alt="eighth"/>
                        </div>
                    </SwiperSlide>
                </Swiper>
        </div>
    );
};

export default HomeBattery;