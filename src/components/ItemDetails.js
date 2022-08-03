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
              <span>{capitalize(shoe.title)}</span>
            </div>
            <div className="itemdetails-tab-icons">
              <FaRegPlusSquare size={iconSize} />
              <FaHeart size={iconSize}  />
              <FaSignOutAlt size={iconSize}  />
            </div>
          </div>
          <div className="itemdetails-title"></div>
          <div className="itemdetails-tags"></div>
          <div className="itemdetails-details"></div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
