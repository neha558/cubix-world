import React from "react";
import BuyNowButton from "./BuyNowButton";
import SmartContractButton from "./SmartContractButton";
import {InView} from "react-intersection-observer";
import Slide from "react-reveal/Slide";

function TokenSection(props) {
    const [inView, setInView] = React.useState(false);
    const [inViewButton, setInViewButton] = React.useState(false);
    return (
        <>
            <img className="coin2-2" src="/img/coin2-2.gif" alt="coin2 2"/>
            <div className="frame-container-2">
                <div className="frame-1000001270">
                    <InView onChange={setInView}>
                        <Slide right spy={inView}>
                            <img className="c-ubix-token" src="/img/-cubix-token.svg" alt="cUBIX Token"/>
                            <p className="cubix-is-a-utility-t">
                                Cubix Is A Utility Token Used In The Cubix Ecosystem For Various Purposes Such As
                                Gameplay
                                Rewards, Staking, And Liquidity Pool Farming. It Can Be Earned By Playing Games Or
                                Bought On
                                Bitmart Exchange.
                            </p>
                        </Slide>
                    </InView>
                </div>
                <InView onChange={setInViewButton}>
                    <div className="frame-1000001271">
                        <Slide right spy={inViewButton}>
                            <BuyNowButton/>
                            <SmartContractButton/>
                        </Slide>
                    </div>
                </InView>
            </div>
        </>
    );
}

export default TokenSection;
