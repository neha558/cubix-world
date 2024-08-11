import React from "react";
import { InView } from "react-intersection-observer";
import Zoom from "react-reveal/Zoom";
function TradeContent(props) {
    const {inView} = props;
    return (
            <Zoom duration={2000} right cascade spy={inView}>
                <img
                    className="trade-cubix-nf-ts-wi"
                    src="/img/trade-cubix-nfts-with-ease--buy--sell--or-rent-on-the-cubix-mark.svg"
                    alt="Trade CUBIX NFTs with Ease: Buy, Sell, or Rent on the CUBIX Marketplace"
                />
            </Zoom>
    );
}

export default TradeContent;