import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import povoPro from '../../../assets/images/Pova4Pro (1)-min.jpg';
import povoPro2 from '../../../assets/images/Pova4Pro (2)-min.jpg';
import povoPro3 from '../../../assets/images/Pova4Pro (3)-min.jpg';
import povoPro4 from '../../../assets/images/Pova4Pro (4) (1)-min.jpg';
import cl from "../Home.module.scss";
import 'swiper/css';
import 'swiper/css/bundle';

const HomeCameraCarusel = () => {
    return (
        <div >
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
                        <img className={cl.img__battery} src={povoPro} alt="1"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cl.battery}>
                        <img className={cl.img__battery} src={povoPro2} alt="2"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cl.battery}>
                        <img className={cl.img__battery} src={povoPro3} alt="3"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cl.battery}>
                        <img className={cl.img__battery} src={povoPro4} alt="4"/>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default HomeCameraCarusel;