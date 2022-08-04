import "./ProductDetails.css";
import { useState, useEffect } from "react";

const ProductDetails = ({ shoe }) => {
  return (
    <>
      <div className="productdetails-component">
        <span className="productdetails-header">Product Details</span>
        <div className="product-details-all">
          <div className="product-details">
            <div className="product-style">
              <span className="product-key">Style</span>
              <span className="product-value">{shoe.productTraits[0].value}</span>
            </div>

            <div className="product-colorway">
              <span className="product-key">Colorway</span>
              <span className="product-value">{shoe.productTraits[1].value}</span>
            </div>

            <div className="product-retail">
              <span className="product-key">Retail Price</span>
              <span className="product-value">{"$" + shoe.productTraits[2].value}</span>
            </div>

            <div className="product-release">
              <span className="product-key">Release Date</span>
              <span className="product-value">{shoe.productTraits[3].value}</span>
            </div>
          </div>
          <div className="product-details-description">
            <span className="description-header">Product Description</span>
            <span className="description-header-content">{shoe.description}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
