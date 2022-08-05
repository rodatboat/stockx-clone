import './ProductSlider.css';
import ProductSlide from './ProductSlide'
import { useState, useEffect } from "react";


const ProductSlider = ({sliderHeader, relatedShoes})=> {

    const [shoes, setShoes] = useState([]);

    useEffect(()=>{
        setShoes(relatedShoes)
    }, [])

    if(shoes){
    return (
        <>
        <div className="slider-component">
            <span className="slider-header">{sliderHeader}</span>
            <div className="product-list">

                {shoes.map((s,_) => {
                    return <ProductSlide key={_} shoe={s.node}/>
                })}
            </div>
        </div>
        </>
    )}
}

export default ProductSlider;