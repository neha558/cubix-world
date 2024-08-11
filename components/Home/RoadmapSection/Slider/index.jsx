import React from "react";
import Slider from "react-slick";
import "./Slider.css";

export default function SimpleSlider() {
    let settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 4000,
        // autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
    };
    return (
        <Slider {...settings}>
            <div>
                <div className="q-whitepaper-a-container">
                    <div className="q1-2022-whitepaper-a rajdhani-medium-white-22-6px"><span
                        className="rajdhani-medium-scooter-22-6px">Q1</span><span
                        className="rajdhani-medium-white-22-6px-2"> 2022</span>
                    </div>
                    <p className="q1-2022-whitepaper-a-1 rajdhani-normal-white-19-4px">
                        <React.Fragment>White paper and<br />      website development<br />Seed round <br />Exhibit at CED 2022 Dubai</React.Fragment>
                    </p>
                </div>
            </div>
            <div>
                <div className="q-whitepaper-a-container">
                    <div className="q1-2022-whitepaper-a rajdhani-medium-white-22-6px"><span
                        className="rajdhani-medium-scooter-22-6px">Q2</span><span
                        className="rajdhani-medium-white-22-6px-2"> 2022</span>
                    </div>
                    <p className="q1-2022-whitepaper-a-1 rajdhani-normal-white-19-4px">
                        <React.Fragment>Private round<br />Strategic partnerships</React.Fragment>
                    </p>
                </div>
            </div>
            <div>
                <div className="q-whitepaper-a-container">
                    <div className="q1-2022-whitepaper-a rajdhani-medium-white-22-6px"><span
                        className="rajdhani-medium-scooter-22-6px">Q3</span><span
                        className="rajdhani-medium-white-22-6px-2"> 2022</span>
                    </div>
                    <p className="q1-2022-whitepaper-a-1 rajdhani-normal-white-19-4px">
                        <React.Fragment>Cricket NFT pack sale<br />Token generation event <br />Develop P2P Card game</React.Fragment>
                    </p>
                </div>
            </div>
            <div>
                <div className="q-whitepaper-a-container">
                    <div className="q1-2022-whitepaper-a rajdhani-medium-white-22-6px"><span
                        className="rajdhani-medium-scooter-22-6px">Q4</span><span
                        className="rajdhani-medium-white-22-6px-2"> 2022</span>
                    </div>
                    <p className="q1-2022-whitepaper-a-1 rajdhani-normal-white-19-4px">
                        <React.Fragment>Live NFT Marketplace <br />P2P Beta version launch <br />Card to Card game <br />enhancement<br />Exchange listing</React.Fragment>
                    </p>
                </div>
            </div>
            <div>
                <div className="q-whitepaper-a-container">
                    <div className="q1-2022-whitepaper-a rajdhani-medium-white-22-6px"><span
                        className="rajdhani-medium-scooter-22-6px">Q1</span><span
                        className="rajdhani-medium-white-22-6px-2"> 2023</span>
                    </div>
                    <p className="q1-2022-whitepaper-a-3 rajdhani-normal-white-17-8px">
                        <span className="rajdhani-normal-white-17-8px">Cubix</span>
                        <span className="rajdhani-normal-white-17-8px"><React.Fragment> visa card<br /></React.Fragment></span>
                        <span className="rajdhani-normal-white-17-8px">Cubix</span>
                        <span className="rajdhani-normal-white-17-8px"><React.Fragment> hardware wallet<br />Football NFT Pack Sale<br />Live P2P card game <br />Football NFT goes to live <br />NFT based fantasy game release Beta version</React.Fragment></span>
                    </p>
                </div>
            </div>
            <div>
                <div className="q-whitepaper-a-container">
                    <div className="q1-2022-whitepaper-a rajdhani-medium-white-22-6px"><span
                        className="rajdhani-medium-scooter-22-6px">Q2</span><span
                        className="rajdhani-medium-white-22-6px-2"> 2023</span>
                    </div>
                    <p className="q1-2022-whitepaper-a-1 rajdhani-normal-white-19-4px">
                        <React.Fragment>Basket Ball NFT pack Sale <br />Live NFT based  fantasy game<br />P2P game enhancement &amp; <br />new features <br />Football NFT game  release <br />Beta version</React.Fragment>
                    </p>
                </div>
            </div>
            <div>
                <div className="q-whitepaper-a-container">
                    <div className="q1-2022-whitepaper-a rajdhani-medium-white-22-6px"><span
                        className="rajdhani-medium-scooter-22-6px">Q3</span><span
                        className="rajdhani-medium-white-22-6px-2"> 2022</span>
                    </div>
                    <p className="q1-2022-whitepaper-a-1 rajdhani-normal-white-19-4px">
                        <React.Fragment>Basket Ball NFT goes live<br />Live Football NFT game<br />Fantasy sports game new <br />features<br />Base Ball NFT Pack sale<br />Basket Ball NFT game release Beta version</React.Fragment>
                    </p>
                </div>
            </div>
            <div>
                <div className="q-whitepaper-a-container">
                    <div className="q1-2022-whitepaper-a rajdhani-medium-white-22-6px"><span
                        className="rajdhani-medium-scooter-22-6px">Q4</span><span
                        className="rajdhani-medium-white-22-6px-2"> 2022</span>
                    </div>
                    <p className="q1-2022-whitepaper-a-1 rajdhani-normal-white-19-4px">
                        <React.Fragment>Base Ball NFT goes live<br />Football NFT game new <br />features<br />Live Basketball NFT game<br />Base Ball NFT game release<br />Beta version</React.Fragment>
                    </p>
                </div>
            </div>
        </Slider>
);
}