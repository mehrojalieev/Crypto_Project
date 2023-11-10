import "./Hero.scss"

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
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
        spaceBetween={40}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
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