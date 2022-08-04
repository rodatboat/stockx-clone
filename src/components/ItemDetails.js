import "./ItemDetails.css";
import ShoeData from "../db.json";
import { useState, useEffect } from "react";
import { FaHeart, FaRegPlusSquare, FaSignOutAlt } from "react-icons/fa";

const ItemDetails = () => {

    const iconSize = 24;
  const [shoe, setShoe] = useState(ShoeData[0].node);

  const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  // useEffect(() => {
  //     setShoe(ShoeData[0].node)

  // }, [shoe])
  return (
    <>
      <div className="itemdetails-component">
        <div className="itemdetails-content">
          <div className="itemdetails-tab">
            <div className="itemdetails-trace">
              <span>Home</span>
              <span>/</span>
              <span>{capitalize(shoe.productCategory)}</span>
              <span>/</span>
              <span>{capitalize(shoe.brand)}</span>
              <span>/</span>
              <span style={{borderBottom:"1px solid black"}}>{capitalize(shoe.title)}</span>
            </div>
            <div className="itemdetails-tab-icons">
              <FaRegPlusSquare size={iconSize} />
              <FaHeart size={iconSize}  />
              <FaSignOutAlt size={iconSize}  />
            </div>
          </div>
          {/*  */}
          <div className="itemdetails-title">
            <span className="itemdetails-title-model">{shoe.model}</span>
            <span className="itemdetails-title-name">{shoe.name}</span>
            <div className="itemdetails-tags">
              <span className="itemdetails-tags-authentic">Verified Authentic</span>
              <span className="itemdetails-tags-condition">{"Condition: "} <span style={{color:"#006340"}}>{shoe.condition}</span></span>
            </div>
          </div>
          {/*  */}
          <div className="itemdetails-details">
            <div className="itemdetails-details-image">
              <img src={shoe.media.smallImageUrl} />
            </div>
            <div className="itemdetails-details-buy">
            <div className="itemdetails-details-recentsales">
              <div className="recentsales-img"><img src="https://stockx-assets.imgix.net/dynamic/SellingFastBadge.gif?auto=format,compress&w=150&h=150&gif-q=50" /></div>
              <div className="recentsales-count"><span>1337 Sold in Last 3 Days!</span></div>
            </div>
            <div className="itemdetails-details-size"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
