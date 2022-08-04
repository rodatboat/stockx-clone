import './ProductSlider.css';
import ProductSlide from './ProductSlide'

import ShoeData from "../db.json";
import { useState, useEffect } from "react";

const ProductSlider = ({sliderHeader})=> {

    const [shoes, setShoes] = useState(ShoeData);


    return (
        <>
        <div className="slider-component">
            <span className="slider-header">{sliderHeader}</span>
            <div className="product-list">
            <ProductSlide shoe={shoes[1].node}/>
            <ProductSlide shoe={shoes[2].node}/>
            <ProductSlide shoe={shoes[3].node}/>
            <ProductSlide shoe={shoes[5].node}/>
            <ProductSlide shoe={shoes[6].node}/>
            <ProductSlide shoe={shoes[7].node}/>
            </div>
        </div>
        </>
    )
}

export default ProductSlider;