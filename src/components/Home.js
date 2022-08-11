import "./Home.css";
import ProductSlider from "./ProductSlider";
import BrandSlider from "./BrandSlider";
import ShoeData from "../db.json";
import {useEffect } from "react";

const Home = () => {

  const fetchSliderShoes = () => {
    const currItems = []
    for (let j = 0; j < 6; j++) {
      const randomNum = Math.floor(Math.random() * ShoeData.length);
      currItems.push(ShoeData[randomNum])
    }

    return currItems;
  };

  useEffect(() => {
  }, []);

  return (
    <>
      <div className="home-component">
        <div className="home-content">
          <div className="home-nav">
            <div className="home-nav-links">
              <span>Sneakers</span>
              <span>Apparel</span>
              <span>Electronics</span>
              <span>Trading Cards</span>
              <span>Collectibles</span>
              <span>Accessories</span>
              <span>NFTs</span>
            </div>
          </div>
          <img
            className="home-landing-img"
            src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt4404bff0b33f546f/62efe6c942380217691bec96/BTS_Phase1_LandingPage_Primary_Desktop.jpg"
          />
          <div className="home-slider">
          <ProductSlider
                sliderHeader={"Trending Sneakers"}
                relatedShoes={fetchSliderShoes}
              />
          </div>
          <div className="home-slider">
            <BrandSlider sliderHeader={"Popular Brands"} />
          </div>
          <div className="home-slider">
          <ProductSlider
                sliderHeader={"Recently Viewed"}
                relatedShoes={fetchSliderShoes}
              />
          </div>

          <div className="home-slider">
          <ProductSlider
                sliderHeader={"Featured Apparel"}
                relatedShoes={fetchSliderShoes}
              />
          </div>

          <div className="home-two-ad">
            <div className="home-two-ad-big">
              <img src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt635a643a592ee719/62f17a11f0bc6d1158224306/Bearbrick_Assets_SecondaryA_(1).jpg" />
            </div>
            <div className="home-two-ad-small">
              <img src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt05a05b38c866dfa1/62f177c318595876bf317714/Stand-Out-BTS_SecondaryB-EN.png" />
            </div>
          </div>

          <div className="home-slider">
          <ProductSlider
                sliderHeader={"Electronics Spotlight"}
                relatedShoes={fetchSliderShoes}
              />
          </div>

          <div className="home-slider">
          <ProductSlider
                sliderHeader={"Featured Trading Cards"}
                relatedShoes={fetchSliderShoes}
              />
          </div>

          <div className="home-two-ad">
            <div className="home-two-ad-small">
            <img src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/bltc541be59d69a2a87/62f177c2df0a3871e08a8ebb/BackpacksBags_SecondaryB.png" />
            </div>
            <div className="home-two-ad-big">
            <img src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt8ea39454c9129c13/62ec3944e71af410b83bfc3f/RipNDip_DropX_SecondaryA_copy.jpg" />
            </div>
          </div>

          <div className="home-slider">
          <ProductSlider
                sliderHeader={"Collectibles Staff Picks"}
                relatedShoes={fetchSliderShoes}
              />
          </div>

          <div className="home-slider">
          <ProductSlider
                sliderHeader={"Featured Accessories"}
                relatedShoes={fetchSliderShoes}
              />
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
