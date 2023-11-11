import "./Hero.scss"
import { Container } from "../../utils/Utils";
// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useReducer } from "react";
import { apiInstance } from "../../api";
import { Link } from "react-router-dom";

const reducer = (state, action) => {
    return action
}


const Hero = () => {


    const [state, dispatch] = useReducer(reducer, [])
    useEffect(() => {
        try {
            apiInstance("/coins/")
                .then(response => {
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
                <Container>
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
                            delay: 1500,
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
                            state.map((cry, index) =>
                                 <SwiperSlide key={index} className="swiper-card">
                                     <Link to={`/cryptoView/${cry.id}`}>
                                    <img src={cry.image.large} alt="" />
                               </Link>
                                    <div className="valyut">
                                        <small>{cry.name}</small>
                                        <span className={cry.market_data.market_cap_change_percentage_24h_in_currency.usd > 0 ? "rise-price" : cry.market_data.market_cap_change_percentage_24h_in_currency.usd.toFixed(5) === 0.00000 ? "rise-price" : "fall-price"}> {cry.market_data.market_cap_change_percentage_24h_in_currency.usd.toFixed(2)}%</span>
                                        <p>₹ {cry.market_data.current_price.aed.toFixed(2)}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </Container>
            </header>
        </>
    )
}

export default Hero