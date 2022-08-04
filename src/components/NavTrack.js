import { FaHeart, FaRegPlusSquare, FaSignOutAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import './NavTrack.css'

const NavTrack = ({shoe}) => {
    const iconSize = 24;

    const capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
      };


    return (
        <>
        <div className="itemdetails-tab">
            <div className="itemdetails-trace">
              <span>Home</span>
              <span>/</span>
              <span>{capitalize(shoe.productCategory)}</span>
              <span>/</span>
              <span>{capitalize(shoe.brand)}</span>
              <span>/</span>
              <span style={{ borderBottom: "1px solid black" }}>
                {capitalize(shoe.title)}
              </span>
            </div>
            <div className="itemdetails-tab-icons">
              <FaRegPlusSquare size={iconSize} />
              <FaHeart size={iconSize} />
              <FaSignOutAlt size={iconSize} />
            </div>
          </div>
        </>
    )
}

export default NavTrack;