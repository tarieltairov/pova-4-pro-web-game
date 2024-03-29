import React from 'react';
import cl from '../Home.module.scss';
import proz from '../../../assets/images/main/poth.jpg';
import ozy from '../../../assets/images/main/ozy.jpg';
import battery from '../../../assets/images/main/battery.jpg';
import gzz from '../../../assets/images/main/ggz.jpg';
import zvyk from '../../../assets/images/main/zvyk.jpg';
import vibro from '../../../assets/images/main/vibro.jpg';
import ohlaz from '../../../assets/images/main/ohlaz.jpg';
import steklo from '../../../assets/images/main/steklo.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import 'swiper/css';
import 'swiper/css/bundle';

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