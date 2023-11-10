import "./Hero.scss"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { useEffect, useReducer } from "react";
import { apiInstance } from "../../api";

const reducer = (state, action) => {
    return action
    console.log(state);
}


const Hero = () => {


    const [state,dispatch] = useReducer(reducer, [])
    useEffect(() => {
        try {
        apiInstance("/coins/")
        .then(response =>   {
            dispatch(response.data)
            console.log(response.data)
        })
        }
        catch (error) {

        }
    }, [])

    return (

        <>
            <header>
                <div className="hero-wrapper">
                    <div className="hero__title">
                        <h2>CRYPTOFOLIO WATCH LIST</h2>
                        <p>Get all the Info regarding your favorite Crypto Currency</p>
                    </div>

                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    freeMode={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {
                        state.map((cry,index) =>
                            <SwiperSlide key={index} className="swiper-card">
                                <img src={cry.image.large} alt="" />
                                <div className="valyut">
                                    <small>{cry.name}</small> 
                                    <span className={cry.market_data.price_change_24h > 0 ? "rise-price": cry.market_data.price_change_24h.toFixed(5) === 0.00000 ? "rise-price" : "fall-price"}> {cry.market_data.price_change_24h.toFixed(2)}%</span>
                                    <p>₹ {cry.market_data.current_price.aed}</p>
                                </div>
                            </SwiperSlide>
                            )
                    }
                    
                </Swiper>
            </header>
        </>
    )
}

export default Hero