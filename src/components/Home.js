import './Home.css'
import ProductSlider from './ProductSlider'

const Home = () => {
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
                    <div className='home-ad'></div>
                    <div className='home-slider'>
                        <ProductSlider sliderHeader={'Trending Sneakers'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
