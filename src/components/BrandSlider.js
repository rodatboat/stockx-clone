import './BrandSlider.css'

const BrandSlider = ({sliderHeader}) => {
    return (
        <>
        <div className="brandslider-component">
        <span className="slider-header">{sliderHeader}</span>
            <div className="brand-list">
        <img  src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/bltbb91c212b5de4d8a/61561b6110d4154779bdba01/jordan.png" />
        <img  src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt02e2e8c84bc2b6f6/61561a71c3934450a14e395a/supreme_tile.png" />
        <img  src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/bltd17af3434fe765f4/61561a892b3bb345f7e7fae9/ps4.png" />
        <img  src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt9fd4296f268a90bb/61561b4310d4154779bdb9ff/yzy.png" />
        <img  src="https://images.contentstack.io/v3/assets/blt818b0c67cf450811/blt7680e1627e5b56e7/61561ba72b3bb345f7e7faed/lego.png" />
        </div>
        </div>
        </>
    )
}

export default BrandSlider;