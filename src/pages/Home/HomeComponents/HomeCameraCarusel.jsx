import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import cl from "../Home.module.scss";
import povoPro from '../../../assets/images/Pova4Pro (1)-min.jpg'
import povoPro2 from '../../../assets/images/Pova4Pro (2)-min.jpg'
import povoPro3 from '../../../assets/images/Pova4Pro (3)-min.jpg'
import povoPro4 from '../../../assets/images/Pova4Pro (4) (1)-min.jpg'

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
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className={cl.battery}>
                        <img className={cl.img__battery} src={povoPro} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cl.battery}>
                        <img className={cl.img__battery} src={povoPro2} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cl.battery}>
                        <img className={cl.img__battery} src={povoPro3} alt=""/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={cl.battery}>
                        <img className={cl.img__battery} src={povoPro4} alt=""/>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default HomeCameraCarusel;