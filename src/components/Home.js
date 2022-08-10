import './Home.css'
import ProductSlider from './ProductSlider'
import BrandSlider from './BrandSlider'
import ShoeData from '../db.json'
import { useState, useEffect } from 'react'

const Home = () => {

    const [sliderShoes, setSliderShoes] = useState([])

    const fetchSliderShoes = (data) => {
        for(let j = 0; j < 6; j++){
            const randomNum = Math.floor(Math.random() * ShoeData.length);
            setSliderShoes(c => [...c, data[randomNum]])
        }
    }

    useEffect(() => {
        setSliderShoes([])
        fetchSliderShoes(ShoeData)

    }, [])

    return (
        <>
            <div className='home-component'>
                <div className='home-content'>
                    <div className='home-nav'>
                        <div className='home-nav-links'>
                            <span>Sneakers</span>
                            <span>Apparel</span>
                            <span>Electronics</span>
                            <span>Trading Cards</span>
                            <span>Collectibles</span>
                            <span>Accessories</span>
                            <span>NFTs</span>
                        </div>
                    </div>
                    <img className='home-landing-img' src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt4404bff0b33f546f/62efe6c942380217691bec96/BTS_Phase1_LandingPage_Primary_Desktop.jpg"/>
                    <div className='home-slider'>
                        {sliderShoes.length > 0 ? <ProductSlider sliderHeader={'Trending Sneakers'} relatedShoes={sliderShoes} /> : false}
                    </div>
                    <div className='home-slider'>
                        <BrandSlider sliderHeader={"Popular Brands"} />
                    </div>
                    <div className='home-slider'>
                        {sliderShoes.length > 0 ? <ProductSlider sliderHeader={'Recently Viewed'} relatedShoes={sliderShoes} /> : false}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
