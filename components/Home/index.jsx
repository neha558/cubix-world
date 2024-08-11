import React from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {InView} from "react-intersection-observer";
import TradeSection from "./TradeSection";
import AppSection from "./AppSection";
import P2PGameSection from "./P2PGameSection";
import UpcomingGames from "./UpcomingGames";
import CoinMarketSection from "./CoinMarketSection";
import RoadmapSection from "./RoadmapSection";
import BannerVideoSection from "./BannerVideoSection";
import TokenSection from "./TokenSection";
import Bounce from "react-reveal/Bounce";
import FeaturedInSection from "./FeaturedInSection";

function Home(props) {
    const playGameP2PUrl = 'https://p2p.cubixpro.world'
    const {
        HomeLinkText,
        navbarLinkMarketplace,
        navbarLinkGames,
        navbarLinkAirdrop,
        group1000001223,
        group1000001222,
        live,
        exploreNow,
        downloadOurFantasyLeagueApp,
        sports_Esports,
        multipleGameModes,
        sports_Cricket,
        multipleSports,
        nft,
        nftBased,
        iconShield,
        earnAndPlayWithCubix,
        joinCubixFantasyL,
        predictionMaskGroup,
        predictionGame,
        maximizeYourChance,
        maskGroup1,
        metaverse,
        createAVirtualSpo,
        maskGroup2,
        simulation,
        joinTheExcitement,
        group10000012521,
        group10000012541,
        group1000001263,
        group1000001264,
        group10000012522,
        group1000001251,
        group1000001245,
        group1000001248,
        logo112,
        group10000012542,
        coinrankingLogoWhite1,
        joinOurRobustComm,
        makeConnectionWithMembers,
        joinOurRedditCommunity,
        group1000001221,
        catchTheLatestNews,
        group5436,
        title2,
        title3,
        title4,
        title5,
        title6,
        title7,
        spanText17,
        spanText18,
        title8,
        title9,
        title10,
        affiliateMarketing,
        title11,
        title12,
        inputType,
        inputPlaceholder,
        stayConnected,
        fbIcon,
        iconLinkedin,
        medium,
        youtube,
        liveTradeImageProps,
        p2PCardImageProps,
        buttonProps,
        button2Props,
        button4Props,
        button5Props,
        featuredInDigestProps,
        featuredInSHeraldProps,
        featuredInTribuneProps,
    } = props;
    const P2PGameProps = {p2PCardImageProps, joinCubixFantasyL, buttonProps, button2Props, playGameP2PUrl};
    const UpcomingGamesProp = {
        predictionMaskGroup,
        predictionGame,
        maximizeYourChance,
        maskGroup1,
        metaverse,
        createAVirtualSpo,
        maskGroup2,
        simulation,
        joinTheExcitement,
    };
    const AppSectionProps = {
        earnAndPlayWithCubix,
        iconShield,
        downloadOurFantasyLeagueApp,
        sports_Esports,
        multipleGameModes,
        sports_Cricket,
        multipleSports,
        nft,
        nftBased
    };
    const CoinMarketSectionProps = {group10000012521, group10000012541, group1000001263, group1000001264};
    const TradeSectionProps = {liveTradeImageProps, group1000001223, group1000001222, exploreNow, live};
    const [inView, setInView] = React.useState(false);
    const [inViewCryptoIndexHeader, setInViewCryptoIndexHeader] = React.useState(false);

    return (
        <div className="container-center-horizontal">
            <div className="home screen">
                <div className="flex-row">
                    <div className="logo"></div>
                    <div className="navbar">
                        <a href="#" target="_self">
                            <div
                                className="hover-animate-link-with-color navbar-link-place valign-text-middle rajdhani-medium-white-26px">{HomeLinkText}</div>
                        </a>
                        <a href="https://example.com/" target="_blank">
                            <div
                                className="hover-animate-link-with-color navbar-link-marketplace valign-text-middle rajdhani-medium-white-26px">
                                {navbarLinkMarketplace}
                            </div>
                        </a>
                        <a href="https://example.com/" target="_blank">
                            <div
                                className="hover-animate-link-with-color navbar-link-games valign-text-middle rajdhani-medium-white-26px">{navbarLinkGames}</div>
                        </a>
                        <a href="https://example.com/" target="_blank">
                            <div
                                className="hover-animate-link-with-color navbar-link-air-drop valign-text-middle rajdhani-medium-white-26px">
                                {navbarLinkAirdrop}
                            </div>
                        </a>
                        <a href="https://cubix.gitbook.io/cubix-white-paper/" target="_blank">
                            <div
                                className="hover-animate-link-with-color navbar-link-surname valign-text-middle rajdhani-medium-white-26px">
                                White Paper
                            </div>
                        </a>
                    </div>
                </div>
                <div className="banner">
                    <BannerVideoSection/>
                </div>
                <div className="trade-cubix">
                    <TradeSection {...TradeSectionProps} />
                </div>
                <div className="unleash-champion">
                    <AppSection {...AppSectionProps}/>
                </div>
                <div className="card-battle">
                    <P2PGameSection {...P2PGameProps}/>
                </div>
                <div className="upcoming-game">
                    <UpcomingGames {...UpcomingGamesProp} />
                </div>
                <div className="coin-marketplace-carousel-div">
                    <CoinMarketSection {...CoinMarketSectionProps}/>
                </div>
                <div className="overlap-group8">
                    <TokenSection/>
                </div>
                <div className="featured-in">
                    <FeaturedInSection/>
                </div>
                <div className="crypto-index">
                    <InView onChange={setInViewCryptoIndexHeader}>
                        <Bounce right spy={inViewCryptoIndexHeader}>
                            <img className="crypto-index-1" src="/img/crypto-index.svg" alt="Crypto Index"/>
                        </Bounce>
                    </InView>
                    <div className="group-1000001317">
                        <img className="group-1000001252-1" src={group10000012522} alt="Group 1000001252"/>
                        <div className="group-1000001251" style={{backgroundImage: `url(${group1000001251})`}}>
                            <div className="overlap-group-3">
                                <img className="group-1000001245" src={group1000001245} alt="Group 1000001245"/>
                                <div className="rectangle-142"></div>
                            </div>
                        </div>
                        <div className="group-1000001248" style={{backgroundImage: `url(${group1000001248})`}}>
                            <img className="logo-1-1-1" src={logo112} alt="logo (1) 1"/>
                        </div>
                        <div className="group-1000001254-1" style={{backgroundImage: `url(${group10000012542})`}}>
                            <img className="coinranking-logo-white-1" src={coinrankingLogoWhite1}
                                 alt="coinranking-logo-white 1"/>
                        </div>
                    </div>
                </div>
                <div className="road-map">
                    <RoadmapSection/>
                </div>
                <div className="join-our-community">
                    <div className="overlap-group7">
                        <div className="frame-1000001280">
                            <img className="join-our-community-1" src="/img/join-our-community.svg"
                                 alt="Join our community"/>
                            <p className="join-our-robust-comm">{joinOurRobustComm}</p>
                        </div>
                        <div className="x-container">
                            <div className="frame-1000001227">
                                <img className="group-10000012" src="/img/group-1000001220.svg"
                                     alt="Group 1000001220"/>
                                <a href="https://example.com/" target="_blank"
                                   className="align-self-flex-center hover-link-with-color">
                                    <div className="make-connection-with-members rajdhani-normal-white-19-8px">
                                        {makeConnectionWithMembers}
                                    </div>
                                </a>
                            </div>
                            <div className="group-1000001293">
                                <img className="group-10000012" src="/img/group-1000001292.svg"
                                     alt="Group 1000001292"/>
                                <a href="https://example.com/" target="_blank"
                                   className="align-self-flex-center hover-link-with-color">
                                    <div
                                        className="join-our-reddit-community rajdhani-normal-white-19-8px">{joinOurRedditCommunity}</div>
                                </a>
                            </div>
                            <div className="group-1000001294">
                                <img className="group-10000012" src={group1000001221} alt="Group 1000001221"/>
                                <a href="https://example.com/" target="_blank"
                                   className="align-self-flex-center hover-link-with-color">
                                    <div
                                        className="catch-the-latest-news rajdhani-normal-white-19-8px">{catchTheLatestNews}</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group-1000001295">
                    <div className="group-1000001326">
                        <div className="group-5437">
                            <img className="group-5436" src={group5436} alt="Group 5436"/>
                            <p className="title-3">{title2}</p>
                        </div>
                        <div className="flex-row-2">
                            <a href="https://example.com/" target="_blank">
                                <div className="title-4 rajdhani-medium-concord-25px">{title3}</div>
                            </a>
                            <img className="line-3" src="/img/line-3.svg" alt="Line 3"/>
                            <a href="https://example.com/" target="_blank">
                                <div className="title-5 rajdhani-medium-concord-25px">{title4}</div>
                            </a>
                        </div>
                    </div>
                    <div className="group-1000001267">
                        <div className="marketplace">
                            <a href="https://example.com/" target="_blank">
                                <div className="title rajdhani-medium-concord-25px">{title5}</div>
                            </a>
                            <a href="https://example.com/" target="_blank" className="align-self-flex-end">
                                <div className="title-6 rajdhani-medium-concord-25px">{title6}</div>
                            </a>
                            <a href="https://example.com/" target="_blank">
                                <div className="title-7 rajdhani-medium-concord-25px">{title7}</div>
                            </a>
                            <a href="https://example.com/" target="_blank">
                                <div className="cubix-token valign-text-middle rajdhani-medium-concord-25px">
                  <span>
                    <a href="https://example.com/" target="_blank">
                      <span className="rajdhani-medium-concord-25px">{spanText17}</span>
                    </a>
                    <a href="https://example.com/" target="_blank">
                      <span className="rajdhani-medium-concord-25px">{spanText18}</span>
                    </a>
                  </span>
                                </div>
                            </a>
                        </div>
                        <div className="info">
                            <a href="https://example.com/" target="_blank">
                                <div className="title-1 rajdhani-medium-concord-25px">{title8}</div>
                            </a>
                            <a href="https://example.com/" target="_blank">
                                <div className="title-1 rajdhani-medium-concord-25px">{title9}</div>
                            </a>
                            <a href="https://example.com/" target="_blank">
                                <div className="title-1 rajdhani-medium-concord-25px">{title10}</div>
                            </a>
                            <a href="https://example.com/" target="_blank">
                                <div
                                    className="affiliate-marketing valign-text-middle rajdhani-medium-concord-25px">
                                    {affiliateMarketing}
                                </div>
                            </a>
                        </div>
                        <div className="about-us">
                            <a href="https://example.com/" target="_blank">
                                <div className="title rajdhani-medium-concord-25px">{title11}</div>
                            </a>
                            <a href="https://example.com/" target="_blank" className="align-self-flex-end">
                                <div className="title-8 rajdhani-medium-concord-25px">{title12}</div>
                            </a>
                        </div>
                    </div>
                    <div className="flex-col-3">
                        <div className="email-address">
                            <div className="frame-4">
                                <input
                                    className="email-address-1"
                                    name="emailaddress"
                                    placeholder={inputPlaceholder}
                                    type={inputType}
                                    required
                                />
                                <a href="javascript:SubmitForm('form1')">
                                    <div className="arrow-left">
                                        <div className="group-1000001250">
                                            <div className="overlap-group-5">
                                                <img className="polygon-2" src="/img/polygon-2.svg"
                                                     alt="Polygon 2"/>
                                                <img className="arrow-1" src="/img/arrow-1.svg" alt="Arrow 1"/>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <footer className="footer">
                            <div className="stay-connected">{stayConnected}</div>
                            <div className="icon">
                                <div className="flex-row-3">
                                    <img className="fb-icon" src={fbIcon} alt="FB Icon"/>
                                    <img className="icon-linkedin" src={iconLinkedin} alt="icon-linkedin"/>
                                    <img className="medium" src={medium} alt="Medium"/>
                                    <img className="youtube" src={youtube} alt="Youtube"/>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
