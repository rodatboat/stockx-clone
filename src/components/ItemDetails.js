import "./ItemDetails.css";
import ShoeData from "../db.json";
import { useState, useEffect } from "react";
import { FaHeart, FaRegPlusSquare, FaSignOutAlt } from "react-icons/fa";
import NavTrack from "./NavTrack";

const ItemDetails = () => {
  const [shoe, setShoe] = useState(ShoeData[0].node);

  // useEffect(() => {
  //     setShoe(ShoeData[0].node)

  // }, [shoe])
  return (
    <>
      <div className="itemdetails-component">
        <div className="itemdetails-content">
        <NavTrack shoe={shoe} />
          {/*  */}
          <div className="itemdetails-title">
            <span className="itemdetails-title-model">{shoe.model}</span>
            <span className="itemdetails-title-name">{shoe.name}</span>
            <div className="itemdetails-tags">
              <span className="itemdetails-tags-authentic">
                Verified Authentic
              </span>
              <span className="itemdetails-tags-condition">
                {"Condition: "}{" "}
                <span style={{ color: "#006340" }}>{shoe.condition}</span>
              </span>
            </div>
          </div>
          {/*  */}
          <div className="itemdetails-details">
            <div className="itemdetails-details-image">
              <img src={shoe.media.smallImageUrl} />
            </div>
            <div className="itemdetails-details-buy">
              <div className="itemdetails-details-recentsales">
                <div className="recentsales-img">
                  <img src="https://stockx-assets.imgix.net/dynamic/SellingFastBadge.gif?auto=format,compress&w=150&h=150&gif-q=50" />
                </div>
                <div className="recentsales-count">
                  <span>1337 Sold in Last 3 Days!</span>
                </div>
              </div>
              {/*  */}
              <div className="itemdetails-details-sizepanel">
                <button className="sizes-button">
                  <span>Size:</span>
                  <span className="current-size">{"All"}</span>
                </button>
                <div className="bid-buy-buttons">
                  <button className="bid-button">Place Bid</button>
                  <button className="buy-button">{"Buy for " + "$109"}</button>
                </div>
                <span className="sizepanel-divider"></span>
                <span className="sell-now">
                  {"Sell for " + "$166" + " or Ask for More ->"}
                </span>
              </div>
              {/*  */}
              <div className="itemdetails-lastsale">
                <div className="lastsale">
                  <span>Last Sale:</span>
                  <span className="lastsale-price">{"$142"}</span>
                  <div className="lastsale-change">
                    <span className="lastsale-change-int">{"$14"}</span>
                    <span className="lastsale-change-percent">({"11%"})</span>
                  </div>
                </div>
                <div className="lastsale-options">
                  <button>View Asks</button>
                  <button>View Bids</button>
                  <button>View Sales</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
