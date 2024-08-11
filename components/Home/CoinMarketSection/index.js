import React from "react";
import Slider from "react-slick";

function CoinMarketSection(props) {
    const {group10000012521, group10000012541, group1000001263, group1000001264} = props;
    let settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
    };
    return (
        <>
            <Slider {...settings}>
                <div>
                    <img className="group-1000001252" src={group10000012521} alt="Group 1000001252"/>
                </div>
                <div>
                    <img className="group-1000001255" src="/img/logo--1--1-1@2x.png" alt="logo (1) 1"/>
                </div>
                <div>
                    <img className="group-1000001254" src={group10000012541} alt="Group 1000001254"/>
                </div>
                <div>
                    <img className="group-1000001263" src={group1000001263} alt="Group 1000001263"/>
                </div>
                <div>
                    <img className="group-1000001264" src="/img/coinw-logo.png" alt="Group 1000001264"/>
                </div>
            </Slider>
        </>
    );
}

export default CoinMarketSection;
